import React, { createContext, useReducer } from 'react';

const initialState = {
  firstName: "Kevin",
  textStyle: {
    color: "blue",
  },
  theme: "btn-light-theme",
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

    if(action.type === "change theme") {
      let newTheme = "";

      action.payload === "btn-light-theme" ?
        newTheme = "btn-dark-theme"
        : newTheme = "btn-light-theme"

      return { ...state, theme: newTheme }
    }

  }, initialState)

  console.log("inside State Provider");

  return (
    <Provider value={ { state, dispatch } }>
      { children }
    </Provider>

  )
}

export default StateProvider;