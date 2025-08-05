document.addEventListener("DOMContentLoaded", function () {
    if (!navigator.onLine && !window.location.pathname.endsWith("index.html")) {
        window.location.href = "index.html";
    }

    window.addEventListener("offline", function () {
        if (!window.location.pathname.endsWith("index.html")) {
            window.location.href = "index.html";
        }
    });
});