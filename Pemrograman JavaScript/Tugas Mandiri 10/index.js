// 1. membuat program konversi mata uang (dollar ke rupiah)
// 2. membuat program konversi suhu (clecius, fahrenheit, reamur, kelvin)

let dlr = document.getElementById('dlr'),
    rph = document.getElementById('rph')

dlr.addEventListener('change', function () {
    rph.value = dlr.value * 15000;
})

rph.addEventListener('change', function () {
    dlr.value = rph.value / 15000;
})

let cel = document.getElementById('cel'),
    fah = document.getElementById('fah'),
    rea = document.getElementById('rea'),
    kel = document.getElementById('kel')

cel.addEventListener('change', function () {
    fah.value = cel.value * 1.8 + 32;
    rea.value = cel.value * 0.8;
    kel.value = parseInt(cel.value) + 273;
})

fah.addEventListener('change', function () {
    cel.value = (fah.value - 32) / 1.8;
    rea.value = (fah.value - 32) / 2.25;
    kel.value = (fah.value - 32) / 1.8 + 273;
})

rea.addEventListener('change', function () {
    cel.value = rea.value / 0.8;
    fah.value = rea.value * 2.25 + 32;
    kel.value = rea.value / 0.8 + 273;
})

kel.addEventListener('change', function () {
    cel.value = kel.value - 273;
    fah.value = (kel.value - 273) * 1.8 + 32;
    rea.value = (kel.value - 273) * 0.8;
})

