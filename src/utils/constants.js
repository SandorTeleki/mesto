// export const popupEdit = document.querySelector(".popup_edit"); //Edit form container 
// export const popupAdd = document.querySelector(".popup_add"); //Add form container
// export const popupAvatar = document.querySelector(".popup_avatar_picture");
// export const popupDeletePicture = document.querySelector(".popup_delete_picture");
// export const profileFullname = document.querySelector(".profile__title");
// export const profileDescription = document.querySelector(".profile__description");
// export const fullPicture = document.querySelector(".popup_full-picture");
// export const cardsList = document.querySelector(".cards__list");
// export const cardTemplate = document.querySelector("#card-template"); 

export const popup = document.querySelector(".popup") //Shared by all popups
export const popupInput = document.querySelector(".popup__input")
export const profile = document.querySelector(".profile");
export const profileEditButton = profile.querySelector(".profile__edit-button"); //The edit button in the profile
export const profileAddButton = profile.querySelector(".profile__add-button"); //The add button in the profile
export const closeButton = document.querySelector(".popup__close-button"); //The close button in the profile
export const formEdit = document.querySelector(".edit-form");
export const nameInput = document.querySelector("#nameinput")
export const jobInput = document.querySelector("#jobdescription");
export const popupAddCloseButton = document.querySelector("#popup-add-close");
export const popupImageCloseButton = document.querySelector("#popup-image-close");
export const popupAddCaption = document.querySelector("#add-title");
export const popupAddLink = document.querySelector("#add-link");
export const popupAvatarButton = profile.querySelector(".profile__avatar");


export const cardTemplate = ("#card-template");
export const popupAdd = (".popup_add");
export const popupEdit = (".popup_edit");
export const fullPicture = (".popup_full-picture");
export const profileFullname = (".profile__title");
export const profileDescription = (".profile__description"); 
export const profilePicture = (".profile__picture");
export const popupAvatar = (".popup_avatar_picture");
export const popupDeletePicture = (".popup_delete_picture");
export const cardsList = (".cards__list");



export const configuration = {
    formSelector: '.edit-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
};

