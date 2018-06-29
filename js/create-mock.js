'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_NAME_ARRAYS = [WIZARD_NAMES, WIZARD_SURNAMES];

  var getRandomFullNames = function (nameArrays) {
    var fullNameArray = [];
    var nameIndexes = []; // Массив индексов для выбора элементов (имен и фамилий)
    var swap;

    for (var i = 0; i < window.wizardParams.getWizardsCount(); i++) {
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

  window.createMock = function () {
    var wizardsRandomNames = getRandomFullNames(WIZARD_NAME_ARRAYS);
    var wizards = [
      {
        name: wizardsRandomNames[0],
        coatColor: window.wizardParams.getRandomCoatColor(),
        eyesColor: window.wizardParams.getRandomEyesColor()
      },
      {
        name: wizardsRandomNames[1],
        coatColor: window.wizardParams.getRandomCoatColor(),
        eyesColor: window.wizardParams.getRandomEyesColor()
      },
      {
        name: wizardsRandomNames[2],
        coatColor: window.wizardParams.getRandomCoatColor(),
        eyesColor: window.wizardParams.getRandomEyesColor()
      },
      {
        name: wizardsRandomNames[3],
        coatColor: window.wizardParams.getRandomCoatColor(),
        eyesColor: window.wizardParams.getRandomEyesColor()
      }
    ];
    return wizards;
  };
})();
