const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");

let preValue = ""; // Initialize preValue

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim(); // Get and trim the input value
    if (!qrValue || preValue === qrValue) return; // Return if input is empty or same as previous
    preValue = qrValue; // Update preValue with the new value
    generateBtn.innerText = "Generating QR Code..."; // Change button text

    // Set the src attribute of the img tag to the QR code API
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;

    // Once the image is loaded, display it
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code"; // Reset button text
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
