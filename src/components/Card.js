import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }
    return(
            <div className="element">
                <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick}/>
                <div className="element__name">
                    <h2 className="element__text">{props.card.name}</h2>
                    <div className="element__like-section">
                        <button className="element__like" type="button"></button>
                        <p className="element__number">{props.card.likes.length}</p>
                    </div>
                </div>
                <button className="element__delete" type="button"></button>
            </div>
    )
}

export default Card