let kursAdi = " Komple Uygulamalı Web Geliştirme Eğitimi";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];

console.log(sonuc);
sonuc = kursAdi.substring(-5);

sonuc = kursAdi.replace("Eğitimi" , "Kursu");
sonuc = kursAdi.trim();

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");

sonuc = kursAdi.split(" ")[3];



// https://w3schools.com/jsref/jsref_obj_string.asp