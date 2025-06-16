
import React from 'react';
import './Input.css'; // Assuming you have some styles for the input

const Input = ({label, id, name, type="text", value, onChange, ...props})=>{

   return(
     <div className="input-group">
        {label && <label htmlFor = {id || name} className="input-label"
        >{label} </label>}
        <input
            id={id || name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className="input-field"
            {...props}
        />

     </div>

   );

};

export default Input;