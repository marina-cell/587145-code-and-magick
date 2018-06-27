'use strict';

(function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_NAME_ARRAYS = [WIZARD_NAMES, WIZARD_SURNAMES];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_COUNT = 4;

  var setupWindow = document.querySelector('.setup');
  var setupWizard = setupWindow.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = setupWindow.querySelector('.setup-fireball-wrap');

  var getRandomFullNames = function (nameArrays) {
    var fullNameArray = [];
    var nameIndexes = []; // Массив индексов для выбора элементов (имен и фамилий)
    var swap;

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      // Случайные индексы для выбора массива (массив с именами или с фамилиями)
      var arrayIndex = Math.floor(Math.random() * (nameArrays.length));
      var anotherArrayIndex = (arrayIndex === 1) ? 0 : 1;

      // Случайные индексы для выбора элементов массива (имен и фамилий)
      nameIndexes[arrayIndex] = Math.floor(Math.random() * (nameArrays[arrayIndex].length - i));
      nameIndexes[anotherArrayIndex] = Math.floor(Math.random() * (nameArrays[anotherArrayIndex].length - i));

      // Полное имя из неповторяющихся случайных имен и фамилий (порядок тоже случайный)
      fullNameArray[i] = nameArrays[arrayIndex][nameIndexes[arrayIndex]] + ' ' + nameArrays[anotherArrayIndex][nameIndexes[anotherArrayIndex]];

      // Перенос элементов в конец массива, чтобы избежать повторений имен и фамилий
      for (var j = 0; j < nameArrays.length; j++) {
        swap = nameArrays[j][nameArrays[j].length - 1 - i];
        nameArrays[j][nameArrays[j].length - 1 - i] = nameArrays[j][nameIndexes[j]];
        nameArrays[j][nameIndexes[j]] = swap;
      }
    }
    return fullNameArray;
  };

  var createWizardArray = function () {
    var wizardsRandomNames = getRandomFullNames(WIZARD_NAME_ARRAYS);
    var wizards = [
      {
        name: wizardsRandomNames[0],
        coatColor: window.util.getRandomValueFromArray(COAT_COLORS),
        eyesColor: window.util.getRandomValueFromArray(EYES_COLORS)
      },
      {
        name: wizardsRandomNames[1],
        coatColor: window.util.getRandomValueFromArray(COAT_COLORS),
        eyesColor: window.util.getRandomValueFromArray(EYES_COLORS)
      },
      {
        name: wizardsRandomNames[2],
        coatColor: window.util.getRandomValueFromArray(COAT_COLORS),
        eyesColor: window.util.getRandomValueFromArray(EYES_COLORS)
      },
      {
        name: wizardsRandomNames[3],
        coatColor: window.util.getRandomValueFromArray(COAT_COLORS),
        eyesColor: window.util.getRandomValueFromArray(EYES_COLORS)
      }
    ];

    return wizards;
  };

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderSimilarWizardsFragment = function (wizards) {
    var userDialog = document.querySelector('.setup');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var similarWizardsFragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      similarWizardsFragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(similarWizardsFragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  renderSimilarWizardsFragment(createWizardArray());

  wizardCoat.addEventListener('click', function () {
    window.colorize(wizardCoat, COAT_COLORS, 'input[name="coat-color"]');
  });

  wizardEyes.addEventListener('click', function () {
    window.colorize(wizardEyes, EYES_COLORS, 'input[name="eyes-color"]');
  });

  wizardFireball.addEventListener('click', function () {
    window.colorize(wizardFireball, FIREBALL_COLORS, 'input[name="fireball-color"]');
  });
})();
