/* -----------offers------------- */
const offers = [...document.querySelectorAll('.js-offer')];
offers.forEach(offer => {
    let title = offer.querySelector('.offer-title'),
        text = offer.querySelector('.js-text-container'),
        arrow = offer.querySelector('.js-arrow');

    title.addEventListener('click', () => {
        text.classList.toggle('dn');
        arrow.classList.toggle('turn');
    });
});

/* ------------slaider------------- */
let slideIndex = 1;
const prev = document.querySelector('.left-arrow');
const next = document.querySelector('.right-arrow');
const slides = document.querySelectorAll('.feedback-text');

showSlides(slideIndex);

function showSlides(n) {
    if (slides.length > 0) {
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        slides.forEach(slide => {
            slide.style.display = 'none';
        })

        slides[slideIndex - 1].style.display = 'block';
    }
}
if (slides.length > 0) {
    prev.addEventListener('click', () => {
        showSlides(slideIndex -= 1);
    })
}
if (slides.length > 0) {
    next.addEventListener('click', () => {
        showSlides(slideIndex += 1);
    })
}

/* -----------feedback------------- */
const jsForm = document.querySelector('.js-form');
if (jsForm) {
    jsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log({
            name: jsForm.elements.first_name.value,
            lastName: jsForm.elements.last_name.value,
            inquiry: jsForm.elements.inquiry.value,
            email: jsForm.elements.email.value,
            send: jsForm.elements.send.value,
        });
        jsForm.reset();
    })
}

/* ----------to subscribe----------- */
const formSubscription = document.querySelector('.form-subscription');
if (formSubscription) {
    formSubscription.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log({
            email: formSubscription.elements.email.value,
        })

        formSubscription.reset();
    })
}

/* ----------burger----------- */
const burger = document.querySelector('.js-burger')
burger.addEventListener('click', function (event) {
    const menu = document.querySelector('.nav-menu');
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
    menu.classList.toggle('active');
    menu.classList.toggle('dn-mobile', !isMenuVisible);
});

/* -----------Проверка на устроиство------------ */
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

/* --------------Навигация----------------- */
const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
const menu = document.querySelector('.nav-menu');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    const heightHeader = (document.body.classList.contains('touch')) ? (document.querySelector('.header').offsetHeight) : 0;

    function onMenuLinkClick(e) {
        const menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - heightHeader;

            if (burger.classList.contains('active')) {
                burger.classList.remove('active');
                document.body.classList.remove('lock');
                menu.classList.remove('active');
                menu.classList.remove('dn-mobile');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

/* ---------Кнопка наверх-------------- */
const scrollBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function () {
    let isScroll = (window.scrollY > 500) && document.body.classList.contains('pc');
    scrollBtn.classList.toggle('show', isScroll);
});

scrollBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ----------------Логотип------------ */
document.querySelectorAll('.logo-link').forEach(logoLink => {
    logoLink.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            document.body.classList.remove('lock');
            menu.classList.remove('active');
            menu.classList.remove('dn-mobile');
        }
    })
})
