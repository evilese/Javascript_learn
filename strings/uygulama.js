let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?

console.log(url.length);

// 2- KursAdi kaç kelimeden oluşmaktadır?

let kelimeSayi;
kelimeSayi = kursAdi.split(" ").length;
console.log(kelimeSayi);

// 3- url https ile mi başlıyor?

sonuc = url.startsWith("https");
if (sonuc) {
    console.log("Evet https ile başlıyor");
}else {
    console.log("Hayır https ile başlamıyor.");
}

// 4- kursAdi içerisinde eğitim kelimesi geçiyor mu?

if (kursAdi.indexOf("Eğitimi") > -1){
    console.log("Evet geçiyor.")
}else {
    console.log("Hayır geçmiyor")
}
// 5- url ve kursadi değişkenlerini oluşturarak link oluşturun: https://www.sadikturan.com/komple-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ", "-");
kursAdi = kursAdi.replace("ş","s");
urlyeni = `${url}/${kursAdi}`;
console.log(urlyeni);