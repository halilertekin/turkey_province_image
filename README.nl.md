# 🇹🇷 Turkije Provincie Afbeelding & Gegevens

**Het meest uitgebreide adresgegevenspakket voor Turkije!** 81 provincies, 973 districten, 32.000+ wijken en 245+ straten. **Met TypeScript-ondersteuning!**

[![npm version](https://img.shields.io/npm/v/@halilertekin/turkey_province_image.svg)](https://www.npmjs.com/package/@halilertekin/turkey_province_image)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)

**🇬🇧 [English](./README.md)** | **🇹🇷 [Türkçe](./README.tr.md)** | **🇳🇱 Nederlands**

## 📊 Gegevensstatistieken

- 🇹🇷 **81 Provincies** - Volledig Turkije
- 🏘️ **973 Districten** - Volledige lijst
- 🏠 **32.000+ Wijken** - Volledig Turkije
- 🛣️ **245+ Straten** - Bekende straten
- 🖼️ **81 Provincie Afbeeldingen** - Visuele inhoud

## 📦 Installatie

```bash
npm install @halilertekin/turkey_province_image
```

## 🚀 Snel Starten

```javascript
const turkeyData = require('@halilertekin/turkey_province_image');

// Haal alle provincies op (81)
const cities = turkeyData.getAllCities();

// Haal de districten van Istanbul op (39)
const districts = turkeyData.getDistrictsByCity('34');

// Haal wijken op
const neighborhoods = turkeyData.getNeighborhoodsByDistrict('1231'); // Çankaya

// Zoeken
const results = turkeyData.searchCities('ANKARA');
```

## 📚 TypeScript Ondersteuning

```typescript
import turkeyData, { City, District, Neighborhood, Street } from '@halilertekin/turkey_province_image';

const city: City | undefined = turkeyData.getCityByCode('34');
const districts: District[] = turkeyData.getDistrictsByCity('34');
```

## 📋 Kenmerken

- ✅ **81 Provincies** - Volledig Turkije
- ✅ **973 Districten** - Officiële lijst
- ✅ **32.000+ Wijken** - Volledig Turkije
- ✅ **245+ Straten** - Bekende straten
- ✅ **TypeScript-ondersteuning** - Volledige typeveiligheid
- ✅ **7 Geografische Regio's** - Regionale filtering
- ✅ **24 API-methoden** - CRUD + Zoeken
- ✅ **Hiërarchische Gegevens** - Provincie → District → Wijk → Straat

## 🔧 API-methoden

### Provincie Methoden
```javascript
getAllCities()                    // Haal alle provincies op (81)
getCityByCode(code)              // Zoek op kentekencode
getCityByName(name)              // Zoek op naam
getCitiesByRegion(region)        // Filter op regio
searchCities(query)              // Zoek provincies
```

### District Methoden
```javascript
getAllDistricts()                // Haal alle districten op (973)
getDistrictsByCity(cityCode)     // Filter op provincie
getDistrictByCode(districtCode)  // Zoek op code
searchDistricts(query)           // Zoek districten
```

## 👤 Auteur

**Halil Ertekin**
- GitHub: [@halilertekin](https://github.com/halilertekin)

## 📄 Licentie

ISC
