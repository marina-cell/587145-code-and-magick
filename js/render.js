'use strict';

(function () {

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (wizards) {
    var userDialog = document.querySelector('.setup');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var similarWizardsFragment = document.createDocumentFragment();

    similarListElement.innerHTML = '';
    for (var i = 0; i < window.wizardParams.getWizardsCount(); i++) {
      similarWizardsFragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(similarWizardsFragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
