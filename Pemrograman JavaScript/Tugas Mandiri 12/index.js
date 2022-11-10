let frm = document.getElementById('frm');
let lkp = document.getElementById('lkp');
let pgl = document.getElementById('pgl');
let tgl = document.getElementById('tgl');
let eml = document.getElementById('eml');
let nmr = document.getElementById('nmr');
let jrs = document.getElementById('jrs');
let btn = document.getElementById('btn');
let anu = document.getElementById('anu');
let dat = document.getElementById('dat');
let fnl = document.getElementById('fnl');
let edt = document.getElementById('edt');
let oke = document.getElementById('oke');
let kem = document.getElementById('kem');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    tampilkanData();
});

const tampilkanData = () => {
    frm.style.display = 'none';
    anu.style.display = 'block';
    let jur =
        jrs.value == 'ppl'
            ? 'Pengembangan Perangkat Lunak'
            : 'Digital Marketing';
    dat.innerHTML = `<table>
            <tbody>
                <tr>
                    <th>Nama Lengkap</th>
                    <th>: ${lkp.value}</th>
                </tr>
                <tr>
                    <th>Nama Panggilan</th>
                    <th>: ${pgl.value}</th>
                </tr>
                <tr>
                    <th>Tanggal Lahir</th>
                    <th>: ${tgl.value}</th>
                </tr>
                <tr>
                    <th>Alamat Email</th>
                    <th>: ${eml.value}</th>
                </tr>
                <tr>
                    <th>Nomor Telepon</th>
                    <th>: ${nmr.value}</th>
                </tr>
                <tr>
                    <th>Jurusan Pilihan</th>
                    <th>: ${jur}</th>
                </tr>
            </tbody>
        </table>`;
};

edt.addEventListener('click', function () {
    frm.style.display = 'block';
    anu.style.display = 'none';
});

oke.addEventListener('click', function () {
    anu.style.display = 'none';
    gass();
    fnl.style.display = 'block';
});

var count = 200;
var defaults = {
    origin: { y: 0.7 },
};

const fire = (particleRatio, opts) => {
    confetti(
        Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
        })
    );
};

const gass = () => {
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
};

kem.addEventListener('click', function () {
    fnl.style.display = 'none';
    frm.style.display = 'block';
    frm.reset();
});
