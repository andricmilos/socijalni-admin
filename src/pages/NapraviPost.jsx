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
    <form class="okolina">
        <label>Naslov</label>
        <input type="text" onChange={naslovChange}/>

        <label>Tekst</label>
        <input type="text" onChange={tekstChange}/>
    
        <input type="submit" value="Submit" onClick={Klik}/>
    </form>
    </>);
}

export default NapraviPost;