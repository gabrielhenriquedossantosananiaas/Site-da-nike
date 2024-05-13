function generateQRCode() {
    var productId = "12345";
    var price = 29.99;
    var qrText = `produto_id=${productId}&preco=${price}`;
    var qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
    var qr = new QRCode(qrContainer, {
        text: qrText,
        width: 200,
        height: 200
    });
}

function simularCompra() {
    // Aqui você simulava o registro da compra em uma página separada
    // Por simplicidade, apenas exibiremos uma mensagem de confirmação
    document.getElementById("confirmation").style.display = "block";
}


