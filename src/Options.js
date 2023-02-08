import React, { useState, useEffect } from 'react';

export default function Options({ url , dv}) {

    const [podaci, setPodaci] = useState([{ "loading": "Loading" }]);
    var tbodyData = podaci

    useEffect(() => {
        fetch(url, { mode: 'cors', credentials: 'include' })
            .then(response => response.json())
            .then((jsonData) => {
                if (jsonData[0] == null) {
                    setPodaci([{ "no value": "No data" }])
                }
                else {
                    setPodaci(jsonData)
                }
            })
            .catch((error) => {
                setPodaci([{ "error": "Error" }])
                console.error(error)
            })
        }, []);

    return (
        <>

            {tbodyData.map((key, index) => {
                return (
                    <option key={key.id} selected={dv==key.id} value={key.id}>{key.ime}</option>
                );
            })}

        </>);

}