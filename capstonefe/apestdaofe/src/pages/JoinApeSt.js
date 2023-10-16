import React, { Form, Link } from "react-router-dom";
import Header from "../components/Header";
import './pagestyle.css'


const JoinApeSt = () => {
    return <div>
         <div className='header'>
        
        </div>
        <h3>ApeSt DAO B-Signup</h3>
        <Form action="/signup" method="POST">
            <div className="sigup">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            </div>
           <br/>
          <br/>
          <div className="butt">
            <input type="submit" value="Sign-up B" />
            </div>
        </Form>
        <br/>
        <div className="link">
        <Link to="/">Back to the DAO Chain!</Link>
        </div>
        <div className='b2h'>
            
            </div>
            </div>
    
}

export default JoinApeSt;