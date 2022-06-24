import React from "react";
import CharacterComponent from "./components/CharacterComponent";

function App() {
    return (
        <div>

            <CharacterComponent
                id={1}
                name={'Rick Sanchez"'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            />
              <CharacterComponent
                id={2}
                name={'Morty Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
            />
              <CharacterComponent
                id={3}
                name={'Summer Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
            />
              <CharacterComponent
                id={4}
                name={'Beth Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
            />
              <CharacterComponent
                id={5}
                name={'Jerry Smith'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
            />
              <CharacterComponent
                id={6}
                name={'Abadango Cluster Princess'}
                status={'Alive'}
                species={'Alien'}
                gender={'Female'}
                image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
            />



        </div>
    );
}

export default App;


// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів


