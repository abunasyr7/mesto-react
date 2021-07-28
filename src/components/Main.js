import React from 'react';



function Main(props) {
    return (
        <main>
            <section className="profile">
                <div className="profile__info-section">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img src="<%=require('./images/image.svg')%>" alt="Avatar" className="avatar" />
                        <div className="middle">
                            <div className="profile__image"></div>
                        </div>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__info-name">Жак-Ив Кусто</h1>
                        <p className="profile__info-text">Исследователь океана</p>
                    </div>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <div className="elements"></div>

            <template className="elements-container">
                <div className="element">
                    <img src="../images/kirill-pershin-1088404-unsplash.png" alt="Карачаевск" className="element__image"/>
                    <div className="element__name">
                        <h2 className="element__text">Карачаевск</h2>
                        <div className="element__like-section">
                            <button className="element__like" type="button"></button>
                            <p className="element__number">1</p>
                        </div>
                    </div>
                    <button className="element__delete" type="button"></button>
                </div>
            </template>


        </main>
    )
}

export default Main;