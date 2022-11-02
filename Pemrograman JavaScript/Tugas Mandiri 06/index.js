let num1 = document.getElementById('num1'),
    num2 = document.getElementById('num2'),
    pilihan = document.getElementById('anu'),
    hasil = document.getElementById('hasil'),
    btn = document.getElementById('btn'),
    form = document.getElementById('form'),
    reset = document.createElement('button'),
    penjumlahan = (a, b) => a + b,
    pengurangan = (a, b) => a - b,
    perkalian = (a, b) => a * b,
    pembagian = (a, b) => a / b;

reset.setAttribute('type', 'reset');
reset.setAttribute('id', 'rst');
reset.innerHTML = 'Reset';

function kalkulator(a, b, c) {
    if (c == '+') {
        return penjumlahan(a, b);
    } else if (c == '-') {
        return pengurangan(a, b);
    } else if (c == '*') {
        return perkalian(a, b);
    } else if (c == '/') {
        return pembagian(a, b);
    } else {
        return 'Operator tidak ditemukan';
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    hasil.innerHTML = `<h3>Hasilnya : ${kalkulator(
        num1.value,
        num2.value,
        pilihan.value
    )}</h3>`;
    hasil.appendChild(reset);
});

reset.addEventListener('click', function () {
    hasil.innerHTML = '';
    num1.value = '';
    num2.value = '';
    pilihan.value = '';
});
