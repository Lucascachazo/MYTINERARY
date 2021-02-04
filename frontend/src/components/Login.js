import React from 'react'
import Nav from './Nav'

export const Login = () => {
    return (
    <>
        <Nav/>
        <div className="logContainer">

                <div className = " titleContainer">
                    <h1 className = "title">Log In</h1>
                </div>
                <input className ="account"  name = "user"  type = "text" placeholder = "Enter your user">
                </input>

                <input className = "password" type="password" name = "password" placeholder = "Enter your password">
                </input>
                <button  className="sendBtn">OK</button>
        </div>
    </> 
    )
}
export default Login






