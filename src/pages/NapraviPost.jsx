import React from 'react';

function NapraviPost() {

    var post = { "naslov":"","tekst":"", "lajkovi":0,"datum_postavljanja":"" }

    const naslovChange = (event) => {
       post["naslov"] = event.target.value
    }

    const tekstChange = (event) => {
        post["tekst"] = event.target.value
     }

    function Klik(){
        post["datum_postavljanja"] = Date()
        alert(JSON.stringify(post))
    }

    return (<>
    <form class="okolina" method='POST' action='http://localhost:8080/api/post/add'>
        <label>Naslov</label>
        <input type="text" name="naslov" onChange={naslovChange}/>

        <label>Tekst</label>
        <input type="text" name="tekst" onChange={tekstChange}/>

        <input type="hidden" value={0} name="lajkovi"/>

        <input type="hidden" value={new Date().toLocaleString()} name="datum_postavljanja"/>
    
        <input type="submit" value="Create"/>
    </form>
    </>);
}

export default NapraviPost;