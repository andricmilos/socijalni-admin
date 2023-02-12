import React from 'react';
import { useLocation } from 'react-router-dom';
import requestPost from '../RequestPost';
import Options from '../Options';
import { useEffect } from 'react';


function IzmeniUser() {
    const location = useLocation();
    var user = { "kogaid": "", "email": "", "ime": "", "prezime": "", "username": "", "datum_rodjenja": "", "datum_pravljenja_naloga": "", "password": "", "grupe": "" }

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

    const grupeChange = (event) => {
        var listaaa = user["grupe"].split(",")
        if (!listaaa.includes(event.target.value)) {
            var pocetak = user["grupe"] == "" ? true : false;
            user["grupe"] += (pocetak ? "" : ",") + event.target.value
            document.getElementById("listaGrupa").value += (pocetak ? "" : ",") + event.target[event.target.selectedIndex].text;
        }
    }

    const arr = location.state.vrednosti[5].split("T")
    location.state.vrednosti[5] = arr[0]

    function reset() {
        user["grupe"] = "";
        document.getElementById("listaGrupa").value = "";
    }

    function Klik() {
        user["datum_pravljenja_naloga"] = new Date().toLocaleString()
        user["kogaid"] = location.state.vrednosti[0]
        console.log(user["grupe"])
        var vrednost = "?kogaid=" + user['kogaid'] + "&email=" + user['email'] + "&ime=" + user['ime'] + "&prezime=" + user['prezime'] + "&username=" + user['username'] + "&datum_rodjenja=" + user['datum_rodjenja'] + "&datum_pravljenja_naloga=" + user['datum_pravljenja_naloga'] + "&password=" + user['password'] + "&grupe=" + user['grupe'];
        requestPost('http://localhost:8080/api/user/edit', vrednost)
    }

    //postovljanje prosledjenih vrednosti u bafer
    user['email'] = location.state.vrednosti[1];
    user['ime'] = location.state.vrednosti[2];
    user['prezime'] = location.state.vrednosti[3];
    user['username'] = location.state.vrednosti[4];
    user['datum_rodjenja'] = location.state.vrednosti[5];
    if (location.state.vrednosti[7] != null)
        user['grupe'] = location.state.vrednosti[7];

    var urlGroup = "http://localhost:8080/api/group/svi";

    var finale = "Loading...";

    useEffect(() => {
        fetch(urlGroup, { mode: 'cors', credentials: 'include' })
            .then(response => response.json())
            .then((jsonData) => {
                finale = ""
                if (jsonData[0] != null) {
                    if (location.state.vrednosti[7] != null) {
                        var listaaa = location.state.vrednosti[7].split(",")

                        var pocetak = false;
                        jsonData.map((key, index) => {

                            if (listaaa.includes(key.id.toString())) {
                                console.log(key.id)
                                if (pocetak) {
                                    finale += ","
                                }
                                finale += key.ime;

                                pocetak = true;
                            }

                        })
                        document.getElementById("listaGrupa").value = finale
                    }
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);



    return (<>
        <form class="okolina">
            <label>Email</label>
            <input type="email" defaultValue={location.state.vrednosti[1]} name="email" onChange={emailChange} />

            <label>Ime</label>
            <input type="text" defaultValue={location.state.vrednosti[2]} name="ime" onChange={imeChange} />

            <label>Prezime</label>
            <input type="text" defaultValue={location.state.vrednosti[3]} name="prezime" onChange={prezimeChange} />

            <label>Datum rodjenja</label>
            <input type="date" defaultValue={location.state.vrednosti[5]} name="datum_rodjenja" onChange={datumRodjenjaChange} />

            <label>Username</label>
            <input type="text" defaultValue={location.state.vrednosti[4]} name="username" onChange={usernameChange} />

            <label>Groups</label>
            <input type="text" disabled id="listaGrupa" defaultValue={finale} />
            <select name="grupe" onChange={grupeChange} multiple>
                <Options url={urlGroup} />
            </select>
            <button type='button' onClick={() => { reset() }}>Reset</button><br />


            <label>Password <br /><small>Ako ne zelite da promenite sifru ostavite prazno</small></label>
            <input type="password" name="password" id='password' onChange={passwordChange} />

            <button type='button' onClick={() => { Klik() }}>Create</button>
        </form>
    </>);
}

export default IzmeniUser;