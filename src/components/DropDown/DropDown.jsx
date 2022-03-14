import React, { useState } from "react";
import './DropDown.css';




function DropDown() {
    
    const [state, setstate] = useState(false);
    const showDropDown = () => {
        setstate(true);


    }
    const hideDropDown = () => {
        setstate(false)
        
    }

        return (
            <div className="dropdown">
                <div className="dropdown-menu" onClick={showDropDown} onMouseLeave={hideDropDown}>
                    Organizar por...
                    {state ?( <ul className="listDD" onMouseEnter={showDropDown}>
                        <li>Orden alfabetico A-Z</li>
                        <li>Precio</li>
                        <li>Distancia</li>
                        <li>Ultimos publicados</li>

                    </ul>):
                    null}
                </div>

            </div>
            )
            
        
    }
export default DropDown;

