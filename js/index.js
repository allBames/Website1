/* -----------offers------------- */
const offer = document.querySelectorAll('.js-offer')
const text = document.querySelectorAll('.js-text-container')
const arrow = document.querySelectorAll('.js-arrow')

for (let i = 0; i < offer.length; i++) {
    offer[i].addEventListener('click', function (event) {
        text[i].style.display = (text[i].style.display === 'block') ? 'none' : 'block';
        arrow[i].style.transform = (text[i].style.display === 'block') ? 'rotate(180deg)' : 'rotate(360deg)';
    });
}

/* /* ----------go top btn----------
var goTopBtn = document.querySelector('.to-main');

window.addEventListener('scroll', trackScroll);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight - 150;

    if (scrolled > coords) {
        goTopBtn.style.display = 'block'
    }

    if (scrolled < coords) {
        goTopBtn.style.display = 'none'
    }
} */

/* ------------slaider------------- */
let slideIndex = 1;
let prev = document.querySelector('.left-arrow')
let next = document.querySelector('.right-arrow')
let slides = document.querySelectorAll(".feedback-text");

showSlides(slideIndex)

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

prev.addEventListener('click', function (event) {
    showSlides(slideIndex -= 1);
})

next.addEventListener('click', function (event) {
    showSlides(slideIndex += 1);
})

/* -----------feedback------------- */
document.querySelector(".js-form").addEventListener("submit", (event) => {
    event.preventDefault()
    let form = document.querySelector(".js-form")
    console.log({
        "name": form.elements.first_name.value,
        "lastName": form.elements.last_name.value,
        "inquiry": form.elements.inquiry.value,
        "email": form.elements.email.value,
        "send": form.elements.send.value
    })
    form.reset()
})

/* ----------to subscribe----------- */
document.querySelector(".form-subscription").addEventListener("submit", (event) => {
    event.preventDefault()
    let form = document.querySelector(".form-subscription")
    console.log({
        "email": form.elements.email.value,
    })

    form.reset()
})

/* ----------burger----------- */
document.querySelector('.js-burger').addEventListener('click', function (event) {
    const menu = document.querySelector('.nav-menu');
    const isMenuVisible = menu.classList.contains('dn-mobile');

    /* if (menu.classList.contains('dn-mobile')) {
        menu.classList.remove('dn-mobile');
        return;
    }

    menu.classList.add('dn-mobile'); */
    document.querySelector('.js-burger').classList.toggle('active');
    document.body.classList.toggle('lock');
    menu.classList.toggle('active');
    menu.classList.toggle('dn-mobile', !isMenuVisible);
});

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('touch');
} else {
    document.body.classList.add('pc');
}

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            if (document.querySelector('.js-burger').classList.contains('active')){
                document.querySelector('.js-burger').classList.remove('active');
                document.body.classList.remove('lock');
                document.querySelector('.nav-menu').classList.remove('active');
                document.querySelector('.nav-menu').classList.remove('dn-mobile');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
