"use strict";

var CATALOG_BTN = document.querySelector('.catalogBtn');
var CATALOG = document.querySelector('.hcatalog');
CATALOG_BTN.addEventListener('click', function () {
  CATALOG.classList.toggle('active');
});
var ICON = document.querySelectorAll('.headerIcon');
var LINK = document.querySelectorAll('.header__link');

var _loop = function _loop(i) {
  var icon = ICON[i];
  var link = LINK[i];
  link.addEventListener('click', function () {
    icon.classList.toggle('active');
  });
};

for (var i in ICON) {
  _loop(i);
}