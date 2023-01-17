import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import requestPost from '../RequestPost';

function IzmeniPost() {
    const location = useLocation();
    var postValue = { "naslov": "", "tekst": "", "lajkovi": 0, "datum_postavljanja": "" }

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
        postValue["datum_postavljanja"] = new Date().toLocaleString()
        postValue["kogaid"] = location.state.vrednosti[0]
        var vrednost = "?kogaid=" + postValue['kogaid'] + "&naslov=" + postValue['naslov'] + "&tekst=" + postValue['tekst'] + "&lajkovi=" + postValue['lajkovi'] + "&datum_postavljanja=" + postValue['datum_postavljanja'];
        requestPost('http://localhost:8080/api/post/edit', vrednost)
    }

    //postovljanje prosledjenih vrednosti u bafer
    postValue['naslov'] = location.state.vrednosti[1];
    postValue['tekst'] = location.state.vrednosti[2];
    postValue['lajkovi'] = location.state.vrednosti[3];
    postValue['datum_postavljanja'] = location.state.vrednosti[4];

    return (<>
        <p className="instrukcije">Instrukcije za koriscenje alata: aktivirati filtere i uneti po kom kriterijumu da se brisu svi elementi u bazi koji ispunjavaju dati uslov.</p>
        <form className="okolina">
            <label> Naslov</label>
            <input type="text" defaultValue={location.state.vrednosti[1]} name="naslov" onChange={naslovChangeValue} />

            <label>Tekst</label>
            <input type="text" defaultValue={location.state.vrednosti[2]} name="tekst" onChange={tekstChangeValue} />

            <label>Lajkovi</label>
            <input type="number" defaultValue={location.state.vrednosti[3]} name="lajkovi" onChange={lajkoviChangeValue} />

            <label>Datum</label>
            <input type="date" defaultValue={location.state.vrednosti[4]} name="datum_postavljanja" onChange={datumChangeValue} />


            <button type='button' onClick={() => { Klik() }}>Save</button>
        </form>
    </>);
}

export default IzmeniPost;