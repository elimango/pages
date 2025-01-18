window.onscroll = function() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector(".element").classList.add("sticky-true");
      } else {
        document.querySelector(".element").classList.remove("sticky-true");
      }
    };