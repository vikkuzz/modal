"use strict";

var btn = document.querySelector('.open-modal');
var wrap = document.querySelector('.wrap-modal');
var blur = document.querySelector('.blur');
var modal = document.querySelector('.wrap-modal__login');
var btnClose = document.querySelector('.wrap-modal--close');
btn.addEventListener('click', function () {
  wrap.style.display = 'flex ';
  blur.style.display = 'block';
  setTimeout(addClass, 10);
});
btnClose.addEventListener('click', function () {
  wrap.classList.add('mini-wrap');
  blur.style.display = 'none';
  setTimeout(delClass, 1000);
});

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