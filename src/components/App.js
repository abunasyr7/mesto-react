import React from 'react';
import Header from '../components/Header'
import Footer from "./Footer";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import AddCardPopup from "./AddCardPopup";
import EditAvatarPopup from "./EditAvatarPopup";
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
        <div className="page">
          <Header />
          <Main
              onEditProfile = {handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
          />
          <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} />
            <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopup} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} />
            <ImagePopup card={selectedCard !== null && selectedCard}  onClose={closeAllPopup}/>
        </div>
  );
}

export default App;
