import React, {useState, useRef} from 'react';
import './login.css';
import sha256 from 'crypto-js/sha256';
import {Redirect} from 'react-router-dom';


export const Login = () => {

    const [canEnter, setCanEnter] = useState(false)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const checkUserData = () => {
        const password = localStorage.getItem('password');
        const email = localStorage.getItem('email');
        const userPassword = sha256(passwordRef.current.value, 'sec').toString();
        const userEmail = emailRef.current.value;
        
        if(password === userPassword && email === userEmail){
            setCanEnter(true);
        }
    };

    if(canEnter === true){
        return <Redirect to={{pathname:'/search'}}/>;
            
        
    };

    return(
        <div className='login'>
            <form >
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="email" placeholder="Enter email"/>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input ref={passwordRef} className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <button onClick={checkUserData} className="btn btn-primary">Login</button>
                   
                </form>
                
        </div>
    )
}