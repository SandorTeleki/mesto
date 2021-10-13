const popupEdit = document.querySelector(".popup_edit"); //Edit form container 
const popupAdd = document.querySelector(".popup_add"); //Add form container
const popup = document.querySelector(".popup") //Shared by all popups
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


// const profileInfo = document.querySelector(".profile__info");
// const nameInput = popupEdit.querySelector("#fullname")
// const jobInput = popupEdit.querySelector("#description");
// const fullname = profileInfo.querySelector(".profile__title");
// const description = profileInfo.querySelector(".profile__description");
// const formEdit = popupEdit.querySelector(".edit-form");
// const cardsList = document.querySelector(".cards__list");

// const popupInputs = document.querySelector(".popup__inputs");
// const card = document.querySelector(".card");
// const cardDeleteButton = document.querySelector(".card__delete");

// const fullPicture = document.querySelector(".popup__full-picture");
// const popupFrame = fullPicture.querySelector(".popup__frame");
// const popupImage = fullPicture.querySelector(".popup__image");
// const popupCaption = fullPicture.querySelector(".popup__caption");
// const popupCloseButton = fullPicture.querySelector(".popup__close-button");

// const popupAddCaption = document.querySelector("#add-title");
// const popupAddLink = document.querySelector("#add-link");


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
};

// const openPopup = (popup) => {
//     popup.clasList.add('.popup_opened')
// };



//Close Popup
const closePopup = function (popup) {
    popup.classList.remove('popup_opened');
};

// const closePopup = (popup) => {
//     popup.classList.remove('popup_opened');
// };


//Open the Edit Popup
function openPopupEdit (event) {
    openPopup(popupEdit);
    nameInput.value = fullname.textContent;
    jobInput.value = description.textContent;
}


//Submit the Edit Popup
function submitFormHandler(event) {
    event.preventDefault();
    fullname.textContent = nameInput.value;
    description.textContent = jobInput.value;
    closePopup(popupEdit);
}

// function togglePopupEdit (event) {
//     nameInput.value = fullname.textContent;
//     jobInput.value = description.textContent;
//     popupEdit.classList.toggle('popup_opened');
// } 


//Remove card (trash icon)
function cardDeleteButton(chosenCard) {
    chosenCard.querySelector('.card__delete').addEventListener('click', function (evt) {
        const chosenCard = evt.target.closest('.card');
        chosenCard.remove();
    });
};

// cardDeleteButton.addEventListener('click', (evt) => {
//     card.remove();
// }); 


//Card reactions (heart icon)
function cardReactionButton(chosenCard) {
    chosenCard.querySelector('.card__reaction').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__reaction_active');
    });
};

// document.querySelector('.card__reaction').addEventListener('click', function (evt) {
//     evt.target.classList.toggle('card__reaction_active');
//   }); 


//Open full size picture (popup image)
function popupFullSize(chosenCard) {
    chosenCard.querySelector('.card__picture').addEventListener('click', function (evt) {
        popupCaption.innerText = evt.target.parentElement.closest('.card').querySelector('.card__title').textContent;
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.parentElement.closest('.card').querySelector('.card__title').textContent;
        openPopup(fullPicture);
    });
};


//Close Full size image (popup image) 
popupImageCloseButton.addEventListener('click', function () {
    const closeEditCard = popupImageCloseButton.closest('.popup_full-picture');
    closeEditCard.classList.remove('popup_opened');
});


//Create card
function createCard(name, link) {
    const chosenCard = cardTemplate.querySelector('.card').cloneNode(true);
    const picture = chosenCard.querySelector('.card__picture');
    chosenCard.querySelector('.card__title').innerText = name;
    picture.src = link;
    picture.alt = name;
    cardDeleteButton(chosenCard); // Delete card
    cardReactionButton(chosenCard); //React to card
    popupFullSize(chosenCard); //Open full size popup picture
    return chosenCard;
};

// Create Card function

// function createCard(cardInfo) {
//     const cardTemplate = document.querySelector(".card-template").content;
//     const cardUnit = cardTemplate.querySelector(".card").cloneNode('true');
//     const cardPicture = cardUnit.querySelector(".card__picture");
//     const cardTitle = cardUnit.querySelector(".card__title");
//     const cardReaction = cardUnit.querySelector(".card__reaction");
//     const cardDelete = cardUnit.querySelector(".card__delete");

    // Card Reaction 
    // cardReaction.addEventListener('click', function(evt) {
    //     evt.currentTarget.classList.toggle('card__reaction_active');
    // });

    // Card Delete
    // cardDelete.addEventListener('click', function(evt) {
    //     evt.cardUnit.remove();
    // });

    // Card Image
//     cardPicture.addEventListener('click', () => {
//         popupImage.setAttribute('src', cardInfo.link);
//         popupImage.setAttribute('alt', cardInfo.name);
//         popupCaption.textContent = cardInfo.name;
//         openPopup(fullPicture);
//     });

//     popupImage.setAttribute('src', cardInfo.link);
//     popupImage.setAttribute('alt', cardInfo.name);
//     popupCaption.textContent = cardInfo.name;


//     return cardUnit;
// }


//Adding cards
function addCard(chosenCard) {
    cardsList.prepend(chosenCard);
};


//New card creation from input
popupAddForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addCard(createCard(popupAddCaption.value, popupAddLink.value));
    popupAddCaption.value = '';
    popupAddLink.value = '';
    closePopup(popupAdd);
});


//Adding initial cards to page on loading
initialCards.forEach(function (chosenCard) {
    addCard(createCard(chosenCard.name, chosenCard.link));
});


//Call back functions
profileEditButton.addEventListener('click', openPopupEdit);
formEdit.addEventListener('submit', submitFormHandler);
closeButton.addEventListener('click', () => closePopup(popupEdit));
profileAddButton.addEventListener('click', () => openPopup(popupAdd));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));

//Works alone, but not working in conjunction with submitFormHandler...
// profileEditButton.addEventListener('click', togglePopupEdit);
// profileCloseButton.addEventListener('click', togglePopupEdit);



//Old code that didn't work:


//Add card

// function addCard(cardInfo, cardHolder) {
//     const card = createCard(cardInfo);
//     cardHolder.prepend(card);
// };




// function openPopupEdit() {
//     nameInput.value = fullname.textContent;
//     jobInput.value = description.textContent;
//     popupEdit.classList.add("popup_opened");
// }

// function closePopup() {
//     popup.classList.remove("popup_opened");
// }

// function closePopupEdit() {
//     popupEdit.classList.remove("popup_opened");
// }


// function openPopupAdd() {
//     popupAdd.classList.add("popup_opened");
// }

// function closePopupAdd() {
//     popupAdd.classList.remove("popup_opened");
// }



// function submitFormHandler(event) {
//     event.preventDefault();
//     fullname.textContent = nameInput.value;
//     description.textContent = jobInput.value;
//     popupEdit.classList.remove("popup_opened");
// }

// profileEditButton.addEventListener('click', openPopupEdit);
// // closeButton.addEventListener('click', closePopupEdit); ~~ Old version from sprint 4

// editCloseButton.addEventListener('click', closePopupEdit);

// profileAddButton.addEventListener('click', openPopupAdd);
// addCloseButton.addEventListener('click', closePopupAdd);


// closeButton.addEventListener('click', closePopupAdd); //need to make it for "popup close button, not profile close button"
// popupInputs.addEventListener('submit', submitFormHandler); -- Doesn't work for some reason...
// formEdit.addEventListener('submit', submitFormHandler);

// initialCards.forEach(card => {
//     addCard(card, cardsList);
// });




