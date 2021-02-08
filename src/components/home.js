import React from 'react'
import Slider from './slider';
import Products from "../pages/Products";
import Post from "./GetLocalPosts";
export const home = () => {
    // window.onload = cek;

    return (
        <div>
            <Post/>
            <Slider/>
            <Products/>
            
        </div>
    )
}

export default home;