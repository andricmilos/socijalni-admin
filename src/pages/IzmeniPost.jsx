import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function IzmeniPost() {
    const location = useLocation();
    const [naslovEnabled, setNaslovEnabled] = useState(true);
    const [tekstEnabled, setTekstEnabled] = useState(true);
    const [lajkoviEnabled, setLajkoviEnabled] = useState(true);
    const [datumEnabled, setDatumEnabled] = useState(true);
    var post = { "naslov": "", "tekst": "", "lajkovi": 0, "datum_postavljanja": "" } //koristi se za formiranje uslova za izmenu
    var postValue = { "naslov": "", "tekst": "", "lajkovi": 0, "datum_postavljanja": "" }

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
        post["datum_postavljanja"] = event.target.value
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
        postValue["datum_postavljanja"] = event.target.value
    }
    const arr = location.state.vrednosti[4].split("T")
    location.state.vrednosti[4] = arr[0]

    function Klik() {
        alert(JSON.stringify(post))
        alert(JSON.stringify(postValue))
    }

    return (<>
        <p className="instrukcije">Instrukcije za koriscenje alata: aktivirati filtere i uneti po kom kriterijumu da se brisu svi elementi u bazi koji ispunjavaju dati uslov.</p>
        <form className="okolina" method='POST' action='http://localhost:8080/api/post/edit'>
            <label> Naslov</label>
            <input type="text" defaultValue={location.state.vrednosti[1]} name="naslov" onChange={naslovChangeValue} />

            <label>Tekst</label>
            <input type="text" defaultValue={location.state.vrednosti[2]} name="tekst" onChange={tekstChangeValue} />

            <label>Lajkovi</label>
            <input type="number" defaultValue={location.state.vrednosti[3]} name="lajkovi" onChange={lajkoviChangeValue} />

            <label>Datum</label>
            <input type="date" defaultValue={location.state.vrednosti[4]} name="datum_postavljanja" onChange={datumChangeValue} />

            <input type="hidden" name="kogaid" value={location.state.vrednosti[0]} />

            <input type="submit" value="Save" />
        </form>
    </>);
}

export default IzmeniPost;