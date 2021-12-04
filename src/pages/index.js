import './index.css';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import { initialCards, configuration, cardsList, popupEditForm, popupEdit, popupAdd,  fullPicture, popupAddForm, profileEditButton, profileAddButton, nameInput, jobInput, fullname, description} from '../utils/constants.js';
import UserInfo from '../components/UserInfo.js';
import createCard from '../utils/utils.js';

const image = new PopupWithImage(fullPicture);
image.setEventListeners();
const inform = new UserInfo(fullname, description);
const popupWithProfileForm = new PopupWithForm(popupEdit,
  (formData) =>  {
    inform.setUserInfo(formData);
    })
popupWithProfileForm.setEventListeners();

const popupWithCardForm = new PopupWithForm(popupAdd,
  (formData) => {
    const newCard = createCard({name: formData['add-title'], link: formData['add-link']}, '.card-template', () => image.open({name: formData['add-title'], link: formData['add-link']}))
    cardList.addItem(newCard);
  })
  popupWithCardForm.setEventListeners();

profileEditButton.addEventListener('click',() => {
  const userInfo = inform.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.info;
  popupWithProfileForm.open();
  formValProf.resetValidation();});

profileAddButton.addEventListener('click', () => {
  popupWithCardForm.open();
  formValPlace.resetValidation()});

const cardList = new Section({
  data: initialCards,
  renderer:(item) => {
    const card = createCard(item, '.card-template', () => image.open(item));
    cardList.addItem(card)
  }
  }, cardsList);

  cardList.renderItems();

const formValProf = new FormValidator(configuration, popupEditForm);
const formValPlace = new FormValidator(configuration, popupAddForm);

formValProf.enableValidation();
formValPlace.enableValidation();
