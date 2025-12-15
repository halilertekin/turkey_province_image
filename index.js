const cities = require('./cities.json');
const districts = require('./districts.json');
const neighborhoods = require('./neighborhoods.json');
const streets = require('./streets.json');

module.exports = {
  // Raw data
  cities,
  districts,
  neighborhoods,
  streets,
  
  // City methods
  getAllCities: () => cities,
  
  getCityByCode: (code) => cities.find(c => c.cityCode === code.toString()),
  
  getCityByName: (name) => cities.find(c => c.cityName.toUpperCase() === name.toUpperCase()),
  
  getCitiesByRegion: (region) => cities.filter(c => c.region === region),
  
  searchCities: (query) => {
    const upperQuery = query.toUpperCase();
    return cities.filter(c => c.cityName.includes(upperQuery));
  },
  
  // District methods
  getAllDistricts: () => districts,
  
  getDistrictsByCity: (cityCode) => districts.filter(d => d.cityCode === cityCode.toString()),
  
  getDistrictByCode: (districtCode) => districts.find(d => d.districtCode === districtCode),
  
  searchDistricts: (query) => {
    const upperQuery = query.toUpperCase();
    return districts.filter(d => d.districtName.includes(upperQuery));
  },
  
  // Neighborhood methods
  getAllNeighborhoods: () => neighborhoods,
  
  getNeighborhoodsByCity: (cityCode) => neighborhoods.filter(n => n.cityCode === cityCode.toString()),
  
  getNeighborhoodsByDistrict: (districtCode) => neighborhoods.filter(n => n.districtCode === districtCode),
  
  getNeighborhoodByCode: (neighborhoodCode) => neighborhoods.find(n => n.neighborhoodCode === neighborhoodCode),
  
  searchNeighborhoods: (query) => {
    const upperQuery = query.toUpperCase();
    return neighborhoods.filter(n => n.neighborhoodName.includes(upperQuery));
  },
  
  // Street methods
  getAllStreets: () => streets,
  
  getStreetsByCity: (cityCode) => streets.filter(s => s.cityCode === cityCode.toString()),
  
  getStreetsByDistrict: (districtCode) => streets.filter(s => s.districtCode === districtCode),
  
  getStreetsByNeighborhood: (neighborhoodCode) => streets.filter(s => s.neighborhoodCode === neighborhoodCode),
  
  getStreetByCode: (streetCode) => streets.find(s => s.streetCode === streetCode),
  
  searchStreets: (query) => {
    const upperQuery = query.toUpperCase();
    return streets.filter(s => s.streetName.includes(upperQuery));
  }
};
