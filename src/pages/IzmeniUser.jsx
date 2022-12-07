import React from 'react';
import {useLocation} from 'react-router-dom';
import requestPost from '../RequestPost';

function IzmeniUser() {
    const location = useLocation();
    console.log(location.state.vrednosti)
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

    const datumRodjenjaChange = (event) => {
        user["datum_rodjenja"] = event.target.value
    }

    function Klik(){
        user["datum_pravljenja_naloga"] = new Date().toLocaleString()
        requestPost('http://localhost:8080/api/user/add',user)
        //alert(JSON.stringify(user))
    }



    return (<>
   <form class="okolina">
        <label>Email</label>
        <input type="email" value={location.state.vrednosti[1]} name="email" onChange={emailChange}/>

        <label>Ime</label>
        <input type="text" value={location.state.vrednosti[2]} name="ime" onChange={imeChange}/>

        <label>Prezime</label>
        <input type="text" value={location.state.vrednosti[3]} name="prezime" onChange={prezimeChange}/>

        <label>Datum rodjenja</label>
        <input type="date" value={location.state.vrednosti[5]} name="datum_rodjenja" onChange={datumRodjenjaChange}/>

        <label>Username</label>
        <input type="text" value={location.state.vrednosti[4]} name="username" onChange={usernameChange}/>

        <label>Password</label>
        <input type="password" value={location.state.vrednosti[7]} name="password" onChange={passwordChange}/>
    
        <button type='button' onClick={() => {Klik()}}>Create</button>
    </form>
    </>);
}

export default IzmeniUser;