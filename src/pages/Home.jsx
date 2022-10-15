import React from 'react';

function Home() {
    return (<>
        <h1>User</h1>

<table id="tabela">
  <tr>
    <th>Id</th>
    <th>Ime</th>
    <th>Prezime</th>
    <th>Username</th>
    <th>Password</th>
    <th>Aktivan</th>
    <th>Role</th>
    <th>Datum rodjenja</th>
    <th>Datum pravljenja naloga</th>
    <th colspan="2">Action</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td><a href="">Obrisi</a></td>
    <td><a href="">Izmeni</a></td>
  </tr>
</table>
    </>);
}

export default Home;