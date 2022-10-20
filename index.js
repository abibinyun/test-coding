// SOAL (1)

function perkalian(value) {
  for (i = value - 1; i >= 1; i--) {
    value *= i;
  }
  console.log(value);
}
perkalian(8);

// SOAL (2)

function katadibalik(value) {
  let hasil = "";
  for (let i = value.length - 1; i >= 0; i--) {
    hasil += value[i];
  }
  console.log(hasil);
}
katadibalik("kucing garong");

// SOAL (3)

// Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”!
// Contoh: printDigitValue(‘9.86-A5.321’);
// Hasil :
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1

function printDigitValue(value) {
  let value1 = value.length;
  let result = "";

  for (i = 0; i <= value1 - 1; i++) {
    if (!Number(value[i])) {
      continue;
    }
    result += value[i];
  }
  console.log(result);

  let value2 = result.length - 1;
  let fix = "";
  for (i = 0; i <= value2; i++) {
    fix += result[i];
    for (j = value2; j > i; j--) {
      fix += "0";
    }
    fix += "\n";
  }
  console.log(fix);
}

printDigitValue("9.86-A5.321");

// SOAL (4)

let a = 3;
let b = 7;

a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);

// SOAL (5)

function penyebut(input) {
  let nilai = input;
  let arr = ["", " satu", " dua", " tiga", " empat", " lima", " enam", " tujuh", " delapan", " sembilan", "sepuluh", "sebelas"];
  let temp = "";
  if (nilai < 0 || nilai > 100) {
    console.log("masukan bilangan 1-100");
  } else if (nilai < 12) {
    temp = " " + arr[nilai];
  } else if (nilai < 20) {
    temp = arr[nilai - 10] + " belas";
  } else if (nilai < 100) {
    temp = arr[Math.floor(nilai / 10)] + " puluh" + arr[nilai % 10];
  } else {
    console.log("seratus");
  }
  console.log(temp);
}
penyebut(23);

// SOAL (6)

let array = [1, 4, 7, 9, 12];
let low = 2;
let high = 15;

let result = [];
let hasil = "";

array.forEach((item) => {
  if (item >= low && item <= high) {
    result = [...result, item];
    hasil = result.join(" ");
    return (total = result.length);
  }
});

console.log(hasil);

// SOAL (7)

console.log(total);

// SOAL (8)

let angka = 15;

for (i = 1; i <= angka; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("EduWork");
  } else if (i % 3 == 0) {
    console.log("Edu");
  } else if (i % 5 == 0) {
    console.log("Work");
  } else {
    console.log(i);
  }
}

// SOAL (9)

let array = [4, 2, 6, 88, 3, 11];
let low = array[0];
let high = array[0];
let count = array.length;

for (i = 0; i < count; i++) {
  if (low < array[i]) {
    low = array[i];
  }

  if (high > array[i]) {
    high = array[i];
  }
}

console.log(`high : ${low} low : ${high}`);

// SOAL (10)

function kabisat(input) {
  if (input % 4 == 0) {
    console.log("input adalah tahun kabisat");
  } else if (input % 4 != 0) {
    console.log("input bukan tahun kabisat");
  }
}

kabisat(2021);
