import turkeyData, { City, District, Neighborhood, Street, Region } from './index';

// TypeScript ile kullanım örnekleri

// 1. İl bilgisi getir (type-safe)
const istanbul: City | undefined = turkeyData.getCityByCode('34');
if (istanbul) {
  console.log(`İl: ${istanbul.cityName}`);
  console.log(`Bölge: ${istanbul.region}`);
  console.log(`Posta Kodu: ${istanbul.postalCode}`);
}

// 2. Bölgeye göre iller
const region: Region = 'Marmara';
const marmaraCities: City[] = turkeyData.getCitiesByRegion(region);
console.log(`${region} Bölgesi: ${marmaraCities.length} il`);

// 3. İlçeleri getir
const districts: District[] = turkeyData.getDistrictsByCity('34');
console.log(`İstanbul'da ${districts.length} ilçe var`);

// 4. Mahalle bilgileri
const neighborhoods: Neighborhood[] = turkeyData.getNeighborhoodsByDistrict('0607');
console.log(`Çankaya'da ${neighborhoods.length} mahalle var (örnek veri)`);

// 5. Sokak bilgileri
const streets: Street[] = turkeyData.getStreetsByCity('34');
console.log(`İstanbul'da ${streets.length} sokak var (örnek veri)`);

// 6. Arama (type-safe)
const searchResults: City[] = turkeyData.searchCities('ANKARA');
console.log(`Arama sonucu: ${searchResults.length} il`);

// 7. Hiyerarşik veri
function getCityHierarchy(cityCode: string): void {
  const city = turkeyData.getCityByCode(cityCode);
  if (!city) return;

  const districts = turkeyData.getDistrictsByCity(cityCode);
  const neighborhoods = turkeyData.getNeighborhoodsByCity(cityCode);
  const streets = turkeyData.getStreetsByCity(cityCode);

  console.log(`\n${city.cityName} Hiyerarşisi:`);
  console.log(`  Bölge: ${city.region}`);
  console.log(`  İlçe: ${districts.length}`);
  console.log(`  Mahalle: ${neighborhoods.length}`);
  console.log(`  Sokak: ${streets.length}`);
}

getCityHierarchy('34');
getCityHierarchy('6');
getCityHierarchy('35');

// 8. Type güvenli filtreleme
const karadenizCities: City[] = turkeyData.getCitiesByRegion('Karadeniz');
const cityNames: string[] = karadenizCities.map(city => city.cityName);
console.log('\nKaradeniz Bölgesi İlleri:', cityNames.join(', '));

// 9. Kod bazlı sorgular
const cankaya: District | undefined = turkeyData.getDistrictByCode('0607');
if (cankaya) {
  const mahalleler = turkeyData.getNeighborhoodsByDistrict(cankaya.districtCode);
  console.log(`\n${cankaya.districtName}, ${cankaya.cityName}`);
  console.log(`Mahalleler: ${mahalleler.map(m => m.neighborhoodName).join(', ')}`);
}

// 10. Generic fonksiyon örneği
function findByName<T extends { cityName?: string; districtName?: string; neighborhoodName?: string }>(
  items: T[],
  name: string
): T[] {
  const upperName = name.toUpperCase();
  return items.filter(item => {
    const itemName = item.cityName || item.districtName || item.neighborhoodName || '';
    return itemName.includes(upperName);
  });
}

const foundCities = findByName(turkeyData.getAllCities(), 'İSTANBUL');
console.log(`\nBulunan iller: ${foundCities.map(c => c.cityName).join(', ')}`);
