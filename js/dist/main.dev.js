"use strict";

var CATALOG_BTN = document.querySelector('.catalogBtn');
var CATALOG = document.querySelector('.hcatalog');
CATALOG_BTN.addEventListener('click', function () {
  CATALOG.classList.toggle('active');
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