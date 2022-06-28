import React from 'react';

export default function User(props) {
    let {user, chooseUser} = props;

    return (
        <div>
            {user.id}
            {user.name}

            <button onClick={() => {
                chooseUser (user)

            }}>details
            </button>

        </div>
    );
}


