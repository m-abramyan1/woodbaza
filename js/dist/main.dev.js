"use strict";

var CATALOG_BTN = document.querySelector('.catalogBtn');
var CATALOG = document.querySelector('.hcatalog');
CATALOG_BTN.addEventListener('click', function () {
  CATALOG.classList.toggle('active');
});