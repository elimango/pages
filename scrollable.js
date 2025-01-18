const scrollElements = document.querySelectorAll('.scroll-element');

window.onscroll = function() {
    scrollElements.forEach(scrollElement => {
    if (window.scrollY > 150) {  
            scrollElement.style.opacity = 0;
        } else {
            scrollElement.style.opacity = 1;
        }
    });
};