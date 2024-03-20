import React from "react";
import './UserItem.css';

const UserItem = (props) => {
    return(
        <div className="user-item">
                <div>
                    {props.name}
                </div> &nbsp;
                <div>
                    ({props.age} years old)
                </div> &nbsp;
                <div>
                    {props.collegename}
                </div>
                
            </div>
    )
}
export default UserItem;
