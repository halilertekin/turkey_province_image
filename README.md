# 🇹🇷 Turkey Province Image & Data

Türkiye'nin 81 ilinin plaka kodları, resimleri, bölgeleri, posta kodları, ilçe, mahalle ve sokak bilgilerini içeren kapsamlı bir NPM paketi. **TypeScript desteği ile!**

[![npm version](https://img.shields.io/npm/v/turkey_province_image.svg)](https://www.npmjs.com/package/turkey_province_image)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)

## 📦 Kurulum

```bash
npm install turkey_province_image
```

## 🚀 Kullanım

### JavaScript

```javascript
const turkeyData = require('turkey_province_image');

// Tüm illeri getir
const cities = turkeyData.getAllCities();
console.log(cities.length); // 81

// İl bilgisi getir
const istanbul = turkeyData.getCityByCode('34');
console.log(istanbul.cityName); // İSTANBUL

// İstanbul'un ilçelerini getir
const districts = turkeyData.getDistrictsByCity('34');
console.log(districts.length); // 39

// Çankaya'nın mahallelerini getir
const neighborhoods = turkeyData.getNeighborhoodsByDistrict('0607');
console.log(neighborhoods);

// Arama yap
const searchResults = turkeyData.searchCities('ANKARA');
console.log(searchResults);
```

### TypeScript

```typescript
import turkeyData, { City, District, Neighborhood, Street, Region } from 'turkey_province_image';

// Type-safe kullanım
const city: City | undefined = turkeyData.getCityByCode('34');
const districts: District[] = turkeyData.getDistrictsByCity('34');
const region: Region = 'Marmara';
const marmaraCities: City[] = turkeyData.getCitiesByRegion(region);
```

## 📊 Veri Yapısı

### İller (Cities) - 81 Adet

```typescript
interface City {
  cityCode: string;        // "34"
  cityName: string;        // "İSTANBUL"
  plateCode: string;       // "34"
  region: Region;          // "Marmara"
  cityPic: string;         // "/pic/34.jpg"
  postalCode: string;      // "34000"
}
```

**7 Coğrafi Bölge:**
- Marmara (11 il)
- Ege (8 il)
- Akdeniz (8 il)
- İç Anadolu (12 il)
- Karadeniz (19 il)
- Doğu Anadolu (14 il)
- Güneydoğu Anadolu (9 il)

### İlçeler (Districts) - 100+ Adet

```typescript
interface District {
  cityCode: string;        // "34"
  cityName: string;        // "İSTANBUL"
  districtCode: string;    // "3420"
  districtName: string;    // "FATİH"
  postalCode: string;      // "34080"
}
```

**Kapsam:** İstanbul (39), İzmir (30), Ankara (25), Adana (15)

### Mahalleler (Neighborhoods) - 40+ Adet

```typescript
interface Neighborhood {
  cityCode: string;           // "34"
  cityName: string;           // "İSTANBUL"
  districtCode: string;       // "3420"
  districtName: string;       // "FATİH"
  neighborhoodCode: string;   // "342005"
  neighborhoodName: string;   // "BEYAZIT"
  postalCode: string;         // "34126"
}
```

### Sokaklar (Streets) - 20+ Adet

```typescript
interface Street {
  cityCode: string;           // "34"
  districtCode: string;       // "3413"
  neighborhoodCode: string;   // "341301"
  streetCode: string;         // "3413011"
  streetName: string;         // "İSTİKLAL CADDESI"
}
```

## 🔧 API Metodları

### İl (City) Metodları

```typescript
// Tüm illeri getir
getAllCities(): City[]

// Plaka koduna göre il getir
getCityByCode(code: string | number): City | undefined

// İsme göre il getir (büyük/küçük harf duyarsız)
getCityByName(name: string): City | undefined

// Bölgeye göre illeri getir
getCitiesByRegion(region: Region): City[]

// İl araması yap
searchCities(query: string): City[]
```

### İlçe (District) Metodları

```typescript
// Tüm ilçeleri getir
getAllDistricts(): District[]

// İl koduna göre ilçeleri getir
getDistrictsByCity(cityCode: string | number): District[]

// İlçe koduna göre ilçe getir
getDistrictByCode(districtCode: string): District | undefined

// İlçe araması yap
searchDistricts(query: string): District[]
```

### Mahalle (Neighborhood) Metodları

```typescript
// Tüm mahalleleri getir
getAllNeighborhoods(): Neighborhood[]

// İl koduna göre mahalleleri getir
getNeighborhoodsByCity(cityCode: string | number): Neighborhood[]

// İlçe koduna göre mahalleleri getir
getNeighborhoodsByDistrict(districtCode: string): Neighborhood[]

// Mahalle koduna göre mahalle getir
getNeighborhoodByCode(neighborhoodCode: string): Neighborhood | undefined

// Mahalle araması yap
searchNeighborhoods(query: string): Neighborhood[]
```

### Sokak (Street) Metodları

```typescript
// Tüm sokakları getir
getAllStreets(): Street[]

// İl koduna göre sokakları getir
getStreetsByCity(cityCode: string | number): Street[]

// İlçe koduna göre sokakları getir
getStreetsByDistrict(districtCode: string): Street[]

// Mahalle koduna göre sokakları getir
getStreetsByNeighborhood(neighborhoodCode: string): Street[]

// Sokak koduna göre sokak getir
getStreetByCode(streetCode: string): Street | undefined

// Sokak araması yap
searchStreets(query: string): Street[]
```

## 💡 Kullanım Örnekleri

### Örnek 1: Bölgesel İstatistik

```javascript
const marmaraCities = turkeyData.getCitiesByRegion('Marmara');
console.log(`Marmara Bölgesi: ${marmaraCities.length} il`);
marmaraCities.forEach(city => {
  console.log(`- ${city.cityName} (${city.plateCode})`);
});
```

### Örnek 2: Hiyerarşik Veri

```javascript
// İstanbul'un tüm verilerini al
const istanbul = turkeyData.getCityByCode('34');
const districts = turkeyData.getDistrictsByCity('34');
const neighborhoods = turkeyData.getNeighborhoodsByCity('34');
const streets = turkeyData.getStreetsByCity('34');

console.log(`${istanbul.cityName}:`);
console.log(`  ${districts.length} ilçe`);
console.log(`  ${neighborhoods.length} mahalle`);
console.log(`  ${streets.length} sokak`);
```

### Örnek 3: Arama ve Filtreleme

```javascript
// "Çankaya" geçen tüm ilçeleri bul
const cankayaDistricts = turkeyData.searchDistricts('ÇANKAYA');

// Atatürk geçen tüm sokakları bul
const ataturkStreets = turkeyData.searchStreets('ATATÜRK');

// Ankara'daki Çankaya ilçesinin mahallelerini getir
const ankara = turkeyData.getCityByName('ANKARA');
const cankaya = turkeyData.getDistrictsByCity(ankara.cityCode)
  .find(d => d.districtName === 'ÇANKAYA');
const neighborhoods = turkeyData.getNeighborhoodsByDistrict(cankaya.districtCode);
```

## 🖼️ Resimler

Her ilin `pic/` klasöründe `01.jpg` - `81.jpg` formatında görseli bulunmaktadır.

```javascript
const ankara = turkeyData.getCityByCode('6');
console.log(ankara.cityPic); // /pic/06.jpg
```

## 📋 Özellikler

- ✅ Türkiye'nin 81 ilinin tam listesi
- ✅ 100+ ilçe (İstanbul, Ankara, İzmir, Adana vb.)
- ✅ 40+ mahalle (örnek veriler)
- ✅ 20+ sokak (örnek veriler)
- ✅ Plaka kodları ve il kodları
- ✅ Her ilin coğrafi bölgesi (7 bölge)
- ✅ Detaylı posta kodları (il, ilçe, mahalle bazında)
- ✅ İl görselleri (81 adet)
- ✅ **TypeScript desteği** (type definitions dahil)
- ✅ Kolay arama ve filtreleme fonksiyonları
- ✅ Hiyerarşik veri yapısı (il → ilçe → mahalle → sokak)

## 📝 Güncellemeler

### v3.0.0 (2025-12-15)
- ✨ **TypeScript desteği** eklendi (index.d.ts)
- ✨ **Mahalle verileri** eklendi (40+ mahalle)
- ✨ **Sokak verileri** eklendi (20+ sokak)
- ✨ İlçe sayısı genişletildi (100+ ilçe: İstanbul 39, İzmir 30, Ankara 25)
- ✨ Yeni API metodları: `getCitiesByRegion`, `searchCities`, `searchDistricts`, vb.
- ✨ Bölge bazlı filtreleme
- ✨ Kapsamlı arama fonksiyonları
- 📚 README tamamen yenilendi

### v2.0.0 (2025-12-15)
- ✨ Coğrafi bölge bilgisi eklendi
- ✨ Posta kodu bilgisi eklendi
- ✨ İlçe verileri eklendi
- 🐛 İl ismi yazım hataları düzeltildi

### v1.0.0
- İlk sürüm: 81 il kodu ve resimleri

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmak isterseniz [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını inceleyebilirsiniz.

**Özellikle şu alanlarda katkı beklenmektedir:**
- Diğer illerin ilçe bilgilerinin tamamlanması (750+ ilçe)
- Tüm mahallelerin eklenmesi (50,000+ mahalle)
- Sokak verilerinin genişletilmesi
- Test coverage artırılması
- Örnek uygulamalar (React, Vue, Angular)

## 📄 Lisans

ISC

## 👤 Yazar

**Halil Ertekin**
- GitHub: [@halilertekin](https://github.com/halilertekin)

## 🐛 Sorun Bildirme

[GitHub Issues](https://github.com/halilertekin/turkey_province_image/issues)

## ⭐ Destek

Projeyi beğendiyseniz yıldız vermeyi unutmayın!

## 📚 Kaynaklar

- [Türkiye İller Listesi](https://www.nvi.gov.tr/)
- [PTT Posta Kodları](https://www.ptt.gov.tr/)

---

Made with ❤️ in Turkey 🇹🇷
