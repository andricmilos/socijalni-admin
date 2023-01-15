import React from 'react';

function Logout() {
  var url = 'http://localhost:8080/logout'
  fetch(url, { mode: 'cors', credentials: 'include' })
    .then((response) => {
      console.error(response)
    })
    .catch((error) => {
      console.error(error)
    });
  return (<>
    <h1>Uspesno ste se izlogovali !!!</h1>
  </>);
}

export default Logout;