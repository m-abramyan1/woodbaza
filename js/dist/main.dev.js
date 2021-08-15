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

var POPULAR = document.querySelectorAll('.popular__item');
var POPULAR_BTN = document.querySelector('.popular__btn');
POPULAR_BTN.addEventListener('click', function () {
  POPULAR_BTN.classList.toggle('active');

  for (var _i = 0; _i < POPULAR.length; _i++) {
    var popular = POPULAR[_i];
    popular.classList.toggle('activeplus');
  }
});