import React from 'react';
import Table from '../Table';

function Home() {

  var test=[];

  fetch("http://localhost:8080/api/user/svi")
  .then(response => response.json())
  .then((jsonData) => {
    // jsonData is parsed json object received from url
    console.log(jsonData+"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    test=jsonData;
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })

  const getHeadings = (nesto) => {

    return Object.keys(nesto[0]);
}


    return (<>
      <h1>User</h1>

      <Table theadData={getHeadings(test)} tbodyData={test}/>


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