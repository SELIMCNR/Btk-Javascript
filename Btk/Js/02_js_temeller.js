// Değişken oluşturma 
var a ; 
a = 1;

var b=2;
var c=3,e=5;
var d=5;

//Sabit değişken
const Pı = 3.14;

//Blok değişkeni tanımlama
let x=5,z=50;
x=7;
let y = 6;
let toplam = x+y;

var adSoyad;
var ad = "Selim";
var soyad="Çınar";

let cesit = "bitki";

let yeniBaslik="Gol makinesi Dzeko"
//Veri yazdırma
alert("Veri yazdırma");
document.write("Htmldeyiz :)");
console.log("Konsoldayız : (");
document.getElementById("İd").innerHTML="Html furdu gol oldu";
document.getElementById("baslik").innerHTML=yeniBaslik;

//Veri okuma alma
var golüKimAttı = prompt("Golü atan isim : ");
document.write("<br/>"+"Golü atan  "+golüKimAttı);
alert(golüKimAttı);
console.log(golüKimAttı);
document.getElementById("İd").innerHTML="Gölü atan "+golüKimAttı;

// Sözel toplama
var ad = prompt("adınız : ");
document.write("<br/>"+" Merhaba "+ad + " nasılsın ? "+"<br/>");

//Veritipinin adını öğrenme

var xy=5;
document.write("Veritipi : "+typeof(xy)+"<br/>");

xy="isim";
document.write("Veritipi : "+typeof(xy)+"<br/>");

xy=true;
document.write("Veritipi : "+typeof(xy)+"<br/>");

var alsatıraGeç = "<br/>";
var dz;
document.write("Veritipi : "+typeof(dz)+alsatıraGeç);

//Çift tırnak içinde tek tırnak kullanılabilir.
document.write("abc 'bcd'"+alsatıraGeç);

//farklı değişkenler yan yana yazılabilir
document.write(5+"bilimsel"+alsatıraGeç);
document.write(5+"fener");

const person1 = {firstname:"John",lastname:"Doe"};
document.write(person1.firstname);
document.write(person1.lastname);

const persons = ["a","b","c"];
document.write(persons[1]);

const date = new Date("2022 - 03 - 25");

//Veri tipi dönüştürme
var sayi = "5";
sayi = Number(sayi); // number dönüşüm
sayi = String(sayi); // string dönüşüm
sayi = Boolean(sayi); // boolean dönüşüm
sayi = Date(sayi); // date dönüşüm

//toplama yapan uygulama
//İlk sayıyı al
var s1 = Number(prompt("Sayi1 gir : "));
//İkinci sayıyı al 
var s2 = Number(prompt("Sayi2 gir : "));

//toplama yap
var toplama = s1 + s2 ;
//alert ile göster
alert("Toplam = "+toplama);


//Html içinde js veya Js içinde html
var ad = "İsim";
document.write("<i>merhaba</i> <b> ad </b>");
document.write("<br>"); // alt satıra geçirir.
document.write("web sitemize hoşgeldiniz !");


// Bazı algoritmik örnekler 
// Ad yazdırma uygulaması
var ad ; 
ad = prompt("Adınızı yazınız: ");
alert("Adınız : "+ad);

//Girilen sayının karesini bulma
var sayiAlgoritma,kareAlgoritma;
sayiAlgoritma = prompt("Sayı giriniz : ");
kareAlgoritma = sayiAlgoritma * sayiAlgoritma;
alert("Sayı:"+sayi+ "sayının karesi : "+kareAlgoritma);

//İki sayının toplamı
var sayiAlgoritma1,sayiAlgoritma2,toplamAlgoritma;
sayiAlgoritma1 = Number(prompt("Birinci sayi: "));
sayiAlgoritma2 = Number(prompt("İkinci sayi: "));
toplamAlgoritma = sayiAlgoritma1+sayiAlgoritma2;
alert("Sayıların toplamı : "+toplamAlgoritma);

// üç sayının ortalaması 
var sayiAlgoritma11,sayiAlgoritma22,sayiAlgoritma33,ortalamaAlgoritma;
sayiAlgoritma11 = Number(prompt("Birinci sayı : "));
sayiAlgoritma22 = Number(prompt("İkinci sayı : "));
sayiAlgoritma33 = Number(prompt("Ücüncü sayı: "));
ortalamaAlgoritma = (sayiAlgoritma11+sayiAlgoritma22+sayiAlgoritma33)/3;
alert("Sayilarin ortalamasi : "+ortalamaAlgoritma);

// Dikdörtgen alan ve çevresi 
var g,yük,alan,cevre;
g = Number(prompt("Genişlik: "));
yük = Number(prompt("Yükseklik"));
alan = g*y;
cevre = 2*(g+y);

alert("Alan : "+ alan+"Cevre: "+cevre);

//Daire alan ve çevresi 
var r ,alan1,cevre1,pi=3.14;

//Yarıçapı alalım 
r = Number(prompt("Yarıçap: "));
alan1 = pi*r*r;
cevre1=2*pi*r;

alert("Alan : "+ alan1+"Cevre "+cevre1);

//Fahrenhayt-Santigrat Dönüşümü 
var f,c;
f=Number(prompt("Fahrenhayt: "));
c=(f-32)/1.8;
alert(f+"Fahrenhayt : "+c+"Santigrat");

