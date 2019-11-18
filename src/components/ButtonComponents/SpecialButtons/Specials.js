import React, {
    useState
} from "react";

// import components
import SpecialButton from "./SpecialButton";

// import array data from data.js file
import specials from "../../../data";


const Specials = () => {
    //  add the imported data to state
    const [specialState, setSpecialState] = useState(specials);

    return ( 
        <div>  {
            specialState.map((special, index) => {
                return <SpecialButton key = {
                    index
                }
                special = {
                    special
                }
                />
            })
        } 
        </div>
    );
};