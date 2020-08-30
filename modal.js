const btn = document.querySelector('.open-modal');
const wrap = document.querySelector('.wrap-modal');
const blur = document.querySelector('.blur');
const modal = document.querySelector('.wrap-modal__login');
const btnClose = document.querySelector('.wrap-modal--close');


btn.addEventListener('click', function () {
    wrap.style.display = 'flex ';
    blur.style.display = 'block';
    setTimeout(addClass, 10);
})

btnClose.addEventListener('click', function () {
    wrap.classList.add('mini-wrap');
    blur.style.display = 'none';
    setTimeout(delClass, 1000);
})

function addClass() {
    modal.classList.add('wrap-modal__login--open');
    wrap.classList.add('wrap-modal--open');
}

function delClass() {
    modal.classList.remove('wrap-modal__login--open');
    wrap.classList.remove('wrap-modal--open');
    wrap.style.display = 'none';
    wrap.classList.remove('mini-wrap');
}