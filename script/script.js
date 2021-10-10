const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popup = document.querySelector(".popup")
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const closeButton = document.querySelector(".popup__close-button");

//Test
const editCloseButton = popupEdit.querySelector(".popup__close-button");
const addCloseButton = popupAdd.querySelector(".popup__close-button");
// Test closed

const profileInfo = document.querySelector(".profile__info");
const nameInput = popupEdit.querySelector("#fullname")
const jobInput = popupEdit.querySelector("#description");
const fullname = profileInfo.querySelector(".profile__title");
const description = profileInfo.querySelector(".profile__description");
const formEdit = popupEdit.querySelector(".edit-form");

const popupInputs = document.querySelector(".popup__inputs");
const card = document.querySelector(".card");
const cardDeleteButton = document.querySelector(".card__delete");





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


cardDeleteButton.addEventListener('click', (evt) => {
    card.remove();
}); //only working for first card ATM

document.querySelector('.card__reaction').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__reaction_active');
  }); //only working for first card ATM


// function togglePopupEdit (event) {
//     nameInput.value = fullname.textContent;
//     jobInput.value = description.textContent;
//     popupEdit.classList.toggle('popup_opened');
// } 

//Works alone, but not working in conjunction with submitFormHandler...

// profileEditButton.addEventListener('click', togglePopupEdit);
// profileCloseButton.addEventListener('click', togglePopupEdit);




// Create Card

function createCard(cardInfo) {
    const cardTemplate = document.querySelector(".card-template").content;
    const cardUnit = cardTemplate.querySelector(".card").cloneNode('true');
    const cardPicture = cardUnit.querySelector(".card__picture");

}


function openPopupEdit() {
    nameInput.value = fullname.textContent;
    jobInput.value = description.textContent;
    popupEdit.classList.add("popup_opened");
}

function closePopup() {
    popup.classList.remove("popup_opened");
}

function closePopupEdit() {
    popupEdit.classList.remove("popup_opened");
}


function openPopupAdd() {
    popupAdd.classList.add("popup_opened");
}

function closePopupAdd() {
    popupAdd.classList.remove("popup_opened");
}



function submitFormHandler(event) {
    event.preventDefault();
    fullname.textContent = nameInput.value;
    description.textContent = jobInput.value;
    popupEdit.classList.remove("popup_opened");
}

profileEditButton.addEventListener('click', openPopupEdit);
// closeButton.addEventListener('click', closePopupEdit); ~~ Old version from sprint 4

editCloseButton.addEventListener('click', closePopupEdit);

profileAddButton.addEventListener('click', openPopupAdd);
addCloseButton.addEventListener('click', closePopupAdd);


closeButton.addEventListener('click', closePopupAdd); //need to make it for "popup close button, not profile close button"
// popupInputs.addEventListener('submit', submitFormHandler); -- Doesn't work for some reason...
formEdit.addEventListener('submit', submitFormHandler);



