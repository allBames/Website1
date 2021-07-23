const offer = document.querySelectorAll('.js-offer')
const text = document.querySelectorAll('.js-text-container')
const arrow = document.querySelectorAll('.js-arrow')

for(let i = 0; i < offer.length; i++){
    offer[i].addEventListener('click', function (event) {
        text[i].style.display = (text[i].style.display === 'block') ? 'none' : 'block';
        arrow[i].style.transform = (text[i].style.display === 'block') ? 'rotate(180deg)' : 'rotate(360deg)';
    });
}