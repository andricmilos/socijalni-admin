import React from 'react';
import requestPost from '../RequestPost';

function NapraviGroup() {

    var post = { "ime": "", "opis": "" }

    const imeChange = (event) => {
        post["ime"] = event.target.value
    }

    const opisChange = (event) => {
        post["opis"] = event.target.value
    }

    function Klik() {
        var vrednost = "?ime=" + post['ime'] + "&opis=" + post['opis'];
        requestPost('http://localhost:8080/api/group/add', vrednost)
    }

    return (<>
        <form class="okolina">
            <label>Ime</label>
            <input type="text" name="ime" onChange={imeChange} />

            <label>Opis</label>
            <input type="text" name="opis" onChange={opisChange} />

            <button type='button' onClick={() => { Klik() }}>Create</button>
        </form>
    </>);
}

export default NapraviGroup;