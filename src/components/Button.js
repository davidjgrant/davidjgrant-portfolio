import React from 'react';

function Button({color, setColor}) {

    return(
        <button
            // className={color}
            style={{backgroundColor: color}}
            onMouseOver={() => {setColor(color);}}>{color}</button>
        )
}
export default Button;