import React, {useState} from 'react';
import './signUp.css';
import sha256 from 'crypto-js/sha256';
import {Redirect} from 'react-router-dom';


export const SignUp = () => {
   
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        errorEmail: false,
        errorPassword: false,
        canEnter: false
    });
   
    const changeEmail = (event) => {
        setUserData({...userData, email: event.target.value});
    };
    const changePassword = (event) => {
        setUserData({...userData, password: event.target.value});
    };
    const changeConfirmPassword = (event) => {
        setUserData({...userData, confirmPassword: event.target.value});
    };
    const checkEmail =  () => {
         const re =  /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
         const valid =  re.test(userData.email);
      
         if ( valid === false){
             return true;
        }else{
            return false;
        }
    };
    
    const checkPassword= () => {
        if  ( userData.password !== userData.confirmPassword){
            return true;
        } else { 
            return false;
        }
    };

    const savingUserData = (param1, param2) => {
        if(param1 === false && param2 === false){
            const password = sha256(userData.password, 'sec').toString();
            localStorage.setItem('email', userData.email);
            localStorage.setItem('password', password);
            setUserData({...userData, canEnter: true});
        }
    };

    
    const clickOnSignUp = (e) => {
        e.preventDefault();
        const checkPass = checkPassword();
        const checkE = checkEmail();

        setUserData({...userData, errorEmail: checkE, errorPassword: checkPass});
        savingUserData(checkE, checkPass);
        

    };
    if(userData.canEnter === true){
       return (
       <Redirect to={{pathname:'/login'}}/>)
    };
    const errorEmailMessage = userData.errorEmail ? <p className="">Некорректный email!</p> : null; 
    const errorPasswordMessage = userData.errorPassword ? <p className="">Пароли не совпадают</p>: null;
    return (
        <div className='sign-up'>
            <div className='error'>
                {errorEmailMessage}
                {errorPasswordMessage}
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input onChange={changeEmail} value={userData.email} type="email" className="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={changePassword} value={userData.password} type="password"  className="form-control" id="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={changeConfirmPassword} value={userData.confirmPassword} type="password"  className="form-control" id="confirmPassword" placeholder="Confirm Password"/>
                </div>
                <button onClick={clickOnSignUp} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}