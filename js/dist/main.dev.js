"use strict";

var CATALOG_BTN = document.querySelector('.catalogBtn');
var CATALOG = document.querySelector('.hcatalog');
CATALOG_BTN.addEventListener('click', function () {
  CATALOG.classList.toggle('active');

  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = null;
  } else {
    document.body.style.overflow = 'hidden';
  } // CATALOG.style.height = (window.innerHeight - 150) + 'px';

});
var LINK = document.querySelectorAll('.header__link');

var _loop = function _loop(i) {
  LINK[i].addEventListener('click', function () {
    // if(link.classList.contains('active'))
    LINK[i].classList.toggle('active');
  });
};

for (var i in LINK) {
  _loop(i);
}