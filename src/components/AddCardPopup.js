import React from 'react';
import PopupWithForm from "./PopupWithForm";


function AddCardPopup(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name='place'
            title = 'Новое место'
            buttonText = "Сохранить"
        >
            <section className="form__section">
                <input type="text" name="place" className="form__input popup__input popup__input_type_place"
                       placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="form__input-error"></span>
            </section>
            <section className="form__section">
                <input type="url" name="image" className="form__input popup__input popup__input_type_image"
                       placeholder="Ссылка на картинку" required/>
                <span className="form__input-error"></span>
            </section>
        </PopupWithForm>
    )
}

export default AddCardPopup;