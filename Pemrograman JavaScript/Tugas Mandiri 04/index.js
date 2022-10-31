// Teks awal
let teks = "Merah Putih"

// Mengubah teks menjadi uppercase
let teksUpper = teks.toUpperCase()

// Mengubah teks menjadi lowercase
let teksLower = teks.toLowerCase()

// Mengubah "Putih" menjadi "Muda"
let teksReplace = teks.replace("Putih", "Muda")

// Mengukur panjang teks
let teksLength = teks.length

// Mendefinisikan variable elem
var elem = document.getElementsByTagName("body")[0]

// Menampilkan teks awal
elem.innerHTML += "<p>Teks awal: " + teks + "</p>"
console.log("Teks awal: " + teks)

// Menampilkan teks uppercase
elem.innerHTML += "<p>Teks uppercase: " + teksUpper + "</p>"
console.log("Teks uppercase: " + teksUpper)

// Menampilkan teks lowercase
elem.innerHTML += "<p>Teks lowercase: " + teksLower + "</p>"
console.log("Teks lowercase: " + teksLower)

// Menampilkan teks replace
elem.innerHTML += "<p>Teks replace: " + teksReplace + "</p>"
console.log("Teks replace: " + teksReplace)

// Menampilkan teks length
elem.innerHTML += "<p>Teks length: " + teksLength + "</p>"
console.log("Teks length: " + teksLength)