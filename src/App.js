import React from "react";
import CharacterComponent from "./components/CharacterComponent";

function App() {
    return(
      <div>

          <CharacterComponent
          name = {'bart'}
          surname = {'sipmson'}
          age = {10}
          info = {'Барт ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі.'}
          photo = {'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
          />

          <CharacterComponent
          name = {'homer'}
          surname = {'sipmson'}
          age = {40}
          info = {'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний.'}
          photo = {'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
          />

          <CharacterComponent
          name = {'marge'}
          surname = {'sipmson'}
          age = {38}
          info = {'\'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер.'}
          photo = {'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
          />

          <CharacterComponent
          name = {'lisa'}
          surname = {'sipmson'}
          age = {9}
          info = {'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.'}
          photo = {'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
          />

          <CharacterComponent
          name = {'maggie'}
          surname = {'sipmson'}
          age = {1}
          info = {'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года.'}
          photo = {'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
          />


      </div>
    );
}

export default App;



// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів


