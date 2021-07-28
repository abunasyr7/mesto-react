import React from 'react';
import Header from '../components/Header'
import Footer from "./Footer";
import Main from "./Main";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";


function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);


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
    }

  return (
      <body className="body">
        <div className="page">
          <Header />
          <Main onEditProfile = {handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
          <Footer />
            <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} />
            <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopup} />
            <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopup} />
        </div>
      </body>
  );
}

export default App;