export default class Popup {
    constructor(popup) {
      this._popup = popup;
      this._handleEscapeClose = this._handleEscapeClose.bind(this)
    }
  
    open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscapeClose);
    }
  
    close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscapeClose);
    }
  
    _handleEscapeClose(event) {
      if (event.key === 'Escape') {
        this.close();
      }
    }
  
    setEventListeners() {
      this._popup.querySelector('.popup__close-button').addEventListener('click', () => this.close());
      this._popup.addEventListener('click', (event) => {
        if (event.currentTarget === event.target){
          this.close();
        }
      })
    }
  }
