import "./Login.css"

import { Link,  BrowserRouter as Router } from "react-router-dom"

function Login() {
    return (
        <div className='login-page'>
            <div className="loginpage">
                <h2> Login Page </h2>
                <div >
                    <label htmlFor="fname">Frist Name:</label>
                    <input type="text" placeholder='Frist Name' />
                </div>

                <div >
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" placeholder='Last Name' />
                </div>

                <div >
                    <label htmlFor="email">Email ID:</label>
                    <input type="email" placeholder='Email' />
                </div>

                <div >
                    <label htmlFor="password">Password:</label>
                    <input type="Password" placeholder='Password' />

                    <Link to="/dashboard">Login</Link>
                    <p>  <Link to="/signup">signup</Link> | forget password  </p>
                   
                </div>

            </div>
        </div>
    )

}

export default Login