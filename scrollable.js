const scrollables = document.querySelectorAll('.scroll-element');
window.onscroll = function() {
    scrollables.forEach(scrollable => {
    if (window.scrollY > 475) {  
        scrollable.style.opacity = 1;
        } else {
        scrollable.style.opacity = 0;
        }
    });
};