// Jawaban Soal 1
function cekGanjilGenap(x) {
    if (x % 2 === 0) {
        console.log(x + " adalah bilangan genap.");
    } else {
        console.log(x + " adalah bilangan ganjil.");
    }
}

var x = 1;
cekGanjilGenap(x);

// Jawaban Soal 2
function cekPositif(x) {
    if (x > 0) {
        console.log(x + " adalah bilangan positif.");
    } else if (x < 0) {
        console.log(x + " adalah bilangan negatif.");
    } else {
        console.log(x + " adalah nol.");
    }
}

var x = 1;
cekPositif(x);

// Jawaban Soal 3
function cekHubungan(x, y) {
    if (x > y) {
        console.log(x + " lebih besar dari " + y);
    } else if (x < y) {
        console.log(x + " lebih kecil dari " + y);
    } else {
        console.log(x + " sama dengan " + y);
    }
}

var x = 2;
var y = 2;
cekHubungan(x, y);

// Jawaban Soal 4
function cekKelipatan(a, b) {
    if (a >= b && a > 0) {
        if (a % b === 0) {
            console.log(a + " adalah kelipatan dari " + b);
        } else {
            console.log(a + " bukan kelipatan dari " + b);
        }
    } else {
        console.log("Syarat tidak terpenuhi: pastikan a >= b dan a > 0");
    }
}

var a = 2;
var b = 2;
cekKelipatan(a, b);

// Jawaban Soal 5
function namaHari(noHari) {
    switch (noHari) {
        case 1:
            console.log("MINGGU");
            break;
        case 2:
            console.log("SENIN");
            break;
        case 3:
            console.log("SELASA");
            break;
        case 4:
            console.log("RABU");
            break;
        case 5:
            console.log("KAMIS");
            break;
        case 6:
            console.log("JUMAT");
            break;
        case 7:
            console.log("SABTU");
            break;
        default:
            console.log("Nomor hari tidak valid, masukkan angka antara 1 sampai 7.");
    }
}

var noHari = 1;
namaHari(noHari);

