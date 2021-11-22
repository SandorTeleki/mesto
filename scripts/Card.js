import {openPopup} from './index.js';

const imagePopup = document.querySelector('.popup_full-picture');
const popupImg = imagePopup.querySelector('.popup__image');
const popupPlace = imagePopup.querySelector('.popup__caption');

class Card {
    constructor(data, cardSelector) {
      this._link = data.link;   
      this._name = data.name; 
      this._cardSelector = cardSelector; 
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.card')
        .cloneNode(true);
    
      return cardElement;
    }
    
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.card__picture').src = this._link;
      this._element.querySelector('.card__picture').alt = this._name;
      this._element.querySelector('.card__title').textContent = this._name;
      return this._element;
    }

    _handleOpenPopup() {
      popupImg.src = this._link;
      popupImg.alt = this._name;
      popupPlace.textContent = this._name;
      openPopup(imagePopup);
    }
  
    _setEventListeners() {
      this._element.querySelector('.card__picture').addEventListener('click', () => {
        this._handleOpenPopup();
      })
      this._element.querySelector('.card__reaction').addEventListener('click', (evt) => {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('card__reaction_active');
      })
      this._element.querySelector('.card__delete').addEventListener('click', () => {
        const listItem = this._element.querySelector('.card__delete').closest('.card');
        listItem.remove();
      })
    }
  
  }
  
export {imagePopup, Card};
