class Api {
    constructor(req) {
        this._headers = req.headers;
        this._url = req.url;
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
            .then(this._check);
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
            .then(this._check);
    }

    editUserData(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers :this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(this._check);
    }

    addCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            })
        })
            .then(this._check);
    }

    cardDelete(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
            .then(this._check);
    }

    setLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: this._headers
        })
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        });
    }

    removeLike(cardId) {
        return fetch(`${this._url}/cards/likes/${cardId}`,
            {
            method: "DELETE",
            headers: this._headers
        })
            .then(this._check);
    }

    updateAvatar(link) {
        console.log({link});
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
            })
        })
            .then(this._check);
    }

    _check(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-25',
    headers: {
        authorization: '1174dadd-027e-4ffe-b733-ac48b2285022',
        'Content-Type': 'application/json',
    }
});

export default api;