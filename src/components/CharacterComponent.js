import React from 'react';

function CharacterComponent(props) {
    const {id,name,status,species,gender,image} = props;
    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <h3>{image}</h3>
            <img src={image} alt={name}/>

        </div>
    );
}

export default CharacterComponent;
