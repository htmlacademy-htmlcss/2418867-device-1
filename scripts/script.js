const deliveryLink = document.querySelector('.delivery-rare-link');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close-button');

deliveryLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--close');
});


modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--close');
});
