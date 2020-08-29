const btn = document.querySelector('.open-modal');
const wrap = document.querySelector('.wrap-modal');
const blur = document.querySelector('.blur');
//const modal = document.querySelector('.wrap-modal__login');
//const btnClose = document.querySelector('.wrap-modal--close');


btn.addEventListener('click', function () {
    wrap.classList.add('wrap-modal--open');
    blur.style.display = 'block';
})

btnClose.addEventListener('click', function () {
    wrap.classList.remove('wrap-modal--open');
    blur.style.display = 'none';
})