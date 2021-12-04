import { Card } from "../components/Card.js";

export default function createCard(data, selector, handleCardClick) {
  const card = new Card(data, selector, handleCardClick);
  const cardElement = card.generateCard(card);
  return cardElement;
}