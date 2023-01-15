import React from 'react';
import requestPost from '../RequestPost';

function NapraviPost() {

    var post = { "naslov": "", "tekst": "", "lajkovi": 0, "datum_postavljanja": "" }

    const naslovChange = (event) => {
        post["naslov"] = event.target.value
    }

    const tekstChange = (event) => {
        post["tekst"] = event.target.value
    }

    const lajkoviChange = (event) => {
        post["lajkovi"] = event.target.value
    }

    function Klik() {
        post["datum_postavljanja"] = new Date().toLocaleString()
        var vrednost = "?naslov=" + post['naslov'] + "&tekst=" + post['tekst'] + "&lajkovi=" + post['lajkovi'] + "&datum_postavljanja=" + post['datum_postavljanja'];
        requestPost('http://localhost:8080/api/post/add', vrednost)
    }

    return (<>
        <form class="okolina">
            <label>Naslov</label>
            <input type="text" name="naslov" onChange={naslovChange} />

            <label>Tekst</label>
            <input type="text" name="tekst" onChange={tekstChange} />

            <label>Lajkovi</label>
            <input type="number" name="lajkovi" onChange={lajkoviChange} />

            <button type='button' onClick={() => { Klik() }}>Create</button>
        </form>
    </>);
}

export default NapraviPost;