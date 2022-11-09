// 1. Buatlah program yang menggunakan mouse event

let btn = document.getElementById('btn');

btn.addEventListener('mouseover', function () {
    alert('Awas tombolnya berbahaya');
});

// 2. Buatlah program yang menggunakan keyboard event

document.onkeydown = function (e) {
    if (e.keyCode == 13) {
        alert('Anda menekan tombol enter');
    }
};

// 3. Buatlah program yang menggunakan event change

let wrn = document.getElementById('wrn');

wrn.onchange = function () {
    document.body.style.backgroundColor = wrn.value;
};
