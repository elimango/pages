document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById('stylesheet');
    const href = link.getAttribute('href');
    link.setAttribute('href', ''); // Temporarily remove the CSS
    setTimeout(() => {
        link.setAttribute('href', href); // Reapply the original CSS link
    }, 50); // Slight delay for reloading
});