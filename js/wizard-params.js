'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_COUNT = 4;

  window.wizardParams = {
    getWizardsCount: function () {
      return WIZARDS_COUNT;
    },
    getRandomCoatColor: function () {
      return window.util.getRandomValueFromArray(COAT_COLORS);
    },
    getRandomEyesColor: function () {
      return window.util.getRandomValueFromArray(EYES_COLORS);
    },
    getRandomFireballColor: function () {
      return window.util.getRandomValueFromArray(FIREBALL_COLORS);
    },
    onEyesChange: function () {},
    onCoatChange: function () {}
  };
})();
