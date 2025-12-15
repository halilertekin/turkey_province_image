# Değişiklik Günlüğü

## [3.1.0] - 2025-12-15

### 🚀 BÜYÜK GÜNCELLEME - TÜM TÜRKİYE İLÇELERİ EKLENDİ

#### ✨ İlçe Verileri - TAM LİSTE
- **973 İLÇE** eklendi - Türkiye'nin tüm ilçeleri eksiksiz
- Her il için tüm ilçeler mevcut
- İlçe kodları ve posta kodları eklendi
- Resmi kaynaklara göre güncel liste

**İl Bazında İlçe Sayıları (örnekler):**
- İstanbul: 39 ilçe
- Ankara: 25 ilçe
- İzmir: 30 ilçe
- Bursa: 17 ilçe
- Antalya: 19 ilçe
- Konya: 31 ilçe
- ve tüm diğer iller...

#### 📊 Mahalle Verileri Genişletildi
- **109 mahalle** verisi (önceden 40)
- İstanbul: Fatih (31 mahalle), Kadıköy (18 mahalle)
- Ankara: Çankaya (20 mahalle)
- İzmir: Konak (20 mahalle)
- Adana: Seyhan (20 mahalle)

#### 🛣️ Sokak Verileri Genişletildi
- **70 sokak/cadde** verisi (önceden 20)
- İstanbul: İstiklal Caddesi, Bağdat Caddesi, vb.
- Ankara: Atatürk Bulvarı, Tunalı Hilmi, GMK Bulvarı
- İzmir: Kordon, Kemeraltı, Anafartalar
- Adana, Bursa, Antalya meşhur caddeleri

### 📚 Veri Kaynakları
- T.C. İçişleri Bakanlığı
- Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü
- PTT Posta Kodları
- Wikipedia - Türkiye'nin İlçeleri

### 📦 Paket Güncellemeleri
- Version: 3.0.0 → 3.1.0
- Açıklama güncellendi (973 ilçe vurgusu)
- Yeni keywords eklendi (973, complete, kapsamli)

### 🧪 Test Güncellemeleri
- Testler yeni veri setine göre güncellendi
- 973 ilçe doğrulaması eklendi

### 📊 İstatistikler
```
v3.0.0 → v3.1.0
━━━━━━━━━━━━━━━━━━
İl:       81    →  81    (✓)
İlçe:    109    → 973    (🎉 +864)
Mahalle:  40    → 109    (🎉 +69)
Sokak:    20    →  70    (🎉 +50)
```

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
- Yeni API metodları

#### 🛣️ Sokak Verileri
- **streets.json** dosyası eklendi
- 20+ sokak verisi
- Sokak kodu sistemi
- Yeni API metodları

#### 🏙️ İlçe Verileri Genişletildi
- **109 ilçe** verisi (önceden 15)
- İstanbul: 39 ilçe
- İzmir: 30 ilçe
- Ankara: 25 ilçe
- Adana: 15 ilçe

### ✨ Yeni API Metodları
- `getCitiesByRegion()` - Bölgeye göre illeri getir
- `searchCities()`, `searchDistricts()`, `searchNeighborhoods()`, `searchStreets()`
- `getDistrictByCode()`, `getNeighborhoodByCode()`, `getStreetByCode()`

### 📚 Dokümantasyon
- README.md kapsamlı bir şekilde güncellendi
- TypeScript kullanım örnekleri eklendi
- API referansı genişletildi

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

## [1.0.0] - Önceki Sürüm

### İlk Versiyon
- 81 ilin temel bilgileri
- Her il için resim dosyası
- Basit JSON formatı

---

## Gelecek Planlar

### [3.2.0] - Yakın Gelecek
- [ ] Daha fazla mahalle verisi (büyük şehirler için)
- [ ] Daha fazla sokak verisi
- [ ] Koordinat bilgileri (latitude/longitude)
- [ ] Alan kodu (telefon) bilgileri

### [4.0.0] - Uzun Vade
- [ ] Tüm Türkiye mahalleleri (50,000+)
- [ ] Kapsamlı sokak verileri
- [ ] Adres doğrulama API'si
- [ ] Coğrafi sınır bilgileri (GeoJSON)
- [ ] GraphQL API desteği
- [ ] Nüfus ve demografik veriler