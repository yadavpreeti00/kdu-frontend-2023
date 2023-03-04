import Home from "./Home";
import Products from "./Products";
import React from "react";
import Footer from "./Footer";
export default function LandingPage():JSX.Element{

    return(
        <>
        <Home/>
        <Products/>
        <Footer/>
        </>
    );
}