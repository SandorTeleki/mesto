class Card {
    constructor(data, cardSelector, handleCardClick) {
      this._link = data.link;   
      this._name = data.name; 
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
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
      this._cardPicture = this._element.querySelector('.card__picture');
      this._cardTitle = this._element.querySelector('.card__title');
      this._cardReaction = this._element.querySelector('.card__reaction');
      this._cardDelete = this._element.querySelector('.card__delete');

      this._setEventListeners();
      this._cardPicture.src = this._link; 
      this._cardPicture.alt = this._name; 
      this._cardTitle.textContent = this._name; 
      return this._element;
    }
  
    _setEventListeners() {
      this._cardPicture.addEventListener('click', this._handleCardClick);
      this._cardReaction.addEventListener('click', (evt) => {
        const eventTarget = evt.target;
        eventTarget.classList.toggle('card__reaction_active');
      })
      this._cardDelete.addEventListener('click', () => {
        const listItem = this._cardDelete.closest('.card');
        listItem.remove();
      })
    }
  }
  
export {Card};
