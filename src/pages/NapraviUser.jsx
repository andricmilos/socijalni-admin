import React from 'react';

function NapraviUser() {

    var user = { "ime":"","prezime":"", "username":"","datum_rodjenja":"","datum_pravljenja_naloga":"","password":"" }

    const imeChange = (event) => {
       user["ime"] = event.target.value
    }

    const prezimeChange = (event) => {
        user["prezime"] = event.target.value
    }

    const usernameChange = (event) => {
        user["username"] = event.target.value
    }

    const passwordChange = (event) => {
        user["password"] = event.target.value
    }

    function Klik(){
        user["datum_rodjenja"] = Date()
        user["datum_pravljenja_naloga"] = Date()
        alert(JSON.stringify(user))
    }


    return (<>
    <form class="okolina">
        <label>Ime</label>
        <input type="text" onChange={imeChange}/>

        <label>Prezime</label>
        <input type="text" onChange={prezimeChange}/>

        <label>Username</label>
        <input type="text" onChange={usernameChange}/>

        <label>Password</label>
        <input type="password" onChange={passwordChange}/>
    
        <input type="submit" value="Create" onClick={Klik}/>
    </form>
    </>);
}

export default NapraviUser;