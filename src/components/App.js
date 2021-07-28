import React from 'react';
import Header from '../components/Header'
import Footer from "./Footer";
import Main from "./Main";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";
import ImagePopup from "./ImagePopup";


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function closeAllPopup() {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setSelectedCard(false)
    }

  return (
      <body className="body">
        <div className="page">
          <Header />
          <Main
              onEditProfile = {handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
          />
          <Footer />
            <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} />
            <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopup} />
            <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} />
            <ImagePopup card={selectedCard !== null && selectedCard}  onClose={closeAllPopup}/>
        </div>
      </body>
  );
}

export default App;
