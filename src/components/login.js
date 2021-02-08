import React, { useState } from 'react';
import Axios from 'axios'


function login() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    


const [LoginStatus, setLoginStatus] = useState('');
    
   


    function login() {
        
        // console.log(username.length)
        // if(username.length < 8 && username != "1" && username != "2" && username != "0" || password.length){
        //     usernamewr= " Kullanıcı adı hatalı";
        //     console.log(usernamewr);
        //     document.getElementById("userwr").innerHTML=usernamewr;
            
            
        //     if(password.length < 8){
        //     passwr="Parolanız 8 karakterden küçük olamaz";
        //     document.getElementById("passwr").innerHTML=passwr;
        //     return null;
        // }else{
        //         document.getElementById("passwr").innerHTML = " ";
        //     }

        // }else{
        //     document.getElementById("userwr").innerHTML="";

        // }

        
        // console.log(usernameReg +" "+ passwordReg);
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        
        }).then((response) => {
            // const { username, password } = this.state;
            let userinfo;
            // if(response.data.message){
            //     userinfo = "Kullanıcı adı şifre hatalı";
            // }else{
                
                if(response.data.message == "0"){
                    userinfo = "Kullanıcı adı şifre hatalı";
                    window.location = "/"; 

                }else{
                    localStorage.setItem('username', response.data[0].username);
                    localStorage.setItem('password', response.data[0].password);
                    localStorage.setItem('point', response.data[0].point);
                    localStorage.setItem('percent', response.data[0].percent);
                    localStorage.setItem('image', response.data[0].imagesrc);

                    if (response.data[0].perm == 1) {
                        // alert("Welcome VerusAdmin");
                        userinfo = "Welcome VerusAdmin";
                         window.location = "/verusadmin"; 
                    } else if (response.data[0].perm == 2) {
                        // alert("Welcome NovoAdmin");
                        userinfo = "Welcome NovoAdmin";
                        window.location = "/novoadmin"; 

                        // window.location = "/novoadmin"; 


                    }
                    else {
                        // alert("Welcome: " + response.data[0].username);
                        userinfo = "Welcome " + response.data[0].username;
                        window.location = "/dashboard"; 


                    }
                }
                
                setLoginStatus(userinfo)
               

            

            // if (response.data.message == "0") {
            //     alert("Kullanıcı adı şifre hatalı");
            // } else {
            //     if (response.data[0].perm == 1) {
            //         alert("Welcome VerusAdmin");
            //         window.location = "/verusadmin" 
            //     } else if (response.data[0].perm == 2) {
            //         alert("Welcome NovoAdmin");
            //     }
            //     else {
            //         alert("Welcome: " + response.data[0].username);
            //     }

            // }


        });
    }

    return (
        <div>
            <div className="login">
                
                <h1>Login</h1>
                
                <label>Username</label>
                <input type="text" className="form-control" onChange={(event)=> {
                    setUsername(event.target.value)
                    ;}}/>
                    <p id="userwr" style={{color: 'red'}}></p>
                <label>Password</label>
                <input type="text" className="form-control" onChange={(event)=> {
                    setPassword(event.target.value)
                    ;}} />
                <p id="passwr" style={{color: 'red'}}>{}</p>

                <button className="btn btn-primary" onClick={login}> Login </button>
            
            </div>

            <h1>{LoginStatus}</h1>
            
        </div>
    )
}

export default login
