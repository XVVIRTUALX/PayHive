document.addEventListener("DOMContentLoaded", function() {
    
    // Copy Hnry link to clipboard
    const copyBtn = document.getElementById("copy-link-btn");
    const hnryLink = document.getElementById("hnry-link").href;

    copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(hnryLink)
            .then(() => alert("Hnry payment link copied to clipboard!"))
            .catch(() => alert("Failed to copy link"));
    });

    // Optional: highlight QR for mobile users
    const qr = document.getElementById("hnry-qr");
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        qr.style.border = "3px solid #ffd700"; // gold highlight
        qr.style.padding = "5px";
        qr.style.borderRadius = "10px";
    }

});
