import React, { createContext, useReducer } from 'react';

const initialState = {
  firstName: "Kevin",
}

// this instance holds 2 components
//    1 - Provider - component that is the parent to all needing access to the context
//    2 - Consumer - your components
export const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ( props ) => {
  const { children } = props;
  // state is what you are used to
  // dispatch is a fancy setter
  const [ state, dispatch ] = useReducer((state, action) => {
    console.log("inside of dispatch");
    console.log("type: " + action.type);
    console.log("payload: " + action.payload);

  }, initialState)

  console.log("inside State Provider");

  return (
    <Provider value={ { state, dispatch } }>
      { children }
    </Provider>

  )
}

export default StateProvider;