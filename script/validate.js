function displayInputError (formElement, inputElement, errorMessage, {inputErrorClass, spanErrorClass}) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(spanErrorClass );
  };
  
  function hideInputError (formElement, inputElement, {inputErrorClass, spanErrorClass}) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(spanErrorClass);
    errorElement.textContent = ' ';
  };
  
  function isValid (formElement, inputElement, rest) {
    if (!inputElement.validity.valid) {
      displayInputError (formElement, inputElement, inputElement.validationMessage, rest);
    } else {
      hideInputError (formElement, inputElement, rest);
    }
  };
  
  function setEventListeners (formElement, selectors) {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        isValid(formElement, inputElement, selectors);
        updateSubmitStatus(formElement, selectors);
      });
    });
  };
  
  function enableValidation ({formSelector, ...rest}) {
    const formList = Array.from(document.querySelectorAll(formSelector));
  
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement, rest);
    });
  };
  
  enableValidation ({
    formSelector: '.edit-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button', 
    inactiveButtonClass: 'popup__button-disabled', 
    inputErrorClass: 'popup__input_error',
    spanErrorClass: 'popup__error_visible',
  });
  
  function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  function updateSubmitStatus (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass}) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(inactiveButtonClass);
    }
  };
