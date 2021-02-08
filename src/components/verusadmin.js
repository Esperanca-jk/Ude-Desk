import axios from 'axios'
import React from 'react'
import Axios from 'axios'
import Login from './login';
// ComponentDidMount(); {
//     const username = localStorage.getItem('username');
//     const password = localStorage.getItem('password');
//     this.setState({ username, password });
//   };

let username = localStorage.getItem("username");
let password = localStorage.getItem("password");
console.log(username+" "+password);

const verusadmin = () => {
    if(username=="1" && password=="1"){
        console.log("admin bilgisi geldi");
        return (
            <div>
                <h1>Hojgeldin Bea</h1>
                in
            </div>
        )
    }else{
        console.log("asdasd");
        return (
            <div>
                <h1>Admin Değilsiniz.</h1>
                in
            </div>)
    }
    
    
    
        
    
}

export default verusadmin
