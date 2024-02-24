function calculateDiscount() {
    var price = parseFloat(document.getElementById('price').value);
    var discount = parseFloat(document.getElementById('discount').value);

    if (isNaN(price) || isNaN(discount)) {
        alert('Masukkan angka yang valid untuk harga dan diskon.');
        return;
    }

    // Kirim data ke server menggunakan AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'DiscountCalculator.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            document.getElementById('result').innerHTML = 'Total harga setelah diskon: ' + result.result;
        } else {
            alert('Terjadi kesalahan saat menghitung diskon.');
        }
    };

    var data = 'price=' + price + '&discount=' + discount;
    xhr.send(data);
}
