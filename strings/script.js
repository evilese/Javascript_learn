let ad = "Arda";
let soyad = "Tosun";
let yas = 23;
let sehir = "İstanbul";

let mesaj = "Benim adım " + ad + " ve soyadım " + soyad + ". " + sehir + "'da yaşıyorum. " + "Emekliliğe " + (65 - yas) + " yıl kaldı."


// ternary operators
let emeklilik = (65-yas > 0) ? "Emekliliğe "+(65-yas) +" yıl kaldı." : "Zaten emekli oldum"

// backtick option+virgül
// dolar option+4
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum. ${emeklilik}`


console.log(mesaj);