# Değişiklik Günlüğü

## [3.0.0] - 2025-12-15

### 🚀 Büyük Güncellemeler

#### ✨ TypeScript Desteği
- **index.d.ts** dosyası eklendi - tam TypeScript desteği
- Tüm tipler export edildi: `City`, `District`, `Neighborhood`, `Street`, `Region`
- Type-safe API metodları
- IntelliSense desteği

#### 📊 Mahalle Verileri
- **neighborhoods.json** dosyası eklendi
- 40+ mahalle verisi (Adana, Ankara, İstanbul, İzmir)
- Mahalle kodu ve posta kodu bilgileri
- Yeni API metodları:
  - `getAllNeighborhoods()`
  - `getNeighborhoodsByCity()`
  - `getNeighborhoodsByDistrict()`
  - `getNeighborhoodByCode()`
  - `searchNeighborhoods()`

#### 🛣️ Sokak Verileri
- **streets.json** dosyası eklendi
- 20+ sokak verisi (örnek: İstiklal Caddesi, Atatürk Caddesi, vb.)
- Sokak kodu sistemi
- Yeni API metodları:
  - `getAllStreets()`
  - `getStreetsByCity()`
  - `getStreetsByDistrict()`
  - `getStreetsByNeighborhood()`
  - `getStreetByCode()`
  - `searchStreets()`

#### 🏙️ İlçe Verileri Genişletildi
- **109 ilçe** verisi (önceden 15)
- İstanbul: 39 ilçe
- İzmir: 30 ilçe
- Ankara: 25 ilçe
- Adana: 15 ilçe
- İlçe posta kodları güncellendi

### ✨ Yeni API Metodları

#### Bölge Filtreleme
- `getCitiesByRegion(region)` - Bölgeye göre illeri getir

#### Gelişmiş Arama
- `searchCities(query)` - İl araması
- `searchDistricts(query)` - İlçe araması
- `searchNeighborhoods(query)` - Mahalle araması
- `searchStreets(query)` - Sokak araması

#### Kod Bazlı Sorgular
- `getDistrictByCode(districtCode)` - İlçe kodu ile sorgulama
- `getNeighborhoodByCode(neighborhoodCode)` - Mahalle kodu ile sorgulama
- `getStreetByCode(streetCode)` - Sokak kodu ile sorgulama

### 📚 Dokümantasyon
- README.md kapsamlı bir şekilde güncellendi
- TypeScript kullanım örnekleri eklendi
- API referansı genişletildi
- Veri yapısı detaylı açıklandı
- Kullanım örnekleri çoğaltıldı

### 📦 Paket Güncellemeleri
- Version: 2.0.0 → 3.0.0
- `types` field eklendi: "index.d.ts"
- `files` field eklendi - npm'e sadece gerekli dosyalar dahil edilir
- Yeni keywords eklendi (typescript, mahalle, sokak, vb.)
- TypeScript ve @types/node bağımlılıkları eklendi

### 🧪 Test Güncellemeleri
- Test dosyası genişletildi (12 test senaryosu)
- Mahalle ve sokak testleri eklendi
- Kod bazlı sorgu testleri eklendi
- Arama fonksiyon testleri eklendi

## [2.0.0] - 2025-12-15

### ✨ Yeni Özellikler
- **Gelişmiş Veri Yapısı**: JSON formatı geçerli array yapısına dönüştürüldü
- **Coğrafi Bölge Bilgisi**: Her il için 7 coğrafi bölge eklendi
- **Posta Kodu**: Her il için posta kodu bilgisi eklendi
- **Plaka Kodu**: Ayrı `plateCode` alanı eklendi
- **İlçe Verileri**: Adana'nın 15 ilçesi eklendi
- **API Metodları**: Temel CRUD metodları eklendi

### 🐛 Düzeltmeler
- **BİLECİK** yazım hatası düzeltildi (eski: BİLECİKK)
- **SİİRT** yazım hatası düzeltildi
- **KARABÜK** yazım hatası düzeltildi (eski: KARABüK)
- **AĞRI** resim yolu düzeltildi

### 📚 Dokümantasyon
- README.md tamamen yeniden yazıldı
- CHANGELOG.md dosyası oluşturuldu
- CONTRIBUTING.md eklendi

## [1.0.0] - Önceki Sürüm

### İlk Versiyon
- 81 ilin temel bilgileri
- Her il için resim dosyası
- Basit JSON formatı

---

## Gelecek Planlar

### [3.1.0] - Yakın Gelecek
- [ ] Tüm 81 ilin ilçe bilgilerinin tamamlanması (750+ ilçe)
- [ ] Daha fazla mahalle verisi
- [ ] Daha fazla sokak verisi
- [ ] Koordinat bilgileri (latitude/longitude)

### [3.2.0] - Orta Vade
- [ ] Alan kodu (telefon) bilgileri
- [ ] Nüfus bilgileri
- [ ] İl/ilçe web siteleri
- [ ] React, Vue, Angular örnek uygulamaları

### [4.0.0] - Uzun Vade
- [ ] Tüm Türkiye mahalleleri (50,000+)
- [ ] Tüm sokaklar
- [ ] Adres doğrulama API'si
- [ ] Coğrafi sınır bilgileri (GeoJSON)
- [ ] GraphQL API desteği