export default class Card {
  constructor(cardTitle, cardPictureLink, cardLikes, ownerId, cardId, cardTemplate, currentUserId, handleCardClick,
    handleDeleteButtonClick, handleLikeButtonClick) {
    this._cardTitle = cardTitle;
    this._cardPictureLink = cardPictureLink;
    this._cardLikes = cardLikes;
    this._ownerId = ownerId;
    this._cardId = cardId;
    this._cardTemplate = cardTemplate;
    this._currentUserId = currentUserId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButtonClick = handleDeleteButtonClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
  }

  createCard() {
    this._card = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);

    this._cardPicture = this._card.querySelector('.card__picture');
    this._cardCaption = this._card.querySelector('.card__title');
    this._cardLikeButton = this._card.querySelector('.card__reaction');
    this._cardDeleteButton = this._card.querySelector('.card__delete');
    this._cardLikesQuantity = this._card.querySelector('.card__like-quantity');
    this._cardCaption.textContent = this._cardTitle;
    this._cardPicture.src = this._cardPictureLink;
    this._cardPicture.alt = this._cardTitle;
    this._cardLikesQuantity.textContent = this._cardLikes.length;
    this._card.id = this._cardId;

    if (this._currentUserId !== this._ownerId) { 
      this._cardDeleteButton.classList.add('card__delete_inactive'); 
    }       

    if (this._cardLikes.some(item => { 
      return (item._id === this._currentUserId); 
    })) {
      this._like();
    }
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      if (!this._cardLikeButton.classList.contains('card__reaction_active')) {
        this._handleLikeButtonClick(true);
      } else {
        this._handleLikeButtonClick(false);
      }
    });

    this._cardDeleteButton.addEventListener('click', () => {
      this._handleDeleteButtonClick();
    });

    this._cardPicture.addEventListener('click', () => {
      this._handleCardClick();
    })
  }

  _like() {
    this._cardLikeButton.classList.toggle('card__reaction_active');
  }

  updateLikeQuantity(quantity) {
    this._cardLikesQuantity.textContent = quantity;
    this._like();
  }
}
