import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._viewPopupFullImage = this._popup.querySelector('.popup__image');
    this._viewPopupFullCaption = this._popup.querySelector('.popup__caption');
  }

  open(item) {
    this._viewPopupFullImage.src = item.link;
    this._viewPopupFullCaption.textContent = item.name;
    this._viewPopupFullImage.alt = item.name;
    super.open();
  }
}
