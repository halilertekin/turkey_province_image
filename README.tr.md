# 🇹🇷 Turkey Province Image & Data

**Türkiye'nin en kapsamlı adres veri paketi!** 81 il, 973 ilçe, 32.000+ mahalle ve 245+ sokak bilgisi. **TypeScript desteği ile!**

[![npm version](https://img.shields.io/npm/v/@halilertekin/turkey_province_image.svg)](https://www.npmjs.com/package/@halilertekin/turkey_province_image)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)

**🇬🇧 [English](./README.md)** | **🇹🇷 Türkçe** | **🇳🇱 [Nederlands](./README.nl.md)**

## 📊 Veri İstatistikleri

- 🇹🇷 **81 İl** - Tüm Türkiye
- 🏘️ **973 İlçe** - Eksiksiz liste
- 🏠 **32.000+ Mahalle** - Tüm Türkiye (Yeni!)
- 🛣️ **245+ Sokak/Cadde** - Meşhur caddeler
- 🖼️ **81 İl Resmi** - Görsel içerik

## 📦 Kurulum

```bash
npm install @halilertekin/turkey_province_image
```

## 🚀 Kullanım

### JavaScript

```javascript
const turkeyData = require('@halilertekin/turkey_province_image');

// Tüm illeri getir
const cities = turkeyData.getAllCities();

// İstanbul'un ilçelerini getir
const districts = turkeyData.getDistrictsByCity('34');

// Çankaya'nın mahallelerini getir
const neighborhoods = turkeyData.getNeighborhoodsByDistrict('1231');

// Arama yap
const results = turkeyData.searchCities('ANKARA');
```

### TypeScript

```typescript
import turkeyData, { City, District, Neighborhood, Street } from '@halilertekin/turkey_province_image';

const city: City | undefined = turkeyData.getCityByCode('34');
const districts: District[] = turkeyData.getDistrictsByCity('34');
```

## 📋 Özellikler

- ✅ **81 İl** - Tüm Türkiye
- ✅ **973 İlçe** - Resmi liste
- ✅ **32.000+ Mahalle** - Tüm Türkiye
- ✅ **245+ Sokak** - Meşhur caddeler
- ✅ **TypeScript Desteği** - Tam tip güvenliği
- ✅ **7 Coğrafi Bölge** - Bölgesel filtreleme
- ✅ **24 API Metodu** - CRUD + Arama
- ✅ **Hiyerarşik Veri** - İl → İlçe → Mahalle → Sokak

## 🗂️ Veri Kapsamı

**Mahalleler (32.000+):**
- 81 il ve 973 ilçenin tamamı için mahalle listesi.
- Açık veri kaynaklarından güncellendi (2024/2025).

**Sokaklar (245+):**
- İstanbul: 45 | Ankara: 35 | İzmir: 35
- Diğer büyükşehirler: 130+ sokak

## 🔧 API Metodları (24)

### İl Metodları
```javascript
getAllCities()                    // Tüm illeri getir (81)
getCityByCode(code)              // Plaka koduna göre getir
getCityByName(name)              // İsme göre getir
getCitiesByRegion(region)        // Bölgeye göre getir
searchCities(query)              // İl ara
```

### İlçe Metodları
```javascript
getAllDistricts()                // Tüm ilçeleri getir (973)
getDistrictsByCity(cityCode)     // İle göre getir
getDistrictByCode(districtCode)  // Koda göre getir
searchDistricts(query)           // İlçe ara
```

### Mahalle ve Sokak Metodları
```javascript
getAllNeighborhoods()            // Tüm mahalleler
getNeighborhoodsByCity(code)     // İle göre
getNeighborhoodsByDistrict(code) // İlçeye göre
searchNeighborhoods(query)       // Mahalle ara

getAllStreets()                  // Tüm sokaklar
getStreetsByCity(code)           // İle göre
getStreetsByDistrict(code)       // İlçeye göre
searchStreets(query)             // Sokak ara
```

## 💡 Kullanım Örnekleri

### Örnek 1: Tam Hiyerarşi
```javascript
const istanbul = turkeyData.getCityByCode('34');
const districts = turkeyData.getDistrictsByCity('34');
const neighborhoods = turkeyData.getNeighborhoodsByCity('34');

console.log(`${istanbul.cityName}: ${districts.length} ilçe, ${neighborhoods.length} mahalle`);
// Çıktı: İSTANBUL: 39 ilçe, 960 mahalle
```

### Örnek 2: Bölgesel Analiz
```javascript
const marmaraCities = turkeyData.getCitiesByRegion('Marmara');
console.log(`Marmara Bölgesi: ${marmaraCities.length} il`);
```

## 📝 Güncellemeler

### v3.3.1 (2026-05-23) 🛠️
- 🐛 **Senkronizasyon** - Sokak verileri yeni resmi ilçe/mahalle kodlarıyla senkronize edildi.
- 📚 **Doküman Güncellemesi** - İstatistikler ve bağlantılar güncellendi.

### v3.3.0 (2025-12-15) 🎉
- ✨ **32.000+ Mahalle** - Tüm Türkiye mahalle verileri eklendi!
- 🔄 **Veri Kaynağı** - Daha kolay güncellemeler için GitHub tabanlı açık verilere geçildi.

## 👤 Yazar

**Halil Ertekin**
- GitHub: [@halilertekin](https://github.com/halilertekin)

## 📄 Lisans

ISC

---

Made with ❤️ in Turkey 🇹🇷
