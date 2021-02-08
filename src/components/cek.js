import React, { useState } from 'react';

import Axios from 'axios'

function cek() {
        

    Axios.post('http://localhost:3001/posts', {
        
    
    }).then((response) => {
       
        fs.writeFile('../api/umut.json', JSON.stringify(response), function (err) {
            if (err) throw err;
            console.log('Saved!');
})




        //     if(response.data.message == "0"){
                

        //     }else{

                


        //         // for(i=0 ; i < result.length ; i++){
        //         localStorage.setAll('id', response.data[0]);}
        //         // localStorage.setItem('name', response.data[i].name);
        //         // localStorage.setItem('image', response.data[i].image);
        //         // localStorage.setItem('video', response.data[i].video);
        //         // localStorage.setItem('sub1order', response.data[i].sub1order);
        //         // localStorage.setItem('sub1name', response.data[i].sub1name);
        //         // localStorage.setItem('description', response.data[i].description);
        //         // localStorage.setItem('point', response.data[i].point);
               
        //         // }
                
            
            
           

        

        // // if (response.data.message == "0") {
        // //     alert("Kullanıcı adı şifre hatalı");
        // // } else {
        // //     if (response.data[0].perm == 1) {
        // //         alert("Welcome VerusAdmin");
        // //         window.location = "/verusadmin" 
        // //     } else if (response.data[0].perm == 2) {
        // //         alert("Welcome NovoAdmin");
        // //     }
        // //     else {
        // //         alert("Welcome: " + response.data[0].username);
        // //     }

        // // }


    });
}

export default cek