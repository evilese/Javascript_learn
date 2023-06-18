let meyveler = ["Elma","Armut","Muz" ,"Çilek"];

// kaç elemanlıdır?
console.log(meyveler.length);

// ilk ve son elemanı nelerdir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length-1]);

// Elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma"));

// Kiraz meyvesini listenin sonuna ekleyin.
meyveler.push("Kiraz");

// Dizinin son iki elemanını silin
meyveler.splice(-2,2);

console.log(meyveler);

let ogrenci1 = ["Yiğit","Bilgi", 2010, [70,60,80]];
let ogrenci2 = ["Ada","Bilgi", 2012, [80,80,90]];
let ogrenci3 = ["Ahmet","Bilgi", 2009, [60,60,70]];

let ogrenciler = [ogrenci1,ogrenci2,ogrenci3];

let yigit_yas = new Date().getFullYear()-ogrenciler[0][2];
let ada_yas = new Date().getFullYear()-ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear()-ogrenciler[2][2];

console.log(yigit_yas, ada_yas, ahmet_yas);

let yigit_not = (ogrenciler[0][3][0]+ogrenciler[0][3][1]+ogrenciler[0][3][2]) / 3;

console.log(yigit_not);