import React from 'react';

function CharacterComponent(props) {
    const {name, surname, age, info, photo} = props;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{surname}</h2>
            <h3>{age}</h3>
            <p>{info}</p>
            <img src={photo} alt={''}/>

        </div>
    );
}

export default CharacterComponent;
