window.addEventListener('DOMContentLoaded', () => {

    // header_slider

    let headerIndexSlide = 0,
        headerSlides = document.querySelectorAll('.header_slide'),
        dots = document.querySelectorAll('.header_dot'),
        i = 0;

    function showSlides(n) {

        if (n > headerSlides.length - 1) {
            n = 0;
        }

        if (n < 0) { n = headerSlides.length - 1; }

        for (let i = 0; i < headerSlides.length; i++) {
            //headerSlides[i].display = "none";
            headerSlides[i].style.width = "0%";
            // headerSlides[i].style.height = "0%";
            dots[i].classList.remove('header_dot_active');

        }
        //headerSlides[n].display = "block";
        headerSlides[n].style.width = "100%";
        // headerSlides[n].style.height = "100%";
        dots[n].classList.add('header_dot_active');
    };

    setInterval(function () { showSlides(i); i++; if (i > headerSlides.length) { i = 1; } console.log(i); }, 4000);

});