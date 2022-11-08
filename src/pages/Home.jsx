import React from 'react';
import data from "../data.json"
import Table from '../Table';

function Home() {

  const getHeadings = () => {

    return Object.keys(data[0]);
}


    return (<>
      <h1>User</h1>

      <Table theadData={getHeadings()} tbodyData={data}/>


<h1>Post</h1>
<table id="tabela">
  <tr>
    <th>Id</th>
    <th>Datum postavljanja</th>
    <th>Lajkovi</th>
    <th>Naslov</th>
    <th>Tekst</th>
    <th>Korisnik_id</th>
    <th colspan="2">Action</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
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