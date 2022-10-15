import React from 'react';
import { useState } from 'react';

function IzmeniUser() {
    const [imeEnabled, setImeEnabled] = useState(true);
    const [prezimeEnabled, setPrezimeEnabled] = useState(true);
    const [usernameEnabled, setUsernameEnabled] = useState(true);
    const [datumRodjenjaEnabled, setdatumRodjenjaEnabled] = useState(true);
    const [datumPravljenjaNalogaEnabled, setdatumPravljenjaNalogaEnabled] = useState(true);
    const [passwordEnabled, setPasswordEnabled] = useState(true);
    var user = { "ime":"","prezime":"", "username":"","datum_rodjenja":"","datum_pravljenja_naloga":"","password":"" } //koristi se za formiranje uslova za izmenu
    var userValue = { "ime":"","prezime":"", "username":"","datum_rodjenja":"","datum_pravljenja_naloga":"","password":"" }

    const imeChange = (event) => {
       user["ime"] = event.target.value
    }

    const checkImeEnabled = (event) => {
        setImeEnabled(!imeEnabled) 
    }

    const checkPrezimeEnabled = (event) => {
        setPrezimeEnabled(!prezimeEnabled) 
    }

    const checkUsernameEnabled = (event) => {
        setUsernameEnabled(!usernameEnabled) 
    }

    const checkDatumRodjenjaEnabled = (event) => {
        setdatumRodjenjaEnabled(!datumRodjenjaEnabled) 
    }

    const checkDatumPravljenjaNalogaEnabled = (event) => {
        setdatumPravljenjaNalogaEnabled(!datumPravljenjaNalogaEnabled) 
    }

    const checkPasswordEnabled = (event) => {
        setPasswordEnabled(!passwordEnabled) 
    }

    const prezimeChange = (event) => {
        user["prezime"] = event.target.value
    }

    const usernameChange = (event) => {
        user["username"] = event.target.value
    }

    const datumRodjenjaChange = (event) => {
        user["datum_rodjenja"] = event.target.value
    }

    const datumPravljenjaNalogaChange = (event) => {
        user["datum_pravljenja_naloga"] = event.target.value
    }

    const passwordChange = (event) => {
        user["password"] = event.target.value
    }

    /*------------------------------------------*/

    const imeChangeValue = (event) => {
        userValue["ime"] = event.target.value
    }

    const prezimeChangeValue = (event) => {
        userValue["prezime"] = event.target.value
    }

    const usernameChangeValue = (event) => {
        userValue["username"] = event.target.value
    }

    const datumRodjenjaChangeValue = (event) => {
        userValue["datum_rodjenja"] = event.target.value
    }

    const datumPravljenjaNalogaChangeValue = (event) => {
        userValue["datum_pravljenja_naloga"] = event.target.value
    }

    const passwordChangeValue = (event) => {
        userValue["password"] = event.target.value
    }

    function Klik(){
        //user["datum_rodjenja"] = Date()
        alert(JSON.stringify(user))
        alert(JSON.stringify(userValue))
    }


    return (<>
    <p class="instrukcije">Instrukcije za koriscenje alata: aktivirati filtere i uneti po kom kriterijumu da se brisu svi elementi u bazi koji ispunjavaju dati uslov.</p>
    <form class="okolina">
        <input type="checkbox" onChange={checkImeEnabled}/>
        <label> Naslov filter</label>
        <input type="text" onChange={imeChange} disabled={imeEnabled}/>
        <input type="text" onChange={imeChangeValue} disabled={imeEnabled}/>

        <input type="checkbox" onChange={checkPrezimeEnabled}/>
        <label>Tekst filter</label>
        <input type="text" onChange={prezimeChange} disabled={prezimeEnabled}/>
        <input type="text" onChange={prezimeChangeValue} disabled={prezimeEnabled}/>

        <input type="checkbox" onChange={checkUsernameEnabled}/>
        <label>Lajkovi filter</label>
        <input type="number" onChange={usernameChange} disabled={usernameEnabled}/>
        <input type="number" onChange={usernameChangeValue} disabled={usernameEnabled}/>

        <input type="checkbox" onChange={checkDatumRodjenjaEnabled}/>
        <label>Datum rodjenja filter</label>
        <input type="date" onChange={datumRodjenjaChange} disabled={datumRodjenjaEnabled}/>
        <input type="date" onChange={datumRodjenjaChangeValue} disabled={datumRodjenjaEnabled}/>

        <input type="checkbox" onChange={checkDatumPravljenjaNalogaEnabled}/>
        <label>Datum pravljenja naloga filter</label>
        <input type="date" onChange={datumPravljenjaNalogaChange} disabled={datumPravljenjaNalogaEnabled}/>
        <input type="date" onChange={datumPravljenjaNalogaChangeValue} disabled={datumPravljenjaNalogaEnabled}/>

        <input type="checkbox" onChange={checkPasswordEnabled}/>
        <label>Password filter</label>
        <input type="password" onChange={passwordChange} disabled={passwordEnabled}/>
        <input type="password" onChange={passwordChangeValue} disabled={passwordEnabled}/>
        
    
        <input type="submit" value="Save" onClick={Klik}/>
    </form>
    </>);
}

export default IzmeniUser;