import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Colours from "./Colours";
import ColoursList from "./ColoursList";
import AddColour from "./AddColour";

function Routes(){
    
    const seedColours = JSON.parse(localStorage.getItem("colours")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };

    const [colours, setColours] = useState(seedColours);

    useEffect(
      () => localStorage.setItem("colours", JSON.stringify(colours)),
      [colours]
    );

    function handleAdd(newObject) {
        setColours(existingColours => ({ ...existingColours, ...newObject }));
    };

    function showCurrColour(props){
        const { colour } = props.match.params;
        const hex  = colours[colour];
        return <Colours {...props} hex={hex} colour={colour}/>;
    };

    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/colours">
              <ColoursList colours={colours} />
            </Route>
            <Route exact path="/colours/new">
              <AddColour newColour={handleAdd} />
            </Route>
            <Route path="/colours/:colour" render={showCurrColour} />
            <Redirect to="/colours" />
          </Switch>
        </BrowserRouter>
      );
}

export default Routes;