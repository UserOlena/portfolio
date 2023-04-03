$(document).ready(function() {
    const toggle = $('#nav-toggle');
    const navList = $('#nav-list');
    const listCollapse = $('.nav-link');


    // function to toggle the menu bar
    const toggleMenu = () => {
        if (navList.hasClass('show')) {
            navList.removeClass('show');
        } else {
            navList.addClass('show');
        }
    }


    // function collapses navigation menu on click of the links inside the menu
    listCollapse.each(function() {
        $(this).click(toggleMenu)
    })


    // function hides or show nav logoImg based on its Y position on the page
    const hideShowLogoImg = () => {
         // an if statement checks whether the screen size is greater than 850 pixels in order to perform the animation.
        if ($(window).width() >= 900 ) {
            let rect = navList[0].getBoundingClientRect();
            const logoImg = $('#logo-img');
            const logoTitle = $('#logo-title');

            if (rect.top < 12) {
                logoTitle.fadeTo(1000, 1);
                logoImg.fadeTo(1000, 0);
            } else if (rect.top >= 12) {
                logoTitle.fadeTo(1000, 0);
                logoImg.fadeTo(1000, 1);
            }
        } else {
            logoTitle.fadeTo(1000, 0);
            logoImg.fadeTo(1000, 1);
        }
    }

   
    // function triggers hideShowLogoImg to check position of the nav-bar on the screen
    setInterval(hideShowLogoImg, 1000);


    toggle.click(toggleMenu);

})


