let tab = document.getElementById('tab'),
    tbh = document.getElementById('tbh'),
    hps = document.getElementById('hps'),
    gnt = document.getElementById('gnt'),
    hwn = ['Gajah', 'Ikan', 'Harimau'];

function title(str) {
    return str.replace(/(^|\s)\S/g, function (t) {
        return t.toUpperCase();
    });
}

function tampilkan() {
    tab.innerHTML = '';
    for (i in hwn) {
        let teks = `<tr><th scope="row">${parseInt(i) + 1}</th><td>${
            hwn[i]
        }</td></tr>`;
        tab.innerHTML += teks;
    }
}

tbh.addEventListener('click', function () {
    let inp = prompt('Masukkan nama hewan baru');
    if (inp != null && inp != '') {
        inp = title(inp);
        hwn.push(inp);
        tampilkan();
    } else {
        alert('Nama hewan tidak boleh kosong');
    }
});

hps.addEventListener('click', function () {
    let inp = prompt('Masukkan nomor hewan yang ingin dihapus');
    inp = parseInt(inp);
    if (inp == 0 || inp >= hwn.length) {
        alert(`hewan dengan nomor ${inp} tidak ada`);
    } else if (typeof inp != 'number' || isNaN(inp)) {
        alert('Nomor hewan harus berupa angka & tidak boleh kosong');
    } else {
        inp = inp - 1;
        hwn.splice(inp, 1);
        tampilkan();
    }
});

gnt.addEventListener('click', function () {
    let inp = prompt('Masukkan nomor hewan yang ingin dihapus');
    inp = parseInt(inp);
    if (inp == 0 || inp >= hwn.length) {
        alert(`hewan dengan nomor ${inp} tidak ada`);
    } else if (typeof inp != 'number' || isNaN(inp)) {
        alert('Nomor hewan harus berupa angka & tidak boleh kosong');
    } else {
        let inb = prompt('Masukkan nama hewan baru');
        if (inb != null && inb != '') {
            inb = title(inb);
            inp = inp - 1;
            hwn.splice(inp, 1, inb);
            tampilkan();
        } else {
            alert('Nama hewan tidak boleh kosong');
        }
    }
});

tampilkan();
