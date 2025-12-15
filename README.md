# 🇹🇷 Turkey Province Image & Data

**The most comprehensive address data package for Turkey!** 81 provinces, 973 districts, 870+ neighborhoods, and 245+ streets. **With TypeScript support!**

[![npm version](https://img.shields.io/npm/v/turkey_province_image.svg)](https://www.npmjs.com/package/turkey_province_image)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)](https://opensource.org/licenses/ISC)

**🇬🇧 English** | [🇹🇷 Türkçe](./README.tr.md)

## 📊 Data Statistics

- 🇹🇷 **81 Provinces** - Complete Turkey
- 🏘️ **973 Districts** - Complete List
- 🏠 **32,000+ Neighborhoods** - Complete Turkey (New!)
- 🛣️ **245+ Streets** - Famous streets
- 🖼️ **81 Province Images** - Visual content

## 📦 Installation

```bash
npm install turkey_province_image
```

## 🚀 Quick Start

```javascript
const turkeyData = require('turkey_province_image');

// Get all provinces (81)
const cities = turkeyData.getAllCities();

// Get Istanbul's districts (39)
const districts = turkeyData.getDistrictsByCity('34');

// Get neighborhoods
const neighborhoods = turkeyData.getNeighborhoodsByDistrict('0607');

// Search
const results = turkeyData.searchCities('ANKARA');
```

## 📚 TypeScript Support

```typescript
import turkeyData, { City, District, Neighborhood, Street } from 'turkey_province_image';

const city: City | undefined = turkeyData.getCityByCode('34');
const districts: District[] = turkeyData.getDistrictsByCity('34');
```

## 📋 Features

- ✅ **81 Provinces** - Complete Turkey
- ✅ **973 Districts** - Official list
- ✅ **32,000+ Neighborhoods** - Complete Turkey
- ✅ **245+ Streets** - Famous streets
- ✅ **TypeScript Support** - Full type safety
- ✅ **7 Geographic Regions** - Regional filtering
- ✅ **24 API Methods** - CRUD + Search
- ✅ **Hierarchical Data** - Province → District → Neighborhood → Street

## 🗂️ Data Coverage

**Neighborhoods (32,000+):**
- Complete list of neighborhoods for all 81 provinces and 973 districts.
- Updated from open data sources (2024/2025).

**Streets (245+):**
- Istanbul: 45 | Ankara: 35 | Izmir: 35
- Other major cities: 130+ streets

## 🔧 API Methods (24)

### Province Methods
```javascript
getAllCities()                    // Get all provinces (81)
getCityByCode(code)              // Get by plate code
getCityByName(name)              // Get by name
getCitiesByRegion(region)        // Get by region
searchCities(query)              // Search provinces
```

### District Methods
```javascript
getAllDistricts()                // Get all districts (973)
getDistrictsByCity(cityCode)     // Get by province
getDistrictByCode(districtCode)  // Get by code
searchDistricts(query)           // Search districts
```

### Neighborhood & Street Methods
```javascript
getAllNeighborhoods()            // All neighborhoods
getNeighborhoodsByCity(code)     // By province
getNeighborhoodsByDistrict(code) // By district
searchNeighborhoods(query)       // Search

getAllStreets()                  // All streets
getStreetsByCity(code)           // By province
getStreetsByDistrict(code)       // By district
searchStreets(query)             // Search
```

## 💡 Usage Examples

### Example 1: Get Complete Hierarchy
```javascript
const istanbul = turkeyData.getCityByCode('34');
const districts = turkeyData.getDistrictsByCity('34');
const neighborhoods = turkeyData.getNeighborhoodsByCity('34');

console.log(`${istanbul.cityName}: ${districts.length} districts, ${neighborhoods.length} neighborhoods`);
// Output: İSTANBUL: 39 districts, 219 neighborhoods
```

### Example 2: Regional Analysis
```javascript
const marmaraCities = turkeyData.getCitiesByRegion('Marmara');
console.log(`Marmara Region: ${marmaraCities.length} provinces`);
// Output: Marmara Region: 11 provinces
```

### Example 3: Search
```javascript
const merkezDistricts = turkeyData.searchDistricts('MERKEZ');
console.log(`Districts named MERKEZ: ${merkezDistricts.length}`);

const ataturkStreets = turkeyData.searchStreets('ATATÜRK');
console.log(`Ataturk streets: ${ataturkStreets.length}`);
```

## 📝 Updates

### v3.3.0 (2025-12-15) 🎉
- ✨ **32,000+ Neighborhoods** - Complete neighborhood data for all of Turkey added!
- 🔄 **Data Source Update** - Switched to GitHub-based open data for easier updates.
- ✨ **245+ Streets** - Complete street data
- 🌍 **English README** - Default language
- 🇹🇷 **Turkish README** - Available as README.tr.md

### Previous Versions
- v3.2.0: Neighborhood & street expansion
- v3.1.0: 973 districts added
- v3.0.0: TypeScript support
- v2.0.0: Geographic regions
- v1.0.0: Initial release

## 🗂️ Data Sources

- [Republic of Turkey Ministry of Interior](https://www.e-icisleri.gov.tr/)
- [General Directorate of Population and Citizenship Affairs](https://www.nvi.gov.tr/)
- [PTT Postal Codes](https://www.ptt.gov.tr/)
- [Wikipedia - Districts of Turkey](https://en.wikipedia.org/wiki/Districts_of_Turkey)

## 🤝 Contributing

Contributions are welcome! Check [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Needed:**
- Adding all neighborhoods (50,000+ total in Turkey)
- Expanding street data
- Coordinate information (lat/lng)
- Population data

## 👤 Author

**Halil Ertekin**
- GitHub: [@halilertekin](https://github.com/halilertekin)

## 📄 License

ISC

## ⭐ Support

If you like the project, don't forget to star it!

---

Made with ❤️ in Turkey 🇹🇷
