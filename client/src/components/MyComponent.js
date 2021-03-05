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
      {globalState.firstName}
    </div>
  )
}

export default MyComponent;
