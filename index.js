const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
 // Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (array,fn) => {
  let sortedArray = fn(array)
  
  let hasil = []
  for (let index = 0; index < array.length; index++) {
    let hasil1 = "";
    hasil1 = hasil.push(`${index+1}. ${array[index]}`);
  } 
  return hasil;
  }


// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (param1) => {
  let hasilFn = param1.sort()
  return hasilFn
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (param1) => {
  let hasilFn = param1.sort().reverse()
  return hasilFn
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
