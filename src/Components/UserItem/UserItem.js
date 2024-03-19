import React from "react";
import './UserItem.css';
import Card from "../Card/Card";

const UserItem = (props) => {
    return(
        <div className="user-item">
                <div>
                    {props.name}
                </div> &nbsp;
                <div>
                    ({props.age} years old)
                </div>
            </div>
    )
}
export default UserItem;
