import React, { useContext } from 'react';
import { store } from '../context/StateProvider';

const MyComponent = () => {
  const globalStateAndDispatch = useContext(store);

  const globalState = globalStateAndDispatch.state;
  const globalDispatch = globalStateAndDispatch.dispatch;

  console.log(globalState);
  console.log(globalDispatch);


  return (
    <div>
      <h1>Using Global Context</h1>
      <p style={ globalState.textStyle }>
        {globalState.firstName}
      </p>
      <button 
        className={ globalState.theme }
        onClick={ (e) => globalDispatch({
            type: "change theme",
            payload: e.target.className,
          }) 
        }
        >Click to change theme</button>
      
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={globalState.firstName}
          onChange={(e) => globalDispatch({
            type: "update",
            payload: {
              name: e.target.name,
              value: e.target.value
            }
          })}
          />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={globalState.lastName}
          onChange={(e) => globalDispatch({
            type: "update",
            payload: {
              name: e.target.name,
              value: e.target.value
            }
          })}
          />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={globalState.email}
          onChange={(e) => globalDispatch({
            type: "update",
            payload: {
              name: e.target.name,
              value: e.target.value
            }
          })}
          />
      </div>
      <div>
        <label>Favorite Hobby:</label>
        <input
          type="text"
          name="favoriteHobby"
          value={globalState.favoriteHobby}
          onChange={(e) => globalDispatch({
            type: "update",
            payload: {
              name: e.target.name,
              value: e.target.value
            }
          })}
          />
      </div>

    </div>
  )
}

export default MyComponent;
