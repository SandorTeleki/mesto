import {imagePopup, Card} from './Card.js';
import FormValidator from './FormValidator.js';

const popupEdit = document.querySelector(".popup_edit"); //Edit form container 
const popupAdd = document.querySelector(".popup_add"); //Add form container
const popup = document.querySelector(".popup") //Shared by all popups
const popupInput = document.querySelector(".popup__input")
const profileEditButton = document.querySelector(".profile__edit-button"); //The edit button in the profile
const profileAddButton = document.querySelector(".profile__add-button"); //The add button in the profile
const closeButton = document.querySelector(".popup__close-button"); //The close button in the profile
const formEdit = document.querySelector(".edit-form");
const nameInput = document.querySelector("#fullname")
const jobInput = document.querySelector("#description");
const fullname = document.querySelector(".profile__title");
const description = document.querySelector(".profile__description");
const popupAddCloseButton = document.querySelector("#popup-add-close");
const popupImageCloseButton = document.querySelector("#popup-image-close");
const fullPicture = document.querySelector(".popup_full-picture");
const popupAddForm = document.querySelector("#popup-add-form");
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;
const popupAddCaption = document.querySelector("#add-title");
const popupAddLink = document.querySelector("#add-link");
const popupCaption = document.querySelector(".popup__caption");
const popupImage = document.querySelector(".popup__image");


const initialCards = [
    {
        name: 'Будапешт',
        link: 'https://images.unsplash.com/photo-1511902467434-4677a533a674?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
    },
    {
        name: 'Мальдивы',
        link: 'https://images.unsplash.com/photo-1547528114-f4daa226e256?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
    },
    {
        name: 'Бангкок',
        link: 'https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
    },
    {
        name: 'Рио-де-Жанейро',
        link: 'https://images.unsplash.com/photo-1591468069148-5cc79ed1caaa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
    },
    {
        name: 'Братислава',
        link: 'https://images.unsplash.com/photo-1562779346-e43d30d2e647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
    },
    {
        name: 'Дубай',
        link: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1'
    },
];


//Open Popup
const openPopup = function (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEscape); //Close popups through 'Escape' key
};


//Close Popup
const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
};


//Closing popups by pressing 'Esc' key
function closeOnEscape(event) {
    if (event.key === 'Escape') {
        document.querySelector('.popup_opened').classList.remove('popup_opened');
        document.removeEventListener('keydown', closeOnEscape);
    };
};


//Closing popups by clicking on overaly
document.addEventListener('click', function (event) {
    event.target.classList.remove('popup_opened');
    event.stopPropagation();
});

// Edit Button
profileEditButton.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = fullname.textContent;
    jobInput.value = description.textContent;
    formValProf.resetValidation();
});
  
profileAddButton.addEventListener('click', () => {
    openPopup(popupAdd);
    formValPlace.resetValidation();
});


//Call back functions
closeButton.addEventListener('click', () => closePopup(popupEdit));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
popupImageCloseButton.addEventListener('click', () => closePopup(fullPicture))

//Submit the Edit Popup
function submitFormHandler(event) {
    event.preventDefault();
    fullname.textContent = nameInput.value;
    description.textContent = jobInput.value;
    closePopup(popupEdit);
}

//Creat Cards - Card imported from module
function renderElement(element, prepend=true) {
    const card = new Card(element, '.card-template');
    const cardElement = card.generateCard();
    if (prepend){
        cardsList.prepend(cardElement);
    } else {
        cardsList.append(cardElement);
    }
  }

//New card creation from input
function createImage(event) { 
    event.preventDefault();
    renderElement({name: popupAddCaption.value, link: popupAddCaption.value}); 
    popupAddCaption.value = ''; 
    popupAddCaption.value = ''; 
    closePopup(popupAdd); 
}
  
popupEdit.addEventListener('submit', submitFormHandler); 
popupAdd.addEventListener('submit', createImage);
 


initialCards.forEach(item => renderElement(item));



const formValProf = new FormValidator({
    formSelector: '.edit-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  }, popupEdit);
  

  const formValPlace = new FormValidator({
    formSelector: '.edit-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  }, popupAdd);


formValProf.enableValidation();
formValPlace.enableValidation();


export {openPopup};



//////////////////////////////////////////


// //Open the Edit Popup
// function openPopupEdit () {
//     openPopup(popupEdit);
//     nameInput.value = fullname.textContent;
//     jobInput.value = description.textContent;
// }


// //Submit the Edit Popup
// function submitFormHandler(event) {
//     event.preventDefault();
//     fullname.textContent = nameInput.value;
//     description.textContent = jobInput.value;
//     closePopup(popupEdit);
// }



// //Remove card (trash icon)
// function cardDeleteButton(chosenCard) {
//     chosenCard.querySelector('.card__delete').addEventListener('click', function (evt) {
//         const chosenCard = evt.target.closest('.card');
//         chosenCard.remove();
//     });
// };


// //Card reactions (heart icon)
// function cardReactionButton(chosenCard) {
//     chosenCard.querySelector('.card__reaction').addEventListener('click', function (evt) {
//         evt.target.classList.toggle('card__reaction_active');
//     });
// };


// //Open full size picture (popup image)
// function popupFullSize(chosenCard) {
//     chosenCard.querySelector('.card__picture').addEventListener('click', function (evt) {
//         popupCaption.innerText =  evt.target.alt;
//         popupImage.src = evt.target.src;
//         popupImage.alt = evt.target.alt;
//         openPopup(fullPicture);
//     });
// };


// //Close Full size image (popup image) 
// popupImageCloseButton.addEventListener('click', function () {
//     closePopup(fullPicture);
// });


// //Create card
// function createCard(name, link) {
//     const chosenCard = cardTemplate.querySelector('.card').cloneNode(true);
//     const picture = chosenCard.querySelector('.card__picture');
//     chosenCard.querySelector('.card__title').innerText = name;
//     picture.src = link;
//     picture.alt = name;
//     cardDeleteButton(chosenCard); // Delete card
//     cardReactionButton(chosenCard); //React to card
//     popupFullSize(chosenCard); //Open full size popup picture
//     return chosenCard;
// };



// //Adding cards
// function addCard(chosenCard) {
//     cardsList.prepend(chosenCard);
// };


// //New card creation from input
// popupAddForm.addEventListener('submit', function (evt) {
//     evt.preventDefault();
//     addCard(createCard(popupAddCaption.value, popupAddLink.value));
//     popupAddCaption.value = '';
//     popupAddLink.value = '';
//     closePopup(popupAdd);
// });


// //Adding initial cards to page on loading
// initialCards.forEach(function (chosenCard) {
//     addCard(createCard(chosenCard.name, chosenCard.link));
// });











