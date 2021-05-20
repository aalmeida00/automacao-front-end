"use strict";

{
  var animaImg = function animaImg() {
    if (img.classList.contains('active')) {
      img.classList.remove('active');
    } else {
      img.classList.add('active');
    }
  };

  var img = document.querySelector('.modal-img');
  img.addEventListener('click', animaImg);
  console.log('teste');
}
{
  var activeModal = function activeModal(e) {
    e.preventDefault();

    if (modal.classList.contains('active')) {
      modal.classList.remove('active');
      modalBtn.innerText = 'Abrir Modal';
    } else {
      modal.classList.add('active');
      modalBtn.innerText = 'Fechar Modal';
    }
  };

  var modalBtn = document.querySelector('.abrir-modal');
  var modal = document.querySelector('.modal');
  modalBtn.addEventListener('click', activeModal);
}
"use strict";

{
  var animaImg = function animaImg() {
    if (img.classList.contains('active')) {
      img.classList.remove('active');
    } else {
      img.classList.add('active');
    }
  };

  var img = document.querySelector('.modal-img');
  img.addEventListener('click', animaImg);
  console.log('teste');
}
"use strict";

{
  var activeModal = function activeModal(e) {
    e.preventDefault();

    if (modal.classList.contains('active')) {
      modal.classList.remove('active');
      modalBtn.innerText = 'Abrir Modal';
    } else {
      modal.classList.add('active');
      modalBtn.innerText = 'Fechar Modal';
    }
  };

  var modalBtn = document.querySelector('.abrir-modal');
  var modal = document.querySelector('.modal');
  modalBtn.addEventListener('click', activeModal);
}
{
  var _animaImg = function _animaImg() {
    if (_img.classList.contains('active')) {
      _img.classList.remove('active');
    } else {
      _img.classList.add('active');
    }
  };

  var _img = document.querySelector('.modal-img');

  _img.addEventListener('click', _animaImg);

  console.log('teste');
}
{
  var _activeModal = function _activeModal(e) {
    e.preventDefault();

    if (_modal.classList.contains('active')) {
      _modal.classList.remove('active');

      _modalBtn.innerText = 'Abrir Modal';
    } else {
      _modal.classList.add('active');

      _modalBtn.innerText = 'Fechar Modal';
    }
  };

  var _modalBtn = document.querySelector('.abrir-modal');

  var _modal = document.querySelector('.modal');

  _modalBtn.addEventListener('click', _activeModal);
}