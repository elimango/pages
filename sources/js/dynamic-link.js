// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Get the current page from the data-page attribute
    const currentPage = document.body.dataset.page || "works"; // Default to 'works' for landing page

    // Select the horizontal links and the dynamic link placeholder
    const horizontalLinks = document.querySelectorAll('.horizontal-links a');
    const dynamicLink = document.getElementById('dynamic-link');

    // Loop through the links to update their visibility and set the dynamic link
    horizontalLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPage) {
            // Set the centered link's href and text
            dynamicLink.href = link.href;
            dynamicLink.textContent = link.textContent;

            // Remove the current page link from the horizontal list
            link.parentElement.remove();
        }
    });
});