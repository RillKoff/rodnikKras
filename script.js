const button_im_here = document.querySelector('.button_im_here');
const button_another_number = document.querySelector('.button_another_number');
const button_im_here_send = document.querySelector('.button_im_here_send');
const button_another_number_send = document.querySelector('.button_another_number_send');

button_im_here.addEventListener('click', () => {
    button_im_here.classList.add('button_opened');
});

button_another_number.addEventListener('click', () => {
    document.querySelector('.button_another_number_close').style.display = 'none';
    document.querySelector('.button_another_number_open').style.display = 'block';
    button_another_number.classList.add('button_opened');
});

button_im_here_send.addEventListener('click', (event) => {
    button_im_here.classList.remove('button_opened');
    event.stopPropagation()
});

button_another_number_send.addEventListener('click', (event) => {
    button_another_number.classList.remove('button_opened');
    document.querySelector('.button_another_number_close').style.display = 'block';
    document.querySelector('.button_another_number_open').style.display = 'none';
    event.stopPropagation()
});