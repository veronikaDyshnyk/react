import React from 'react';

function UserDetails({user}) {
    return (
        <div>
            <h2>{user.id}</h2>
            <div>{user.name}</div>
            <div>{user.address.city}</div>
            <div>{user.address.street}</div>
            <div>{user.address.suite}</div>
            <div>{user.address.zipcode}</div>
            <div>{user.address.geo.lat}</div>
            <div>{user.address.geo.lng}</div>


        </div>
    );
}

export default UserDetails;
