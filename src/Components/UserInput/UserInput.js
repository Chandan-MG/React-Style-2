import React, {useState} from "react";
import './UserInput.css';
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const UserInput = (props) => {
    const [ enteredName, setEnteredName] = useState('');
    const [ enteredAge, setEnteredAge] = useState('');

    const [ error, setError ] = useState("");

    const nameChangedHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const ageChangedHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const submitFormHandler = (event) =>{
        event.preventDefault();

        if(enteredName.trim().length === 0 && enteredAge.trim().length ===0 ){
            setError({
                title : 'Invalid input',
                message : 'Please enter valid age and name'
            })
            return;
        }

        if(+enteredAge < 1){
            setError({
                title : 'Invalid input',
                message : 'Please enter valid age (should > 0)'
            })
            return;
        }

        const userData = {
            name : enteredName,
            age : enteredAge
        };

        props.onAddUser(userData);
        setEnteredName('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return(
        <Wrapper>
            { error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <div className="input-card">
                <form onSubmit={submitFormHandler}>
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
                </form>
            </div>
        </Wrapper>
    )
}

export default UserInput;