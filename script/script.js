const popupEdit = document.querySelector(".popup_edit");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileCloseButton = popupEdit.querySelector(".popup__close-button");
const profileInfo = document.querySelector(".profile__info");
const formEdit = popupEdit.querySelector(".edit-form");
const popupInputs = document.querySelector(".popup__inputs");

const nameInput = popupEdit.querySelector(".popup__fullname")
const jobInput = popupEdit.querySelector(".popup__description");
const fullname = profileInfo.querySelector(".profile__title");
const description = profileInfo.querySelector(".profile__description");

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

