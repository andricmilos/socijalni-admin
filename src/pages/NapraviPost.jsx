import React from 'react';
import Options from '../Options';
import requestPost from '../RequestPost';

function NapraviPost() {

    var urlGroup = "http://localhost:8080/api/group/svi";

    var post = { "naslov": "", "tekst": "", "grupe": "", "datum_postavljanja": "" }

    const naslovChange = (event) => {
        post["naslov"] = event.target.value
    }

    const tekstChange = (event) => {
        post["tekst"] = event.target.value
    }

    const grupeChange = (event) => {
        post["grupe"] = event.target.value
    }

    function Klik() {
        post["datum_postavljanja"] = new Date().toLocaleString()
        var vrednost = "?naslov=" + post['naslov'] + "&tekst=" + post['tekst'] + "&grupe=" + post['grupe'] + "&datum_postavljanja=" + post['datum_postavljanja'];
        requestPost('http://localhost:8080/api/post/add', vrednost)
    }

    return (<>
        <form class="okolina">
            <label>Naslov</label>
            <input type="text" name="naslov" onChange={naslovChange} />

            <label>Tekst</label>
            <input type="text" name="tekst" onChange={tekstChange} />

            <label>Grupe</label>
            <select name="grupe" onChange={grupeChange}>
                <Options url={urlGroup} />
            </select>

            <button type='button' onClick={() => { Klik() }}>Create</button>
        </form>
    </>);
}

export default NapraviPost;