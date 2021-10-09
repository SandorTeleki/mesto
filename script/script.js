const popupEdit = document.querySelector(".popup_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const profileCloseButton = document.querySelector(".popup__close-button");
const profileInfo = document.querySelector(".profile__info");
const formEdit = popupEdit.querySelector(".edit-form");
const popupInputs = document.querySelector(".popup__inputs");

const nameInput = popupEdit.querySelector("#fullname")
const jobInput = popupEdit.querySelector("#description");
const fullname = profileInfo.querySelector(".profile__title");
const description = profileInfo.querySelector(".profile__description");


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


function openPopupEdit() {
    nameInput.value = fullname.textContent;
    jobInput.value = description.textContent;
    popupEdit.classList.add("popup_opened");
}

function closePopupEdit() {
    popupEdit.classList.remove("popup_opened");
}

function submitFormHandler(event) {
    event.preventDefault();
    fullname.textContent = nameInput.value;
    description.textContent = jobInput.value;
    popupEdit.classList.remove("popup_opened");
}

profileEditButton.addEventListener('click', openPopupEdit);
profileCloseButton.addEventListener('click', closePopupEdit);
// popupInputs.addEventListener('submit', submitFormHandler); -- Doesn't work for some reason...
formEdit.addEventListener('submit', submitFormHandler);



