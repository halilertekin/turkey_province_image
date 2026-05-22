const turkeyData = require('./index.js');

console.log('🇹🇷 Turkey Province Data Test - v3.3.0\n');

// Test 1: Tüm illeri getir
console.log('✅ Test 1: Tüm iller');
const allCities = turkeyData.getAllCities();
console.log(`   Toplam il sayısı: ${allCities.length}`);
console.log(`   İlk il: ${allCities[0].cityName}`);
console.log(`   Son il: ${allCities[80].cityName}\n`);

// Test 2: Plaka koduna göre il getir
console.log('✅ Test 2: Plaka koduna göre il');
const istanbul = turkeyData.getCityByCode('34');
console.log(`   İstanbul:`, istanbul);
console.log();

// Test 3: İsme göre il getir
console.log('✅ Test 3: İsme göre il');
const ankara = turkeyData.getCityByName('ankara');
console.log(`   Ankara:`, ankara);
console.log();

// Test 4: Bölgeye göre iller
console.log('✅ Test 4: Bölgeye göre iller');
const marmaraCities = turkeyData.getCitiesByRegion('Marmara');
console.log(`   Marmara Bölgesi il sayısı: ${marmaraCities.length}`);
console.log(`   İller: ${marmaraCities.map(c => c.cityName).join(', ')}\n`);

// Test 5: İle ait ilçeler
console.log('✅ Test 5: İle ait ilçeler');
const istanbulDistricts = turkeyData.getDistrictsByCity('34');
console.log(`   İstanbul ilçe sayısı: ${istanbulDistricts.length}`);
console.log(`   İlk 5 ilçe: ${istanbulDistricts.slice(0, 5).map(d => d.districtName).join(', ')}\n`);

// Test 6: Tüm ilçeler
console.log('✅ Test 6: Tüm ilçeler');
const allDistricts = turkeyData.getAllDistricts();
console.log(`   Toplam ilçe sayısı: ${allDistricts.length}\n`);

// Test 7: Mahalleler
console.log('✅ Test 7: Mahalleler');
const allNeighborhoods = turkeyData.getAllNeighborhoods();
console.log(`   Toplam mahalle sayısı: ${allNeighborhoods.length}`);
const ankaraNeighborhoods = turkeyData.getNeighborhoodsByCity('6');
console.log(`   Ankara mahalle sayısı: ${ankaraNeighborhoods.length}`);
const cankayaNeighborhoods = turkeyData.getNeighborhoodsByDistrict('1231');
console.log(`   Çankaya mahalle sayısı: ${cankayaNeighborhoods.length}\n`);

// Test 8: Sokaklar
console.log('✅ Test 8: Sokaklar');
const allStreets = turkeyData.getAllStreets();
console.log(`   Toplam sokak sayısı: ${allStreets.length}`);
const istanbulStreets = turkeyData.getStreetsByCity('34');
console.log(`   İstanbul sokak sayısı: ${istanbulStreets.length}`);
console.log(`   Örnek sokak:`, allStreets[0]);
console.log();

// Test 9: Arama fonksiyonları
console.log('✅ Test 9: Arama fonksiyonları');
const searchResult = turkeyData.searchCities('İSTANBUL');
console.log(`   'İSTANBUL' araması: ${searchResult.length} sonuç`);
const districtSearch = turkeyData.searchDistricts('ÇANKAYA');
console.log(`   'ÇANKAYA' ilçe araması: ${districtSearch.length} sonuç`);
const streetSearch = turkeyData.searchStreets('ATATÜRK');
console.log(`   'ATATÜRK' sokak araması: ${streetSearch.length} sonuç\n`);

// Test 10: Bölgelere göre il dağılımı
console.log('✅ Test 10: Bölgelere göre il dağılımı');
const regions = {};
allCities.forEach(city => {
  regions[city.region] = (regions[city.region] || 0) + 1;
});
Object.entries(regions).forEach(([region, count]) => {
  console.log(`   ${region}: ${count} il`);
});
console.log();

// Test 11: Kod bazlı sorgular
console.log('✅ Test 11: Kod bazlı sorgular');
const district = turkeyData.getDistrictByCode('1231'); // Çankaya
console.log(`   1231 ilçe kodu:`, district);
const neighborhood = turkeyData.getNeighborhoodByCode('1614'); // 100.YIL
console.log(`   1614 mahalle kodu:`, neighborhood);
const street = turkeyData.getStreetByCode('3413001'); // İstiklal Caddesi
console.log(`   3413001 sokak kodu:`, street);
console.log();

// Test 12: Düzeltilen hatalar
console.log('✅ Test 12: Düzeltilen yazım hataları');
const bilecik = turkeyData.getCityByCode('11');
console.log(`   11 - ${bilecik.cityName} (eski: BİLECİKK)`);
const siirt = turkeyData.getCityByCode('56');
console.log(`   56 - ${siirt.cityName}`);
const karabuk = turkeyData.getCityByCode('78');
console.log(`   78 - ${karabuk.cityName} (eski: KARABüK)`);
const agri = turkeyData.getCityByCode('4');
console.log(`   04 - ${agri.cityName} resim: ${agri.cityPic} (eski: /pic/02.jpg)`);
console.log();

console.log('🎉 Tüm testler başarıyla tamamlandı!');
console.log('📊 Özet:');
console.log(`   - ${allCities.length} il`);
console.log(`   - ${allDistricts.length} ilçe`);
console.log(`   - ${allNeighborhoods.length} mahalle`);
console.log(`   - ${allStreets.length} sokak`);

