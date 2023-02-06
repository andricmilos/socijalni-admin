import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import requestPost from '../RequestPost';
import Options from '../Options';

function IzmeniPost() {

    var urlGroup = "http://localhost:8080/api/group/svi";

    const location = useLocation();
    var postValue = { "naslov": "", "tekst": "", "grupe": "", "datum_postavljanja": "" }

    const naslovChangeValue = (event) => {
        postValue["naslov"] = event.target.value
    }

    const tekstChangeValue = (event) => {
        postValue["tekst"] = event.target.value
    }

    const grupeChange = (event) => {
        postValue["grupe"] = event.target.value
    }

    const datumChangeValue = (event) => {
        postValue["datum_postavljanja"] = event.target.value
    }
    const arr = location.state.vrednosti[3].split("T")
    location.state.vrednosti[3] = arr[0]

    function Klik() {
        postValue["datum_postavljanja"] = new Date().toLocaleString()
        postValue["kogaid"] = location.state.vrednosti[0]
        var vrednost = "?kogaid=" + postValue['kogaid'] + "&naslov=" + postValue['naslov'] + "&tekst=" + postValue['tekst'] +"&grupe=" + postValue['grupe'] + "&datum_postavljanja=" + postValue['datum_postavljanja'];
        requestPost('http://localhost:8080/api/post/edit', vrednost)
    }

    //postovljanje prosledjenih vrednosti u bafer
    postValue['naslov'] = location.state.vrednosti[1];
    postValue['tekst'] = location.state.vrednosti[2];
    postValue['grupe'] = location.state.vrednosti[4];
    postValue['datum_postavljanja'] = location.state.vrednosti[3];

    return (<>
        <p className="instrukcije">Instrukcije za koriscenje alata: aktivirati filtere i uneti po kom kriterijumu da se brisu svi elementi u bazi koji ispunjavaju dati uslov.</p>
        <form className="okolina">
            <label> Naslov</label>
            <input type="text" defaultValue={location.state.vrednosti[1]} name="naslov" onChange={naslovChangeValue} />

            <label>Tekst</label>
            <input type="text" defaultValue={location.state.vrednosti[2]} name="tekst" onChange={tekstChangeValue} />

            <label>Datum</label>
            <input type="date" defaultValue={location.state.vrednosti[3]} name="datum_postavljanja" onChange={datumChangeValue} />

            <label>Grupe</label>
            <select name="grupe" onChange={grupeChange}>
                <Options url={urlGroup} dv={location.state.vrednosti[4]} />
            </select>

            <button type='button' onClick={() => { Klik() }}>Save</button>
        </form>
    </>);
}

export default IzmeniPost;