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

    </div>
  )
}

export default MyComponent;
