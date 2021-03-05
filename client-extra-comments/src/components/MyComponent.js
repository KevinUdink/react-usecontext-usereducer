// exampleComponent.js
import React, { useContext } from 'react';
import { store } from '../context/StateProvider.js';

const MyComponent = () => {
  const globalStateAndDispatch = useContext(store);
  const globalState = globalStateAndDispatch.state;
  const globalDispatch = globalStateAndDispatch.dispatch;

  console.log(globalState);
  console.log(globalDispatch);

  return (
    <div> 
      <h1>Using Global State and Dispatch</h1>
      <p style={globalState.textTheme}>
        This is using the global text theme
      </p>
      <button
        className={globalState.theme}
        onClick={(e) => {
          globalDispatch({
            type: 'switch theme',
            payload: e.target.className,
          })
        }}
        >Click to change button theme</button>
      
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={globalState.firstName}
            onChange={(e) => {
              globalDispatch({
                type: 'update',
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                }
              })
            }}
            />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={globalState.lastName}
            onChange={(e) => {
              globalDispatch({
                type: 'update',
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                }
              })
            }}
            />
        </div>
        <div>
          <label>Favorite Hobby:</label>
          <input
            type="text"
            name="favoriteHobby"
            value={globalState.favoriteHobby}
            onChange={(e) => {
              globalDispatch({
                type: 'update',
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                }
              })
            }}
            />
        </div>
      </form>
      <div>
        <p>First Name: {globalState.firstName}</p>
        <p>Last Name: {globalState.lastName}</p>
        <p>Favorite Hobby: {globalState.favoriteHobby}</p>
        <p>theme: {globalState.theme}</p>
      </div>
    </div>
  )
};

export default MyComponent;