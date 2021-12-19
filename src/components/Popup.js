export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._handleEscapeClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleEscapeClose);
  }

  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup')
        || event.target.classList.contains('popup__close-button')
        || event.target.classList.contains('popup__container')) {
        this.close();
      }
    });
  }

  _handleEscapeClose(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }
}