import React from 'react';
import requestPost from '../RequestPost';

function NapraviUser() {

    var user = { "email": "", "ime": "", "prezime": "", "username": "", "datum_rodjenja": "", "datum_pravljenja_naloga": "", "password": "" }

    const emailChange = (event) => {
        user["email"] = event.target.value
    }

    const imeChange = (event) => {
        user["ime"] = event.target.value
    }

    const prezimeChange = (event) => {
        user["prezime"] = event.target.value
    }

    const usernameChange = (event) => {
        user["username"] = event.target.value
    }

    const passwordChange = (event) => {
        user["password"] = event.target.value
    }

    const datumRodjenjaChange = (event) => {
        user["datum_rodjenja"] = event.target.value
    }

    function Klik() {
        user["datum_pravljenja_naloga"] = new Date().toLocaleString()
        var vrednost = "?email=" + user['email'] + "&ime=" + user['ime'] + "&prezime=" + user['prezime'] + "&username=" + user['username'] + "&datum_rodjenja=" + user['datum_rodjenja'] + "&datum_pravljenja_naloga=" + user['datum_pravljenja_naloga'] + "&password=" + user['password'];
        requestPost('http://localhost:8080/api/user/add', vrednost)
    }


    return (<>
        <form class="okolina">
            <label>Email</label>
            <input type="email" name="email" onChange={emailChange} />

            <label>Ime</label>
            <input type="text" name="ime" onChange={imeChange} />

            <label>Prezime</label>
            <input type="text" name="prezime" onChange={prezimeChange} />

            <label>Datum rodjenja</label>
            <input type="date" name="datum_rodjenja" onChange={datumRodjenjaChange} />

            <label>Username</label>
            <input type="text" name="username" onChange={usernameChange} />

            <label>Password</label>
            <input type="password" name="password" onChange={passwordChange} />

            <button type='button' onClick={() => { Klik() }}>Create</button>
        </form>
    </>);
}

export default NapraviUser;