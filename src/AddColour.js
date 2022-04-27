import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddColour({newColour}){

    const [form, setForm] = useState({name: "", hex:"#ffffff"});
    const history = useHistory();

    function handleChange(e){
        // persist is recommended for react to persist history props/values
        e.persist();
        setForm(x => ({ ...x, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e){
        e.preventDefault();
        newColour({ [form.name]: form.hex });
        history.push("/colours");
    }

    const {hex, name} = form;

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Colour name</label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Enter colour name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Colour code</label>
                    <input
                        name="hex"
                        id="hex"
                        placeholder="Enter colour name"
                        onChange={handleChange}
                        value={hex}
                        type="color"
                    />
                </div>
                <button type="Submit">Add New Colour</button>
            </form>
        </div>
    );
}

export default AddColour;