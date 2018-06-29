'use strict';

(function () {

  var setupWindow = document.querySelector('.setup');

  window.colorize = function (element, color, inputName) {
    element.addEventListener('click', function () {
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      setupWindow.querySelector(inputName).value = color;
    });
  };
})();
