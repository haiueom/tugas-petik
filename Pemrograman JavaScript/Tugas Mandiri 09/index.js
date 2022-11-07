// 1. Buatlah class tumbuhan yang menyimpan nama, jenis, warna dan dapat tumbuh, berbuah (Menerima parameter buah)

class Tumbuhan {
    constructor(nama, jenis, warna) {
        this.nama = nama;
        this.jenis = jenis;
        this.warna = warna;
    }

    tumbuh(bisa) {
        console.log(`${this.nama} ${bisa} tumbuh di Indonesia`);
        return this.tumbuh = `${this.nama} ${bisa} tumbuh di Indonesia`;
    }

    berbuah(bisa) {
        console.log(`${this.nama} ${bisa} berbuah`);
        return this.berbuah = `${this.nama} ${bisa} berbuah`;
    }
}

// 2. Buatlah object dari class tumbuhan terdiri dari 3 object (buah-buahan, sayur-sayuran, dan bunga)

const pisang = new Tumbuhan('Pisang', 'Buah', 'Kuning');
const kangkung = new Tumbuhan('Kangkung', 'Sayur', 'Hijau')
const melati = new Tumbuhan('Melati', 'Bunga', 'Putih')

let result = document.getElementById("result")
let hasil = `<div>
    <p>
        Nama: ${pisang.nama}<br>
        Jenis: ${pisang.jenis}<br>
        Warna: ${pisang.warna}<br>
        ${pisang.tumbuh("bisa")}<br>
        ${pisang.berbuah("bisa")}<br>
    </p>
</div>
<div>
    <p>
        Nama: ${kangkung.nama}<br>
        Jenis: ${kangkung.jenis}<br>
        Warna: ${kangkung.warna}<br>
        ${kangkung.tumbuh("bisa")}<br>
        ${kangkung.berbuah("tidak")}<br>
    </p>
</div>
<div>
    <p>
        Nama: ${melati.nama}<br>
        Jenis: ${melati.jenis}<br>
        Warna: ${melati.warna}<br>
        ${melati.tumbuh("bisa")}<br>
        ${melati.berbuah("tidak")}<br>
    </p>
</div>
`

result.innerHTML = hasil