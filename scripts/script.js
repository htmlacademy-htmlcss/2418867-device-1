const deliveryLink = document.querySelector('.delivery-rare-link');
const modal = document.querySelector('.modal');

deliveryLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--close');
})
