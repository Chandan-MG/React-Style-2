
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';
import React, {useState} from 'react';

const DUMMY_DATA =[
  // { name: 'Do all exercises', age: '20', id:'g1'},
  // { name: 'Complete the course', age: '20', id:'g2'}
]

function App() {

  const [usersdata, setUsersData] = useState(DUMMY_DATA);

  const setUserInputHandler = (user) => {
    if (user.name.trim() !== '' && user.age.trim() !== '' && user.collegename.trim() !=='') {
      const newUser = {
        id: Math.random().toString(),
        name: user.name.trim(),
        age: user.age.trim(),
        collegename: user.collegename.trim()
      };
      setUsersData(prevUserData => [...prevUserData, newUser]);
    }
  };

  return (
    <React.Fragment>
      <div className='app'>
        <div>
          <UserInput onAddUser={setUserInputHandler} />
        </div>
        <div>
          <UserList usersdata = {usersdata} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
