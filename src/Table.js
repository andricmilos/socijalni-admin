import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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

const aktiviraj = (nesto,url) => {
  const formData = new FormData();
    formData.append('id', nesto);
  fetch(url, {  method: 'POST', mode: 'cors', credentials: 'include', body: formData })
      .then(response => response)
      .then((jsonData) => {
       window.location.reload(false);
      })
      .catch((error) => {
        console.error(error)
      })
}

export default function Table({ url, delUrl, aktivirajUrl, editP }) {

  const [podaci, setPodaci] = useState([{ "loading": "Loading" }]);
  var tbodyData = podaci
  var theadData = getHeadings(podaci)

  useEffect(() => {
    fetch(url, { mode: 'cors', credentials: 'include' })
      .then(response => response.json())
      .then((jsonData) => {
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

  const navigate = useNavigate();

  return (
    <table id="tabela">
      <thead>
        <tr>
          {theadData.map(heading => {
            return <th key={heading}>{ulepsaj(heading)}</th>
          })}
          <th colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((row, index) => {
          var id;
          var param = []
          return <tr key={index}>
            {theadData.map((key, index) => {
              if(key=='id'){
                id=row[key];
              }
              param.push(row[key]);
              if(key=='aktiviran')
              {
                var vrednosti="Aktiviraj"
                if(row[key]==true)
                {
                  vrednosti='Deaktiviraj'
                }
                return <td key={row[key]}><button onClick={() => { aktiviraj(id,aktivirajUrl); }}>{vrednosti}</button></td>

              }
              else{
                return <td key={row[key]}>{ulepsajDatum(row[key], key)}</td>
              }
            })}
            <td><button value={id} onClick={() => { obrisi(id,delUrl); }}>Obrisi</button></td>
            <td><button value={id} onClick={() => {navigate(editP, {state:{vrednosti:param}})}}>Izmeni</button></td>
          </tr>
        })}
      </tbody>
    </table>
  );
}