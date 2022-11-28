import React, { useState, useEffect } from 'react';


function ulepsaj(string) {
  return (string.charAt(0).toUpperCase() + string.slice(1)).replaceAll("_", " ");
}

function ulepsajDatum(string, key) {
  if (!key.includes("dat")) {
    return string;
  }
  var novi = new Date(string);
  return novi.toDateString();
}

const getHeadings = (nesto) => {
  return Object.keys(nesto[0]);
}

const obrisi = (nesto,url) => {
  const formData = new FormData();
    formData.append('id', nesto);
  fetch(url, {  method: 'DELETE', mode: 'cors', credentials: 'include', body: formData })
      .then(response => response)
      .then((jsonData) => {
        // console.log(jsonData)
       // setPodaci(jsonData)
       window.location.reload(false);
      })
      .catch((error) => {
        console.error(error)
      })
}

export default function Table({ url, delUrl }) {

  const [podaci, setPodaci] = useState([{ "loading": "Loading" }]);
  var tbodyData = podaci
  var theadData = getHeadings(podaci)

  useEffect(() => {
    fetch(url, { mode: 'cors', credentials: 'include' })
      .then(response => response.json())
      .then((jsonData) => {
        // console.log(jsonData)
        if(jsonData[0]==null)
        {
          setPodaci([{ "no value": "No data" }])
        }
        else
        {
          setPodaci(jsonData)
        }
      }) 
      .catch((error) => {
        setPodaci([{ "error": "Error" }])
        console.error(error)
      })
  }, []);

  return (
    <table id="tabela">
      <thead>
        <tr>
          {theadData.map(heading => {
            return <th key={heading}>{ulepsaj(heading)}</th>
          })}
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((row, index) => {
          var id;
          return <tr key={index}>
            {theadData.map((key, index) => {
              if(key=='id'){
                id=row[key];
              }
              return <td key={row[key]}>{ulepsajDatum(row[key], key)}</td>
            })}
            <td><button value={id} onClick={() => { obrisi(id,delUrl); }}>Obrisi</button></td>
            <td><a href="">Izmeni</a></td>
          </tr>
        })}
      </tbody>
    </table>
  );
}