import React from 'react';
import { useState } from 'react';

function ObrisiUser() {
    const [imeEnabled, setImeEnabled] = useState(true);
    const [prezimeEnabled, setPrezimeEnabled] = useState(true);
    const [usernameEnabled, setUsernameEnabled] = useState(true);
    const [datumEnabled, setDatumEnabled] = useState(true);
    var user = { "ime":"","prezime":"", "username":"","datum_rodjenja":"","datum_pravljenja_naloga":"","password":"" }

    const imeChange = (event) => {
       user["ime"] = event.target.value
    }

    const checkImeEnable = (event) => {
        setImeEnabled(!imeEnabled) 
    }

    const checkPrezimeEnabled = (event) => {
        setPrezimeEnabled(!prezimeEnabled) 
    }

    const checkUsernameEnabled = (event) => {
        setUsernameEnabled(!usernameEnabled) 
    }

    const checkDatumEnabled = (event) => {
        setDatumEnabled(!datumEnabled) 
    }

    const prezimeChange = (event) => {
        user["prezime"] = event.target.value
    }

    const usernameChange = (event) => {
        user["username"] = event.target.value
    }

    const datumChange = (event) => {
        user["datum_rodjenja"] = event.target.value
    }

    function Klik(){
        user["datum_rodjenja"] = Date()
        user["datum_pravljenja_naloga"] = Date()
        alert(JSON.stringify(user))
    }


    return (<>
    <p class="instrukcije">Instrukcije za koriscenje alata: aktivirati filtere i uneti po kom kriterijumu da se brisu svi elementi u bazi koji ispunjavaju dati uslov.</p>
    <form class="okolina">
        <input type="checkbox" onChange={checkImeEnable}/>
        <label> Ime filter</label>
        <input type="text" onChange={imeChange} disabled={imeEnabled}/>

        <input type="checkbox" onChange={checkPrezimeEnabled}/>
        <label> Prezime filter</label>
        <input type="text" onChange={prezimeChange} disabled={prezimeEnabled}/>

        <input type="checkbox" onChange={checkUsernameEnabled}/>
        <label> Username filter</label>
        <input type="text" onChange={usernameChange} disabled={usernameEnabled}/>

        <input type="checkbox" onChange={checkDatumEnabled}/>
        <label>Datum filter</label>
        <input type="date" onChange={datumChange} disabled={datumEnabled}/>
    
        <input type="submit" value="Delete" onClick={Klik}/>
    </form>
    </>);
}

export default ObrisiUser;