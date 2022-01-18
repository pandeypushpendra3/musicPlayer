import React from 'react'
import {Link} from "react-router-dom"
import "./login.css"
export const Login = (handleSubmit,name,setName) => {
    return (

        <div className="container-main-login">
            <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 col-form-label">Artist Name</label>
    <div className="col-sm-10">
      <input type="text" readonly className="form-control" id="staticEmail" value="email@example.com"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword"/>
    </div>
  </div>
  <button type="button" className="btn btn-primary">Login</button>
        </div>
    )
}
