document.addEventListener("DOMContentLoaded", function () {
    let celValue = document.querySelector(".celsius");
    let fareValue = document.querySelector(".fahrenheit");
    let kelValue = document.querySelector(".kelvin");

    celValue.addEventListener("input", () => {
        let celsius = parseFloat(celValue.value);
        if (celsius !== "") {
            fareValue.value = ((celsius * 9) / 5) + 32;
            kelValue.value = celsius + 273.15
        }
    });
    fareValue.addEventListener("input", () => {
        let fahrenheit = parseFloat(fareValue.value);
        if (fahrenheit !== "") {
            celValue.value = ((fahrenheit - 32) * 5) / 9;
            kelValue.value = (((fahrenheit - 32) * 5) / 9) + 273.15
        }
    });
    kelValue.addEventListener("input", () => {
        let kelvin = parseFloat(kelValue.value);
        if (kelvin !== "") {
            celValue.value = kelvin - 273.15
            fareValue.value = (((kelvin - 273.15) * 9) / 5) + 32
        }
    });
})

