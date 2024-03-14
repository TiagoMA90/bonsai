import React from 'react';

function Card(props) {
        return (
        <div className="card">
            <img className="image" src={props.image} alt="image"></img>
            <h2 className="title">{props.name}</h2>
            <hr />
            <div className="description">{props.description}</div>
            <hr />
        </div>
    );
}

export default Card;
