import React from "react";
import { Link } from "react-router-dom";

function ColoursList({colours}){
    const colourLinks = Object.keys(colours).map(colour => (
        <li key={colour}>
            <Link to={`/colours/${colour}`}>{colour}</Link>
        </li>
    ));

    return(
        <div>
            <header>
                <h1>Welcome to the colour factory.</h1>
                <h1><Link to="/colours/new">Add a colour</Link></h1>
            </header>
            <div>
                <p>Please select a colour.</p>
                <ul>{colourLinks}</ul>
            </div>
        </div>
    );
} 

export default ColoursList;