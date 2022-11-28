import React from 'react';

function NapraviUser() {

    var user = { "email":"","ime":"","prezime":"", "username":"","datum_rodjenja":"","datum_pravljenja_naloga":"","password":"" }

    const emailChange = (event) => {
        user["email"] = event.target.value
     }

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
    <form class="okolina" method='POST' action='http://localhost:8080/api/user/add'>
        <label>Email</label>
        <input type="email" name="email" onChange={emailChange}/>

        <label>Ime</label>
        <input type="text" name="ime" onChange={imeChange}/>

        <label>Prezime</label>
        <input type="text" name="prezime" onChange={prezimeChange}/>

        <label>Datum rodjenja filter</label>
        <input type="date" name="datum_rodjenja"/>

        <label>Username</label>
        <input type="text" name="username" onChange={usernameChange}/>

        <label>Password</label>
        <input type="password" name="password" onChange={passwordChange}/>

        <input type="hidden" value={new Date().toLocaleString()} name="datum_pravljenja_naloga"/>
    
        <input type="submit" value="Create"/>
    </form>
    </>);
}

export default NapraviUser;