import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import { profileAddButton, cardTemplate, popupAdd, popupEdit, configuration, profileFullname, profileDescription, nameInput, jobInput, profileEditButton, fullPicture, popupAvatar, popupAvatarButton, profilePicture, popupDeletePicture, cardsList, } from '../utils/constants.js';
import Api from '../components/Api.js';


const api = new Api ({
  serverURL: 'https://mesto.nomoreparties.co/v1/cohort-31',
  headers: {
    authorization: '740b2dd9-b0c6-4001-a722-b6687d6e9ed0',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(profileFullname, profileDescription, profilePicture);

const editProfilePopup = new PopupWithForm({
  popupSelector: popupEdit, handleFormSubmit: (formData) => {
    api.editProfile(formData) 
      .then((res)=>{
        userInfo.setUserInfo(res); 
        editProfilePopup.close();
      })
      .catch(err=>{
        alert(`editProfilePopup`+ err);
      })
      .finally( ()=> {
          editProfilePopup.renderLoading(false);
        }
      );
  }
});

const updateUserAvatarPopup = new PopupWithForm({popupSelector: popupAvatar,
  handleFormSubmit:(formData)=>{
    api.updateUserAvatar(formData.link)
      .then((res)=>{
        userInfo.setUserInfo(res);
        updateUserAvatarPopup.close();
      })
      .catch(err=>{
        alert(`updateUserAvatar`+ err);
      })
      .finally(()=>{
        updateUserAvatarPopup.renderLoading(false);
      });
  }});

const viewCardImagePopup = new PopupWithImage(fullPicture);

const deleteCardPopup = new PopupWithConfirmation(popupDeletePicture, (cardId) => {
  api.deleteCard(cardId) 
    .then(() => {
      document.getElementById(cardId).remove(); 
      deleteCardPopup.close();
    })
    .catch(err=>{
      alert(`deleteCard`+ err);
    })
    .finally(() => {
      deleteCardPopup.renderLoading(false);
    })
});

const createNewCard = (item) => {
  const card = new Card(item.name,
    item.link,
    item.likes,
    item.owner._id,
    item._id,
    cardTemplate,
    userInfo.getId(),
    () => {
      viewCardImagePopup.open(item) 
    }, () => {
      deleteCardPopup.open(item._id); 
    }, (isLike) => { 
      if (isLike) {
        api.likeCard(item._id) 
          .then(res => {
            card.updateLikeQuantity(res.likes.length);
          })
          .catch(err=>{
            alert(`likeCard`+ err);
          });
      } else {
        api.dislikeCard(item._id) 
          .then(res => {
            card.updateLikeQuantity(res.likes.length); 
          })
          .catch(err=>{
            alert(`dislikeCard`+ err);
          });
      }
    });
  return card.createCard();
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(res => {
    const userData = res[0];
    const cardsData = res[1];
    userInfo.setUserInfo(userData); 

    const cardList = new Section(cardsData, (data)=>{
      cardList.addItem(createNewCard(data));
    }, cardsList);
    cardList.renderItems();
    

    const addCardPopup = new PopupWithForm({
      popupSelector: popupAdd, handleFormSubmit: (formData) => {
        api.addNewCard(formData) 
          .then(res => {
            const card = createNewCard(res); 
            cardList.addItem(card); 
            addCardPopup.close();
          })
          .catch(err=>{
            alert(`addCardPopup`+ err);
          })
          .finally(() => {
            addCardPopup.renderLoading(false);
          });
      },
    });

    editProfilePopup.setEventListeners();
    updateUserAvatarPopup.setEventListeners();
    addCardPopup.setEventListeners();
    viewCardImagePopup.setEventListeners();
    deleteCardPopup.setEventListeners();

    const formValidators = {};
    const enableValidation = (configuration) => {
      const formList = Array.from(document.querySelectorAll(configuration.formSelector));
      formList.forEach((formElement) => {
        const validator = new FormValidator(configuration, formElement);
        formValidators[formElement.id] = validator;
        validator.enableValidator();
      });
    }
    enableValidation(configuration);


    profileEditButton.addEventListener('click', () => {
      const defaultUserInfo = userInfo.getUserInfo();
      nameInput.value = defaultUserInfo.name;
      jobInput.value = defaultUserInfo.about;
      formValidators['popup-edit-form'].resetValidation();
      editProfilePopup.open();
    });

    popupAvatarButton.addEventListener('click', ()=>{
      formValidators['popup-edit-picture-form'].resetValidation();
      updateUserAvatarPopup.open();
    });

    profileAddButton.addEventListener('click', () => {
      formValidators['popup-add-form'].resetValidation();
      addCardPopup.open();
    });
    
  })

  .catch(err=>{
    alert(`eventListeners`+ err);
  });

