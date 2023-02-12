import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import requestPost from '../RequestPost';
import Options from '../Options';

function IzmeniGroup() {
    const location = useLocation();

    var post = { "ime": "", "opis": "" }

    const imeChange = (event) => {
        post["ime"] = event.target.value
    }

    const opisChange = (event) => {
        post["opis"] = event.target.value
    }

    function Klik() {
        post["kogaid"] = location.state.vrednosti[0]
        var vrednost = "?ime=" + post['ime'] + "&opis=" + post['opis'] + "&kogaid=" + post['kogaid'] ;
        requestPost('http://localhost:8080/api/group/edit', vrednost)
    }

    post["ime"]=location.state.vrednosti[1]
    post["opis"]=location.state.vrednosti[2]
   

    return (<>
        <p className="instrukcije">Instrukcije za koriscenje alata: aktivirati filtere i uneti po kom kriterijumu da se brisu svi elementi u bazi koji ispunjavaju dati uslov.</p>
        <form className="okolina">
        <label>Ime</label>
            <input type="text" name="ime" defaultValue={location.state.vrednosti[1]} onChange={imeChange} />

            <label>Opis</label>
            <input type="text" name="opis" defaultValue={location.state.vrednosti[2]} onChange={opisChange} />

            <button type='button' onClick={() => { Klik() }}>Save</button>
        </form>
    </>);
}

export default IzmeniGroup;