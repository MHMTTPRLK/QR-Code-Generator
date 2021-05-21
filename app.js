function qrCode() {
    let input = document.getElementById("input").value;
    let button = document.getElementById("submit");
    let qrImg = document.querySelector("img");

    let data = input;
    let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + data;

    qrImg.src = imgSrc;
   
}