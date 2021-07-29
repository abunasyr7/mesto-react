import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup (props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name="avatar"
            title="Обновить аватар"
            buttonText = "Обновить аватар"
        >
            <section className="form__section">
                <input type="url" name="avatar" className="form__input popup__input popup__input_type_avatar"
                       placeholder="Ссылка на аватар" required/>
                <span className="form__input-error"></span>
            </section>
        </PopupWithForm>
    )
}

export default EditAvatarPopup