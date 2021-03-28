import React from 'react';
import './Categories.css'

const Categories = ({ cat, onCatClick, overAge }) => {
    // Sort the category array and filter out the  nsfw entry
    const displayCats =  cat.map((items, i) => {
    return ( overAge === true ?
        (<li
            onClick={onCatClick}
            style={{ cursor: "crosshair", padding: "10px" }}
            key={i}
            id={i}
            >
      {items}
    </li>)
    :
    items !== "explicit" ?
    ( <li
        onClick={onCatClick}
        style={{ cursor: "crosshair", padding: "10px" }}
        key={i}
        id={i}
        >
    {items}
  </li>)
  :
  ( <li
  onClick={onCatClick}
  style={{ cursor: "crosshair", padding: "10px", display: "none" }}
  key={i}
  id={i}
>
  {items}
</li>))});
    return (
        <div>
            <h3><ul style={{listStyle: "none", display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", padding: "0"}}>{ displayCats }</ul></h3>
        </div>
    );
}

export default Categories;