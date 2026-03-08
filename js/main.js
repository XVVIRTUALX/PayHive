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
 // Highlight QR for mobile users
    const qr = document.getElementById("hnry-qr");
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        qr.style.border = "3px solid #ffd700"; // gold highlight
        qr.style.padding = "5px";
        qr.style.borderRadius = "10px";
    }

    // Auto-hide pending message if Hnry link & QR are set
    const pendingMsg = document.getElementById("pending-msg");
    const hnryLinkElement = document.getElementById("hnry-link");
    const hnryQrElement = document.getElementById("hnry-qr");

    if (!hnryLinkElement.href.includes("HNRY_PAYMENT_LINK_GOES_HERE") &&
        !hnryQrElement.src.includes("HNRY_QR_IMAGE.png")) {
        pendingMsg.style.display = "none";
    }

});
