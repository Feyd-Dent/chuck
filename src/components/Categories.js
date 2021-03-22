import React from 'react';
import './Categories.css'

const Categories = ({ cat }) => {
    return (
        <div>
            <h3><ul style={{listStyle: "none", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", padding: "0"}}>{cat}</ul></h3>
        </div>
    );
}

export default Categories;