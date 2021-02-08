import React from 'react'
import Axios from 'axios'

function Logout() {
    
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    console.log(username+" logout "+password);
    localStorage.clear();
    window.location.href="/";

    

    
        // console.log(usernameReg +" "+ passwordReg);
        Axios.post('http://localhost:3001/logout', {
            username: username, 
            password: password,
            
        }
        
        )
        
        .then((res) =>{
            console.log(res+"logout oldu");

        });
        setTimeout(function(){ window.location.href="/"; }, 3000);
        
    
    
    return (
        <div>
           
            
        </div>
    )

}
export default Logout