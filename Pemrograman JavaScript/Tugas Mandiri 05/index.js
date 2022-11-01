function cek() {
    let inputan = prompt('Masukkan angka: ');
    inputan = parseInt(inputan);

    if (inputan % 2 == 0) {
        console.log(`${inputan} adalah bilangan Genap`);
        alert(`${inputan} adalah bilangan Genap`);
    } else {
        console.log(`${inputan} adalah bilangan Ganjil`);
        alert(`${inputan} adalah bilangan Ganjil`);
    }
}

let btn = document.getElementById('btn');
btn.addEventListener('click', cek);