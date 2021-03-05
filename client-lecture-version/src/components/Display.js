import React, { useContext } from 'react';
import { store } from '../context/StateProvider';

const Display = () => {
  const { state, dispatch }= useContext(store);

  return (
    <div>
      <h1>Displaying Global Context</h1>
      <div>
        <p>First Name: {state.firstName}</p>
        <p>Last Name: {state.lastName}</p>
        <p>Email: {state.email}</p>
        <p>Favorite Hobby: {state.favoriteHobby}</p>
      </div>

    </div>
  )
}

export default Display;
