// Buatlah program kodingan yang terdiri dari onload dan onerror

window.onload = function () {
    console.log('DOM berhasil di load');
    alert('Selamat datang 👋');
};

let gambar = document.getElementById('gambar');

const imgError = () => {
    alert('Ada gambar yang tidak bisa ditampilkan karena error');
};

gambar.onerror = imgError();

// event on before unload

window.onbeforeunload = function () {
    return 'Apakah anda yakin ingin meninggalkan halaman ini?';
};

// even on unload

window.onunload = function () {
    alert('Terima kasih sudah berkunjung');
}