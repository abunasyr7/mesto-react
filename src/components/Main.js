import React from 'react';
import api from '../utils/Api';
import Card from "./Card";


function Main(props) {
    const [userAvatar, setUserAvatar] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getInitialCards()
        ])
            .then(([userData, initialCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(initialCards)
            })
            .catch((err) => console.log(err));
    }, [])
    return (

        <main>
            <section className="profile">
                <div className="profile__info-section">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img src={userAvatar} alt="Avatar" className="avatar" />
                        <div className="middle">
                            <div className="profile__image"></div>
                        </div>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__info-name">{userName}</h1>
                        <p className="profile__info-text">{userDescription}</p>
                    </div>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <div className="elements">
                {cards.map((card => (
                    <Card
                        onCardClick={props.onCardClick}
                        key={card._id}
                        card={card}
                    />
                )))}
            </div>

            <div className="popup popup-delete">
                <div className="popup__body">
                    <div className="popup__content popup-delete__content">
                        <button className="popup__close close-popup" type="button"></button>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <button className="popup__save" type="submit" value="Reset">Да</button>
                    </div>
                </div>
            </div>


        </main>
    )
}

export default Main;