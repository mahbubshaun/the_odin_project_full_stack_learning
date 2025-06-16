import React from 'react';
import './Section.css';

const Section = ({title, children, className=''})=> {
    return(

        <section className={`section ${className}`}>
          {title && <h2 className="section-title">{title}</h2>}
          <div className="section-content">
            {children}
          </div>

        </section>
    );
};

export default Section;