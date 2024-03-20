import React from "react";
import UserItem from "../UserItem/UserItem.js";
import './UserList.css';

const UserList = (props) =>{
    // if (!props.usersdata || props.usersdata.length === 0) {
    //     return <div>No users available</div>;
    // }
    return(
        <div className="list-card">
            <ul>
                {props.usersdata.map(newuser => (
                    <UserItem
                        key = {newuser.id}
                        id = {newuser.id}
                        name = {newuser.name}
                        age = {newuser.age}
                        collegename = {newuser.collegename}
                    />
                ))}
            </ul>
        </div>
    )
}

export default UserList;