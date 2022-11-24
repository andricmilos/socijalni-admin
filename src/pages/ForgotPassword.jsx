import React from 'react';
var suma = 0;
var br = 1;

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Cancel() {
  window.location.href = "/login";
}

function Klik() {
  if (suma !== parseInt(br)) {

    alert("Pogresna vrednost u racunici");
  }
}

const izazovChange = (event) => {
  br = event.target.value
}

function ForgotPassword() {
  var brojjedan = randomNumberInRange(1, 10);
  var brojdva = randomNumberInRange(1, 10);
  suma = brojjedan + brojdva;
  return (<>
    <div className="container">
      <label htmlFor="email"><b>Enter Email</b></label>
      <input type="email" placeholder="Enter Email" name="email" required />

      <label htmlFor="izazov"><b>{brojjedan} + {brojdva} = </b></label>
      <input className="izazov" type="text" name="izazov" onChange={izazovChange} required />

      <button className='login-button' type="submit" onClick={Klik}>Login</button>
    </div>

    <div className="container2">
      <button type="button" className="cancelbtn" onClick={Cancel}>Cancel</button>
    </div>
  </>);
}

export default ForgotPassword;