import React from "react";
import { Link } from "react-router-dom";

function Colour({hex, colour, history}){

    if(!hex){
        history.push("/colours");
    }

    return(
        <div style={{ backgroundColor: hex}}>
            <h1>This is {colour}</h1>
            <h1>Isn't it beautiful?</h1>
            <h1>
                <Link to="/">Go Back</Link>
            </h1>
        </div>
    );
}

export default Colour;