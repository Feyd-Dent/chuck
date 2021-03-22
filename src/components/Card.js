import React from 'react';

const Card = ({ number, cat, joke }) => {
    return (
        <div style={{display: "flex", border: "5px solid #E6E6FA", padding: "2rem", justifyContent: "center", margin: "5rem auto"}}>
            <img src={`http://pngimg.com/uploads/chuck_norris/small/chuck_norris_PNG${number}.png`} width="auto" height="200px" alt="Chuck"/>
            <div>
                <h3>{cat}</h3>
                <p style={{padding: "2rem", width: "55ch"}}>{joke}</p>
            </div>
        </div>
    );
}

export default Card;