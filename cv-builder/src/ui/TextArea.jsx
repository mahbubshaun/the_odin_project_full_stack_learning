
import React from 'react';
import './TextArea.css'; // Assuming you have some styles for the textarea

const TextArea = ({label, id, name, value, onChange,rows, cols, ...props})=>{

   return(
     <div className="input-group">
        {label && <label htmlFor = {id || name} className="input-label"
        >{label} 
        <textarea
            id={id || name}
            name={name}
            value={value}
            onChange={onChange}
            className="input-field"
            // rows={rows || 4}
            // cols={cols || 20}
            {...props}
        />
        </label>}

     </div>

   );

};

export default TextArea;