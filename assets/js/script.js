
const toggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');
const listCollapse = document.querySelectorAll('a');
const avatar = document.querySelector('.nav-item-avatar');
const logoTitle = document.getElementById('logo-title');

// function to toggle the menu bar
const toggleMenu = () => {
    if (navList.classList.contains('show')) {
        navList.classList.remove('show');
    } else {
        navList.classList.add('show');
    }
};

// function collapses navigation menu on click of the links inside the menu
listCollapse.forEach(element => {
    element.addEventListener('click', () => { 
        toggleMenu(); 
    })
});

// functionn hides or show nav avatar based on its Y position on the page
const hideShowAvatar = () => {
    
    let rect = navList.getBoundingClientRect();

    if (rect.top > 12 && rect.top <= 30) {
        logoTitle.classList.add('hide');
        avatar.classList.remove('fade-in');
        avatar.classList.add('fade-out');  
    } else if (rect.top === 0) {
        logoTitle.classList.remove('hide');
        avatar.classList.remove('fade-out');
        avatar.classList.add('hide');
    } else {
        avatar.classList.remove('fade-out');
        logoTitle.classList.add('hide');
        avatar.classList.remove('hide');
        avatar.classList.add('fade-in');
    };

    checkAvatarPosition();
};

// function triggers hideShowAvatar to check avatar's position on the page
const checkAvatarPosition = () => {

    setTimeout(hideShowAvatar, 100);
};

toggle.addEventListener('click', toggleMenu, false);

checkAvatarPosition();

