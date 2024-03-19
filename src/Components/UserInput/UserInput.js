import React, {useState} from "react";
import './UserInput.css';

const UserInput = (props) => {
    const [ enteredName, setEnteredName] = useState('');
    const [ enteredAge, setEnteredAge] = useState('');

    const nameChangedHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const ageChangedHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const submitFormHandler = (event) =>{
        event.preventDefault();

        const userData = {
            name : enteredName,
            age : enteredAge
        };

        props.onAddUser(userData);
        setEnteredName('');
        setEnteredAge('');
    }

    return(
        <form onSubmit={submitFormHandler}>
            <div className='card'>
               <div className='user-controls'>
                 <div className='user-control'>
                   <label id='text' >User Name</label>
                   <input type='text' id='text' value={enteredName} onChange={nameChangedHandler} />
                 </div>
                 <div className='user-control'>
                   <label id='text' >Age (Years)</label>
                   <input type='number' id='text' value={enteredAge} onChange={ageChangedHandler} />
                 </div>
               </div>
               <div className='user-button'>
                  <button type='submit'>Add Goal</button>
               </div>
            </div>
        </form>
    )
}

export default UserInput;