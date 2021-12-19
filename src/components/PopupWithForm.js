import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.edit-form');
    this._inputList = this._form.querySelectorAll('.popup__input'); 
    this._submitButton = this._form.querySelector('.popup__submit-button');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.renderLoading(true);
      this._handleFormSubmit(this._getInputValues());
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.value = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранить...';
    } else {
      this._submitButton.textContent = this._submitButton.value;
    }
  }

  close() {
    super.close();
    this._form.reset();
  }
}
