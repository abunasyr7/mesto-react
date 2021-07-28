import React from 'react';

function ImagePopup (props) {
    return (
        <div className={`popup popup-image ${props.card ? 'popup_open' : ''}`}>
            <div className="popup__body">
                <div className="popup-image__fullscreen">
                    <button className="popup__close close-popup" type="button" onClick={props.onClose}></button>
                    <form action="#" name="edit" className="form popup-image__form">
                        <img className="popup-image__picture" alt={props.card.name} src={props.card.link}/>
                        <p type="text" className="popup-image__caption">
                            {props.card.name}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImagePopup;
