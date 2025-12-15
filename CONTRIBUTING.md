# Katkıda Bulunma Rehberi

Projeye katkıda bulunmak istediğiniz için teşekkürler! 🎉

## Nasıl Katkıda Bulunabilirim?

### 1. İlçe Bilgilerini Eklemek

Şu anda sadece Adana ilçeleri mevcut. Diğer iller için de ilçe bilgilerini ekleyebilirsiniz.

**Format:**
```json
{
  "cityCode": "6",
  "cityName": "ANKARA",
  "districtName": "ÇANKAYA",
  "districtCode": "0601"
}
```

**İlçe Kodu Formatı:** `[İl Plaka Kodu][İlçe Sıra No]`
- Örnek: Ankara (06) Çankaya → "0601"
- İlçe sıra numaraları alfabetik sırayla verilebilir

### 2. Mahalle Bilgilerini Eklemek

Yeni bir `neighborhoods.json` dosyası oluşturabilirsiniz:

```json
{
  "cityCode": "34",
  "cityName": "İSTANBUL",
  "districtCode": "3401",
  "districtName": "ADALAR",
  "neighborhoodName": "BURGAZADA",
  "neighborhoodCode": "340101"
}
```

### 3. Posta Kodlarını Detaylandırmak

İlçe ve mahalle bazında posta kodlarını ekleyebilirsiniz.

### 4. Ek Bilgiler

- Alan kodları (telefon)
- Koordinatlar (latitude/longitude)
- Nüfus bilgileri
- İl/İlçe web siteleri

## Kod Standartları

1. **JSON Formatı**: Tüm JSON dosyaları geçerli format olmalı
2. **Encoding**: UTF-8 encoding kullanın
3. **İsimler**: İl/ilçe isimleri büyük harfle, Türkçe karakterler korunmalı
4. **Tutarlılık**: Mevcut veri yapısına uygun olmalı

## Pull Request Süreci

1. Projeyi fork edin
2. Yeni bir branch oluşturun: `git checkout -b feature/ilce-ekle`
3. Değişikliklerinizi yapın
4. Test edin: `npm test`
5. Commit edin: `git commit -am 'Ankara ilçeleri eklendi'`
6. Push edin: `git push origin feature/ilce-ekle`
7. Pull Request açın

## Commit Mesajları

Türkçe veya İngilizce, açıklayıcı mesajlar kullanın:

```
✨ Ankara ilçeleri eklendi
🐛 Hatay posta kodu düzeltildi
📚 README güncellendi
🧪 Test senaryoları eklendi
```

## Test Etme

Değişikliklerinizi test etmek için:

```bash
node test.js
```

## Sorularınız mı var?

[GitHub Issues](https://github.com/halilertekin/turkey_province_image/issues) üzerinden sorabilirsiniz.

## Teşekkürler! 🙏

Her katkı, projeyi daha iyi hale getirir!