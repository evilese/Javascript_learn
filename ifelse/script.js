let yas = 20;
let mezuniyet = "üniversite";


if((yas >= 18) && (mezuniyet == "lise" || mezuniyet == "üniversite")){

    console.log("ehliyet alabilir.");

}
else {
    console.log("başını alır")
}

//and  &&
//or ||

let sayi = 9;

if ((sayi>=10) && (sayi <=50)) {
    console.log("sayi arasındadır")
}else{
    console.log("sayi arasında değildir.")
}


let pozitifsayi= 12;

if ((pozitifsayi % 2 == 1) || (pozitifsayi >0)){
    console.log("sayı pozitif ya da tek sayıdır.")
}else{
    console.log("sayı pozitif tek sayi değildir.")
}

let x=10, y=20, z=30;

if (x>y && y>z){
    console.log("X en büyüktür.")
}else if(y>x && y>z){
    console.log("Y en büyüktür.")
}else if(z>x && z>y){
    console.log("Z en büyüktür.")
} else{
    console.log("Sayılar eşittir.")
}

