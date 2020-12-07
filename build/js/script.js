window.addEventListener('DOMContentLoaded', () => {

    // header_slider

    let headerIndexSlide = 0,
        headerSlides = document.querySelectorAll('.header_slide'),
        dots = document.querySelectorAll('.header_dot');

    function showSlides(n) {

        for (let i = 0; i < headerSlides.length; i++) {
            headerSlides[i].style.display = "none";
            dots[i].classList.remove('header_dot_active');

        }
        headerSlides[n].style.display = "block";
        dots[n].classList.add('header_dot_active');

    };

    showSlides(headerIndexSlide);







});