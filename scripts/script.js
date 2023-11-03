const deliveryLink = document.querySelector('.delivery-rare-link');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close-button');
const deliveryList = document.querySelector('.delivery-list');
const deliveryItems = document.querySelectorAll('.delivery-button');
const deliveryScreens = document.querySelectorAll('.delivery-screen');

deliveryLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--close');
});


modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--close');
});

if (deliveryList) {
    deliveryList.addEventListener('click', (evt) => {
       const indexClickedButton =  Array.from(deliveryItems).indexOf(evt.target);
       document.querySelector('.delivery-button-current').classList.remove('delivery-button-current');
       evt.target.closest('.delivery-item').classList.add('delivery-button-current');

       document.querySelector('.delivery-screen-active').classList.remove('delivery-screen-active');
       Array.from(deliveryScreens)[indexClickedButton].classList.add('delivery-screen-active');
    });
}
