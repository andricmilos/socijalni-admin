import React from 'react';
import { useState } from 'react';

function IzmeniPost() {
    const [naslovEnabled, setNaslovEnabled] = useState(true);
    const [tekstEnabled, setTekstEnabled] = useState(true);
    const [lajkoviEnabled, setLajkoviEnabled] = useState(true);
    const [datumEnabled, setDatumEnabled] = useState(true);
    var post = { "naslov":"","tekst":"", "lajkovi":0,"datum_postavljanja":"" } //koristi se za formiranje uslova za izmenu
    var postValue = { "naslov":"","tekst":"", "lajkovi":0,"datum_postavljanja":"" }

    const naslovChange = (event) => {
       post["naslov"] = event.target.value
    }

    const checkNaslovEnable = (event) => {
        setNaslovEnabled(!naslovEnabled) 
    }

    const checkTekstEnabled = (event) => {
        setTekstEnabled(!tekstEnabled) 
    }

    const checkLajkoviEnabled = (event) => {
        setLajkoviEnabled(!lajkoviEnabled) 
    }

    const checkDatumEnabled = (event) => {
        setDatumEnabled(!datumEnabled) 
    }

    const tekstChange = (event) => {
        post["tekst"] = event.target.value
    }

    const lajkoviChange = (event) => {
        post["lajkovi"] = event.target.value
    }

    const datumChange = (event) => {
        post["datum"] = event.target.value
    }

    /*------------------------------------------*/

    const naslovChangeValue = (event) => {
        postValue["naslov"] = event.target.value
    }

    const tekstChangeValue = (event) => {
        postValue["tekst"] = event.target.value
    }

    const lajkoviChangeValue = (event) => {
        postValue["lajkovi"] = event.target.value
    }

    const datumChangeValue = (event) => {
        postValue["datum"] = event.target.value
    }

    function Klik(){
        post["datum_postavljanja"] = Date()
        alert(JSON.stringify(post))
    }

    return (<>
    <p class="instrukcije">Instrukcije za koriscenje alata: aktivirati filtere i uneti po kom kriterijumu da se brisu svi elementi u bazi koji ispunjavaju dati uslov.</p>
    <form class="okolina">
        <input type="checkbox" onChange={checkNaslovEnable}/>
        <label> Naslov filter</label>
        <input type="text" onChange={naslovChange} disabled={naslovEnabled}/>
        <input type="text" onChange={naslovChangeValue} disabled={naslovEnabled}/>

        <input type="checkbox" onChange={checkTekstEnabled}/>
        <label>Tekst filter</label>
        <input type="text" onChange={tekstChange} disabled={tekstEnabled}/>
        <input type="text" onChange={tekstChangeValue} disabled={tekstEnabled}/>

        <input type="checkbox" onChange={checkLajkoviEnabled}/>
        <label>Lajkovi filter</label>
        <input type="number" onChange={lajkoviChange} disabled={lajkoviEnabled}/>
        <input type="number" onChange={lajkoviChangeValue} disabled={lajkoviEnabled}/>

        <input type="checkbox" onChange={checkDatumEnabled}/>
        <label>Datum filter</label>
        <input type="date" onChange={datumChange} disabled={datumEnabled}/>
        <input type="date" onChange={datumChangeValue} disabled={datumEnabled}/>
    
        <input type="submit" value="Submit" onClick={Klik}/>
    </form>
    </>);
}

export default IzmeniPost;