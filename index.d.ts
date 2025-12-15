export type Region = 
  | 'Marmara'
  | 'Ege'
  | 'Akdeniz'
  | 'İç Anadolu'
  | 'Karadeniz'
  | 'Doğu Anadolu'
  | 'Güneydoğu Anadolu';

export interface City {
  cityCode: string;
  cityName: string;
  plateCode: string;
  region: Region;
  cityPic: string;
  postalCode: string;
}

export interface District {
  cityCode: string;
  cityName: string;
  districtCode: string;
  districtName: string;
  postalCode: string;
}

export interface Neighborhood {
  cityCode: string;
  cityName: string;
  districtCode: string;
  districtName: string;
  neighborhoodCode: string;
  neighborhoodName: string;
  postalCode: string;
}

export interface Street {
  cityCode: string;
  districtCode: string;
  neighborhoodCode: string;
  streetCode: string;
  streetName: string;
}

export interface TurkeyData {
  cities: City[];
  districts: District[];
  neighborhoods: Neighborhood[];
  streets: Street[];
  
  /**
   * Tüm illeri getirir
   * @returns City dizisi
   */
  getAllCities(): City[];
  
  /**
   * Plaka/il koduna göre il bilgisi getirir
   * @param code - İl kodu (1-81)
   * @returns City objesi veya undefined
   */
  getCityByCode(code: string | number): City | undefined;
  
  /**
   * İl adına göre il bilgisi getirir (büyük/küçük harf duyarsız)
   * @param name - İl adı
   * @returns City objesi veya undefined
   */
  getCityByName(name: string): City | undefined;
  
  /**
   * Bölge adına göre illeri getirir
   * @param region - Bölge adı
   * @returns City dizisi
   */
  getCitiesByRegion(region: Region): City[];
  
  /**
   * Tüm ilçeleri getirir
   * @returns District dizisi
   */
  getAllDistricts(): District[];
  
  /**
   * İl koduna göre o ile ait ilçeleri getirir
   * @param cityCode - İl kodu
   * @returns District dizisi
   */
  getDistrictsByCity(cityCode: string | number): District[];
  
  /**
   * İlçe koduna göre ilçe bilgisi getirir
   * @param districtCode - İlçe kodu
   * @returns District objesi veya undefined
   */
  getDistrictByCode(districtCode: string): District | undefined;
  
  /**
   * Tüm mahalleleri getirir
   * @returns Neighborhood dizisi
   */
  getAllNeighborhoods(): Neighborhood[];
  
  /**
   * İl koduna göre mahalleleri getirir
   * @param cityCode - İl kodu
   * @returns Neighborhood dizisi
   */
  getNeighborhoodsByCity(cityCode: string | number): Neighborhood[];
  
  /**
   * İlçe koduna göre mahalleleri getirir
   * @param districtCode - İlçe kodu
   * @returns Neighborhood dizisi
   */
  getNeighborhoodsByDistrict(districtCode: string): Neighborhood[];
  
  /**
   * Mahalle koduna göre mahalle bilgisi getirir
   * @param neighborhoodCode - Mahalle kodu
   * @returns Neighborhood objesi veya undefined
   */
  getNeighborhoodByCode(neighborhoodCode: string): Neighborhood | undefined;
  
  /**
   * Tüm sokakları getirir
   * @returns Street dizisi
   */
  getAllStreets(): Street[];
  
  /**
   * İl koduna göre sokakları getirir
   * @param cityCode - İl kodu
   * @returns Street dizisi
   */
  getStreetsByCity(cityCode: string | number): Street[];
  
  /**
   * İlçe koduna göre sokakları getirir
   * @param districtCode - İlçe kodu
   * @returns Street dizisi
   */
  getStreetsByDistrict(districtCode: string): Street[];
  
  /**
   * Mahalle koduna göre sokakları getirir
   * @param neighborhoodCode - Mahalle kodu
   * @returns Street dizisi
   */
  getStreetsByNeighborhood(neighborhoodCode: string): Street[];
  
  /**
   * Sokak koduna göre sokak bilgisi getirir
   * @param streetCode - Sokak kodu
   * @returns Street objesi veya undefined
   */
  getStreetByCode(streetCode: string): Street | undefined;
  
  /**
   * İl adına göre arama yapar
   * @param query - Arama terimi
   * @returns City dizisi
   */
  searchCities(query: string): City[];
  
  /**
   * İlçe adına göre arama yapar
   * @param query - Arama terimi
   * @returns District dizisi
   */
  searchDistricts(query: string): District[];
  
  /**
   * Mahalle adına göre arama yapar
   * @param query - Arama terimi
   * @returns Neighborhood dizisi
   */
  searchNeighborhoods(query: string): Neighborhood[];
  
  /**
   * Sokak adına göre arama yapar
   * @param query - Arama terimi
   * @returns Street dizisi
   */
  searchStreets(query: string): Street[];
}

declare const turkeyData: TurkeyData;
export default turkeyData;
