window.addEventListener('DOMContentLoaded', () => {

    // header_slider

    let headerIndexSlide = 0,
        headerSlides = document.querySelectorAll('.header_slide'),
        dots = document.querySelectorAll('.header_dot'),
        i = 0;

    function showSlides(n) {

        if (n > headerSlides.length - 1) { n = 0; }

        if (n < 0) { n = headerSlides.length - 1; }

        for (let i = 0; i < headerSlides.length; i++) {

            dots[i].classList.remove('header_dot_active');
        }
        let prev = n - 1,
            next = n + 1;
        if (next > headerSlides.length - 1) { next = 0; }
        if (prev < 0) { prev = headerSlides.length - 1; }
        headerSlides[next].classList.add('header_slide_prev');
        headerSlides[next].classList.remove('header_slide_next');
        headerSlides[next].style.left = "";

        headerSlides[prev].classList.add('header_slide_next');
        headerSlides[prev].classList.remove('header_slide_active');

        headerSlides[n].classList.add('header_slide_active');
        headerSlides[n].classList.remove('header_slide_prev');
        headerSlides[n].style.left = "";

        dots[n].classList.add('header_dot_active');
    };
    let width = document.documentElement.clientWidth;
    console.log(width);

    setInterval(function () { showSlides(i); i++; if (i > headerSlides.length) { i = 1; } }, 2000);

});