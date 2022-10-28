function cek() {
    let result = document.getElementById('result');
    let inputan = parseInt(prompt('Masukkan angka'));
    let hasil = inputan == 2 ? 'True' : 'False';
    alert(hasil);
    result.innerHTML = 'Apakah ' + inputan + ' == 2 ? hasilnya ' + hasil;
    return confirm('Apakah anda ingin mengulang?') == true
        ? cek()
        : alert('Terima kasih');
}

document.readyState === 'complete'
    ? cek()
    : window.addEventListener('load', cek);
