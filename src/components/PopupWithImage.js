import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(data) {
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');

    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupCaption.textContent = data.name;
    super.open();
  }
}