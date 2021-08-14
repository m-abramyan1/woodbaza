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
document.querySelector('.wrapper').addEventListener('click', function () {});
var LINK = document.querySelectorAll('.header__link');

var _loop = function _loop(i) {
  var link = LINK[i];
  link.addEventListener('click', function () {
    link.classList.toggle('active');
  });
};

for (var i = 0; i < LINK.length; i++) {
  _loop(i);
}