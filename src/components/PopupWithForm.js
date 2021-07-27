

function PopupWithForm (props) {
    return (
        <>
            {/*Общая форма попапа*/}
            <div className={`popup popup-${props.name}`}>
                <div className={"popup__body"}>
                    <div className={`popup__content popup-${props.name}__content`}>
                        <button className="popup__close close-popup" type="button"></button>
                        <h2 className="popup__title">${props.title}</h2>
                        {props.children}
                        <button className="popup__save" type="submit" value="Reset">Да</button>
                    </div>
                </div>
            </div>

            {/*Попап редактирования профиля*/}
            <div className="popup popup-profile">
                <div className="popup__body">
                    <div className="popup__content">
                        <button className="popup__close close-popup" type="button"></button>
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <form action="#" name="user" className="form popup__form" noValidate>
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
                            <button className="popup__save form__submit" type="submit" value="Reset">Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>

            {/*Попап для добавления новых фотографий*/}
            <div className="popup popup-place">
                <div className="popup__body">
                    <div className="popup__content">
                        <button className="popup__close close-popup" type="button"></button>
                        <h2 className="popup__title">Новое место</h2>
                        <form action="#" name="place" className="form popup-place__form" noValidate>
                            <section className="form__section">
                                <input type="text" name="place" className="form__input popup__input popup__input_type_place"
                                       placeholder="Название" minLength="2" maxLength="30" required/>
                                <span className="form__input-error"></span>
                            </section>
                            <section className="form__section">
                                <input type="url" name="image" className="form__input popup__input popup__input_type_image"
                                       placeholder="Ссылка на картинку" required/>
                                <span className="form__input-error"></span>
                                <button className="popup__save form__submit" type="submit" value="Reset" disabled>Сохранить</button>
                            </section>
                        </form>
                    </div>
                </div>
            </div>

            {/*Попап изменения аватара*/}
            <div className="popup popup-avatar">
                <div className="popup__body">
                    <div className="popup__content popup-avatar__content">
                        <button className="popup__close close-popup" type="button"></button>
                        <h2 className="popup__title">Обновить аватар</h2>
                        <form action="#" name="avatar" className="form popup-avatar__form" noValidate>
                            <section className="form__section">
                                <input type="url" name="avatar" className="form__input popup__input popup__input_type_avatar"
                                       placeholder="Ссылка на аватар" required/>
                                <span className="form__input-error"></span>
                                <button className="popup__save form__submit" type="submit" value="Reset" disabled>Сохранить</button>
                            </section>
                        </form>
                    </div>
                </div>
            </div>

            {/*Попап удаления карточки*/}
            <div className="popup popup-delete">
                <div className="popup__body">
                    <div className="popup__content popup-delete__content">
                        <button className="popup__close close-popup" type="button"></button>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <button className="popup__save" type="submit" value="Reset">Да</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PopupWithForm;