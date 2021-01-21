window.addEventListener('DOMContentLoaded', () => {

    // hamburger 

    let hamburger = document.querySelector('.hamburger'),
        mobileMenu = document.querySelector('.mobile_menu');
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger_active');
        mobileMenu.classList.toggle('mobile_menu_active');
    });

});