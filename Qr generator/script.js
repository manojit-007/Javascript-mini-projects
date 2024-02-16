let btn = document.querySelector(".btn");
let inputText = document.querySelector(".input");
let qrBox = document.querySelector(".qr-box img");
let qrUrl = document.querySelector(".text");

btn.addEventListener("click", () => {
    let input = inputText.value.trim();
    if (input === "") {
        alert("Input text to generate QR code");
    } else {
        qrBox.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
        qrBox.alt = `QR code for ${input}`;
        qrUrl.innerHTML = `QR code for ${input}`;
        inputText.value = "";
    }
});
