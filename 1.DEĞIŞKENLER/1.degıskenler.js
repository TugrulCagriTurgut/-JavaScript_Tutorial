// Degiskenler
// Degisken tanimlamak icin "var" komutunu kullaniyoruz.Komuttan sonra degiskene isim veriyoruz.

var age;
console.log(age);

//Degiskene bir deger atamadigimiz icin undefined yazacak konsolda

age=20;
console.log(age);

var fullname='Tugrul Turgut';
console.log(fullname);

fullname='Cagri Turgut';
console.log(fullname);

/*
        Degisken Tanimlama Kurallari

    Sayissal Ifade Ile Baslayamaz -var 1yas- gibi
    Komut Isimleriyle Tanimalanamaz -var #yas- gibi
    Birden fazla kelime kullanilamaz - var ad soyad- gibi

*/

// var , let , const

let city='Bursa';
console.log(city);

const email='abc.gmail.com';
console.log(email);

/*
email='bcd.gmail.com'
console.log(email);
    bunda hata vericek.Cunku const ile tanimladiginiz degisken sabit olmak zorunda.
    
*/
