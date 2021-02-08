import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './login';
import Register from './register';
import Logout from './logout';
import Dashboard from './dashboard';



// const click_login = () => {
//   <Popup trigger={click_login} position="center">
  
//   </Popup>
// }

// const click_signup = () => {
//   let signup = "signup checked";
//   console.log(signup);
// }
let logged;
let username = localStorage.getItem("username");
let point = localStorage.getItem("point");
let percent = localStorage.getItem("percent");
let image = localStorage.getItem("image"); 
const header = () => {
  if(username){
    logged=true;
   }else{
     logged=false;
   }   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand mb-3" href="/">
        <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" width="200px" />
      </a>
      
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        {/* <ul className="navbar-nav mr-auto container-fluid">
            
            
          <li className="nav-item col-8">
            <form className="form-inline my-2 my-lg-0 inbutton">
              <input className="form-control form-control-lg mr-sm-0 col-8 bg-light border-0 " style={{borderRadius: '5px 0px 0px 5px'}} type="search" placeholder="Search for Courses" aria-label="Search" />
              <button className="btn btn-light btn-lg  my-2 my-sm-0 ml-0 col-2" style={{borderRadius: '0px 5px 5px 0px'}} type="submit"><i className="fas fa-search text-danger " /></button>
            </form>
          </li>
        </ul> */}
        
        {logged &&  <button onClick={Logout} className="log-buton nav-link btn btn-outline-dark"> Logout</button>}
        {logged &&  <p className="saga" > <span> <img className="profilhead" src={image} /> </span> <span className="pointspan">{"Point: "}</span><span>{point + " | "}</span> <span className="percentspan">{" Complete: "}</span><span>{"%"+percent}</span> </p>}
        {logged &&  <button onClick={Dashboard} className="log-buton nav-link btn btn-outline-dark"> My Profile</button>}
          
        
        
        {logged==false &&   <Popup trigger={<button className="log-buton nav-link btn btn-outline-dark"> Log in</button>} position="right center">
          <Login/>
      </Popup>}
      {logged==false && <Popup trigger={<button className="log-buton nav-link btn btn-danger mx-2"> Sign Up</button>} position="right center">
          <Register/>
        </Popup>}
        {/* <a className="nav-link btn btn-outline-dark" onClick={click_login}>Login</a>
        <a className="nav-link btn btn-danger mx-2" onClick={click_signup}>Signup</a> */}
      </div>
    </nav>
    </div>
  )
}

// React.Dom.render(<header/>, document.getElementById('root'));
export default header


