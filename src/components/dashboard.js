import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


let username = localStorage.getItem("username");
let password = localStorage.getItem("password");
let point = localStorage.getItem("point");
let image = localStorage.getItem("image");

console.log(username+" "+password);

const dashboard = () => {

    if(username && password && point){
        console.log("admin bilgisi geldi");
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                <img src={image}/>
                    </div>
                    <div className="col-md-4">
                    <p>Username: {username}</p>
                    <p>Password: {password}</p>
                    <p>Point: {point}</p>
                    </div>
                    <div className="col-md-4">
                
                    </div>
                    </div>  
            </div>
        )
    }else{
        console.log("asdasd");
        window.location = "/"; 

        return (
            <div>
                Yetkisiz giriş yönlendiriliyorsunuz.
            </div>)
    }
    
    
    
        
    
}

export default dashboard