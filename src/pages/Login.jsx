import React from 'react';

function Login() {
    return (<>
        <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
            
        <button class='login-button' type="submit">Login</button>
        <label>
        <input type="checkbox" name="remember"/> Remember me
        </label>
        </div>

    <div class="container2">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="/forgotpassword">password?</a></span>
    </div>
    </>);
}

export default Login;