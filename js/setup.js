'use strict';

(function () {

  var setupWindow = document.querySelector('.setup');
  var setupWizard = setupWindow.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupWindow.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var newColor = window.wizardParams.getRandomCoatColor();
    window.colorize(wizardCoat, newColor, 'input[name="coat-color"]');
    window.wizardParams.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = window.wizardParams.getRandomEyesColor();
    window.colorize(wizardEyes, newColor, 'input[name="eyes-color"]');
    window.wizardParams.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    window.colorize(wizardFireball, window.wizardParams.getRandomFireballColor(), 'input[name="fireball-color"]');
  });
})();
