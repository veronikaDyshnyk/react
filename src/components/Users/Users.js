import React, {useEffect, useState} from 'react';
import User from "../User/User";
import UserDetails from "../userDetails/UserDetails";

export default function Users() {


    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value));

    }, []);

    let chooseUser = (user) =>{
        setUser(user);
        };


    return (
        <div>

            <h2>USERS</h2>

            {
                user && <UserDetails
                user={user}
                />
            }

            {users.map((user, index) =>
                <User
                    key ={index}
                    user={user}
                    chooseUser ={chooseUser}
                />)}
        </div>
    );
}


// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)
