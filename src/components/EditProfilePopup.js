import React from 'react'
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup (props) {
    return (
        <PopupWithForm
            isOpen = {props.isOpen}
            onClose = {props.onClose}
            name = 'profile'
            title = 'Редактировать профиль'
            buttonText = "Сохранить"
        >
            <section className="form__section">
                <input type="text" name="name" className="form__input popup__input popup__input_type_name"
                       minLength="2" maxLength="40" placeholder="Имя" required/>
                <span className="form__input-error"></span>
            </section>
            <section className="form__section">
                <input type="text" name="job" className="form__input popup__input popup__input_type_job"
                       minLength="2" maxLength="200" placeholder="Вид деятельности" required/>
                <span className="form__input-error"></span>
            </section>
        </PopupWithForm>
    )
}

export default EditProfilePopup