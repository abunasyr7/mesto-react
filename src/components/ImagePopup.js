import React from 'react';

function PopupImage () {
    return (
        <div className="popup popup-image">
            <div className="popup__body">
                <div className="popup-image__fullscreen">
                    <button className="popup__close close-popup" type="button"></button>
                    <form action="#" name="edit" className="form popup-image__form">
                        <img className="popup-image__picture" alt="#" src="#"/>
                        <p type="text" className="popup-image__caption">
                            Архыз
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PopupImage;
