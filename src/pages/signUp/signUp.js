import React, {useState} from 'react';
import './signUp.css';
import sha256 from 'crypto-js/sha256';


export const SignUp = () => {
    // const submit = () => {
    //     console.log('submit');
    // };
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        errorEmail: false,
        errorPassword: false
    });
    console.log('1');
    const changeEmail = (event) => {
        setUserData({...userData, email: event.target.value});
    };
    const checkEmail = () => {
         const re =  /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
         const valid = re.test(userData.email);
        console.log(valid)
         if ( valid === false){
             setUserData({... userData, errorEmail: true} );
           console.log('ok3')
        }else{
             setUserData({... userData, errorEmail: !valid});
            
        }
    };

    const changePassword = (event) => {
        setUserData({...userData, password: event.target.value});
    };
    const changeConfirmPassword = (event) => {
        setUserData({...userData, confirmPassword: event.target.value});
    };
    const checkPassword= () => {
        if  ( userData.password !== userData.confirmPassword){
            console.log('ok')
            setUserData({...userData, errorPassword: true});
            console.log('ok 2')
        } else { 
            console.log('ne okk')
            setUserData({...userData, errorPassword: false});
        }
    };
    // const hash = sha256('124', 'sec').toString();
    
    const clickOnSignUp = async (e) => {
        // await e.preventDefault();
        
        
        await checkEmail();
        await checkPassword();
        const func = () => {
            if(userData.errorEmail === false && userData.errorPassword === false){
            const password = sha256(userData.password, 'sec').toString();
            localStorage.setItem('email', userData.email);
            localStorage.setItem('password', password);
        }}
        await func();

    };
    const errorEmailMessage = (userData.errorEmail ? <p className="">Некорректный email!</p> : null); 
    const errorPasswordMessage = (userData.errorPassword ? <p className="">Пароли не совпадают</p>: null);
    return (
        <div className='sign-up'>
                {errorEmailMessage}
                {errorPasswordMessage}
                <form >
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input onChange={changeEmail} value={userData.email} type="email" className="form-control" id="email" placeholder="Enter email"/>
                        
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input onChange={changePassword} value={userData.password}  className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input onChange={changeConfirmPassword} value={userData.confirmPassword}  className="form-control" id="confirmPassword" placeholder="Confirm Password"/>
                    </div>
                    
                   
                </form>
                <button onClick={clickOnSignUp} type="button" className="btn btn-primary">Submit</button>
                {/* <form>
                    
                </form>

                <div className='sign-up__form'>
                    <input onChange={changeEmail} value={userData.email} placeholder='Enter your email'/>
                    <input onChange={changePassword} value={userData.password}  placeholder='Enter your password'/>
                    <input onChange={changeConfirmPassword} value={userData.confirmPassword}  placeholder='Confirm your password'/>
                </div>
                <input onClick={clickOnSignUp} type='button' value='Sign Up'/>
            
             */}
           
            
        </div>
    )
}