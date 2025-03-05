const scrollables = document.querySelectorAll('.scroll-element');

window.onscroll = function() {
    scrollables.forEach(scrollable => {
    if (window.scrollY > 150) {  
        scrollable.style.opacity = 0;
        } else {
        scrollable.style.opacity = 1;
        }
    });
};