//Tek bilinmeyenli Ax + b = 0 denklem çözümü
var xdenk,adenk,bdenk;
xdenk=bdenk/adenk;
alert("x değeri = "+xdenk);

//Operatörler +,-,*,/,% -mod almadır.

//Aritmetik operatörler 
//+ toplama ,- cikarma ,* carpma,/ bolme 
var aAritmetik=Number(prompt("A : "));
var bAritmetik=Number(prompt("B : "));

var toplaAritmetik = aAritmetik+bAritmetik;
var cikarAritmetik = aAritmetik-bAritmetik;
var carpmaAritmetik = aAritmetik*bAritmetik;
var bolmeAritmetik = aAritmetik/bAritmetik;
var modAritmetik = aAritmetik % bAritmetik ;

alert = ("Topla "+toplaAritmetik+"Cikar "+cikarAritmetik+"Carpma"+carpmaAritmetik+"Bolme"+bolmeAritmetik+"Modd"+modAritmetik);

//Artırma ve Azaltma operatörleri
// ++x -> Önce x'i 1 artır, daha sonra x değişkenini yeni değeri ile kullan --x de aynı 
//x++ -> Önce x değerini kullan, işlemden sonra x değerini 1 artır x-- de aynı 

var artirmaSayi = 6 ;
document.write(artirmaSayi++);
document.write(++artirmaSayi);
document.write(--artirmaSayi);
document.write(artirmaSayi--);

//Eşitlik ve İlişki Operatörleri 

/*
    ==  : eşitmi x==y
    !=  : eşitdeğil x!=y
    >   : büyük  x>y
    <   : küçük  x< y
    >=, <=  
*/
var eşitdeğerlerMi = 5==5 ;
eşitdeğerlerMi = 5!=5;
eşitdeğerlerMi=5>5;
eşitdeğerlerMi=5<5;
eşitdeğerlerMi = 5>=5;
eşitdeğerlerMi = 5<=5;

/*
    Atama Operatörleri 
    = : atama  x=y x değeri ynin değeri olur.
    +=: x+=y   x=x+y
    -=: x-=y   x=x-y
    *=  x*=y   x=x*y
    /=  x/=    x=x/y
    %=  x%=y   x=x%y
*/

var atamaSayi = 5 ;
atamaSayi +=4;
atamaSayi -=3;
atamaSayi *=5;
atamaSayi /=2;
atamaSayi %=3;

//Operatörlerde Öncelik sırası
/*
1.(),2.X++,3.X--,4.* / ,5 + - ,6. < > ,7== != ,8 && , 9 ||
*/
var öncelikSırası = 50 ;
öncelikSırası = (50*2/5)+85 <(75/5 * 2)-100

/* Bölüm ödevi*/
var ödevA = 50;
ödevA ++;
document.write("<b></b>"+ödevA);

var ödevB= Number(prompt("Sayi 1 : "));
var ödevC= Number(prompt("Sayi 2 : "));
var ödevD= Number(prompt("Sayi 3 : "));
var ödevOrtalama = (ödevB+ödevC+ödevD)/3;
document.write(ödevOrtalama);

/* Karar yapıları  
İf : eğer 
else : değilse 
else if :  değilse  eğer 
*/
var sorguYas ;
sorguYas = Number(prompt("Yaşınız : "));
if(sorguYas<=18){
    document.write("Yaşınız 18 'den küçük veya eşit");
    document.write("<br>");
    document.write("Sitemize hoşgeldiniz...");
}

// İf else uygulamaları 
if(sorguYas<18){
    document.write("Yaşınız küçük... ");
}
else{
    document.write("Yaşınız büyük.");
}

if(sorguYas<18){
    document.write("Yaşınız küçük");
    document.write("<br>");
    document.write("Siteye üye olmak için veli izni");
}
else{
    document.write("Yaşınız uygun");
    document.write("<br>");
    document.write("İyi eğlenceler dileriz .. ");
}

var vize = Number(prompt("Vize notu"));
var final = Number(prompt("Final notu : "));
var ortalama = (vize + final) /2 ;
if(ortalama<50){
    document.write("Kaldı");
    document.write("<br></br>");
}
else{
    document.write("Geçti");
    document.write("<br></br>")
}

//
var ort5 = Number(prompt("ortalama"));
if(ort5<50){
    document.write("Kaldı!!");
}
else if(ort5<=65){
    document.write("orta");
}
else if(ort5<=80){
    document.write("iyi");
}
else{
    document.write("pek iyi")
}

var yas1 ;
yas1 = prompt("Yaşınız:");
yas1 = Number(yas1);
if(yas1<2) {
    alert("Bebek");
}
else if(yas1<12){
    alert("Çocuk");
}
else if(yas1 <42){
    alert("Genç");
}
else if(yas1<62){
    alert("Yetişkin");
}
else {
    alert("İhtiyar");
}

//Pozitif sayilarin karesini alma
var sayiKare,KareS;
sayiKare = prompt("Sayı: ");

if(sayiKare<0){
    alert("Sayi Negatif!!!");
}
else{
    KareS=sayiKare*sayiKare;
    alert("Kare = "+KareS);
}


//Dairenin Alanı ve Çevresi 
var r125,alan125,cevre125;
r125 = prompt("Yarıçap: ");

if(r125<0){
    alert("Yarıçap negatif");
}
else{
    alan125 = 3.14 * r125*r125;
    cevre125 =2*3.14*r125;
    alert("Alan="+alan+"Cevre="+cevre125);
}