'use strict';

(function () {

  var setupDialogWindow = document.querySelector('.setup');
  var dialogHandler = setupDialogWindow.querySelector('.upload');
  var setupOpenButton = document.querySelector('.setup-open');
  var setupCloseButton = setupDialogWindow.querySelector('.setup-close');
  var form = setupDialogWindow.querySelector('.setup-wizard-form');

  // Открытие и закрытие окна диалога
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    setupDialogWindow.style = '';
    setupDialogWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress, true);
  };

  var closePopup = function () {
    setupDialogWindow.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpenButton.addEventListener('click', function () {
    openPopup();
  });

  setupOpenButton.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupCloseButton.addEventListener('click', function () {
    closePopup();
  });

  setupCloseButton.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  // Перемещение окна диалога
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogWindow.style.top = (setupDialogWindow.offsetTop - shift.y) + 'px';
      setupDialogWindow.style.left = (setupDialogWindow.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setupDialogWindow.classList.add('hidden');
    }, window.backend.errorHandler);
    evt.preventDefault();
  });
})();
