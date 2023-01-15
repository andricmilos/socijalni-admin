import React from 'react';

function Login() {
    return (<>
        <form class="container" method='POST' action='http://localhost:8080/login'>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <button class='login-button' type="submit">Login</button>
        </form>

    </>);
}

export default Login;