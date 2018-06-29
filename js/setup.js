'use strict';

(function () {

  var setupWindow = document.querySelector('.setup');
  var setupWizard = setupWindow.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupWindow.querySelector('.setup-fireball-wrap');

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderSimilarWizardsFragment = function (wizards) {
    var userDialog = document.querySelector('.setup');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var similarWizardsFragment = document.createDocumentFragment();

    for (var i = 0; i < window.wizardParams.getWizardsCount(); i++) {
      similarWizardsFragment.appendChild(renderWizard(window.util.getRandomValueFromArray(wizards)));
    }
    similarListElement.appendChild(similarWizardsFragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  // renderSimilarWizardsFragment(window.createMock());

  wizardCoat.addEventListener('click', function () {
    window.colorize(wizardCoat, window.wizardParams.getRandomCoatColor(), 'input[name="coat-color"]');
  });

  wizardEyes.addEventListener('click', function () {
    window.colorize(wizardEyes, window.wizardParams.getRandomEyesColor(), 'input[name="eyes-color"]');
  });

  wizardFireball.addEventListener('click', function () {
    window.colorize(wizardFireball, window.wizardParams.getRandomFireballColor(), 'input[name="fireball-color"]');
  });

  var successHandler = function (wizards) {
    renderSimilarWizardsFragment(wizards);
  };

  // var errorHandler = function (errorMessage) {
  //   var node = document.createElement('div');
  //   node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  //   node.style.position = 'absolute';
  //   node.style.left = 0;
  //   node.style.right = 0;
  //   node.style.fontSize = '30px';
  //
  //   node.textContent = errorMessage;
  //   document.body.insertAdjacentElement('afterbegin', node);
  // };

  window.backend.load(successHandler, window.backend.errorHandler);
})();
