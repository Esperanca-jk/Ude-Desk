import React, { useState } from 'react';
import Axios from 'axios'


function Register() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    

    const register = () => {
        // console.log(usernameReg +" "+ passwordReg);
        Axios.post('http://localhost:3001/register', {
            username: username, 
            password: password,
            
        }
        
        )
        
        .then((res) =>{
            console.log(res+"cevap geldi");

        });
        alert("Kayıt Başarılı");
        window.location.href="/";
    }
    return (
        <div>
            <div className="register">
                
                <h1>Register</h1>
                <label htmlFor="exampleFormControlInput1">Username</label>
                <input type="text" className="form-control" onChange={(event)=> {
                    setUsername(event.target.value)
                    ;}}/>
                <label htmlFor="exampleFormControlInput1">Password</label>
                <input type="text" className="form-control" onChange={(event)=> {
                    setPassword(event.target.value)
                    ;}} />
                                    <h1> </h1>

                <button className="btn btn-primary" onClick={register}> Register </button>
                
            </div>
            
        </div>
    )
}

export default Register
