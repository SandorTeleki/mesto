export const popupEdit = document.querySelector(".popup_edit"); //Edit form container 
export const popupAdd = document.querySelector(".popup_add"); //Add form container
export const popupEditForm = popupEdit.querySelector(".edit-form");
export const popupAddForm = popupAdd.querySelector(".edit-form");

export const popup = document.querySelector(".popup") //Shared by all popups
export const popupInput = document.querySelector(".popup__input")
export const profileEditButton = document.querySelector(".profile__edit-button"); //The edit button in the profile
export const profileAddButton = document.querySelector(".profile__add-button"); //The add button in the profile
export const closeButton = document.querySelector(".popup__close-button"); //The close button in the profile
export const formEdit = document.querySelector(".edit-form");
export const nameInput = document.querySelector("#fullname")
export const jobInput = document.querySelector("#description");
export const fullname = document.querySelector(".profile__title");
export const description = document.querySelector(".profile__description");
export const popupAddCloseButton = document.querySelector("#popup-add-close");
export const popupImageCloseButton = document.querySelector("#popup-image-close");
export const fullPicture = document.querySelector(".popup_full-picture");
export const cardsList = document.querySelector(".cards__list");
export const cardTemplate = document.querySelector("#card-template").content;
export const popupAddCaption = document.querySelector("#add-title");
export const popupAddLink = document.querySelector("#add-link");

export const configuration = {
    formSelector: '.edit-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
};

export const initialCards = [
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
