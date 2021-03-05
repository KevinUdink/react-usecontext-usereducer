import React, { createContext, useReducer } from 'react';

const initialState = {
  firstName: "Kevin",
  lastName: "Udink",
  email: "",
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

    // fancy if / else if / else if / ... / else statement
    switch (action.type) {
      case "change theme":
        let newTheme = "";

        action.payload === "btn-light-theme" ?
          newTheme = "btn-dark-theme"
          : newTheme = "btn-light-theme"

        return { ...state, theme: newTheme }
      
      case "update":
        return { ...state, [ action.payload.name ]: action.payload.value };

      case "whatever I want because this is a string":
        console.log("check out the whatevers!");
        return state;

      default:
        console.log("The action.type was not matched anywhere");
        return state;
    }

    // if(action.type === "change theme") {
    //   let newTheme = "";

    //   action.payload === "btn-light-theme" ?
    //     newTheme = "btn-dark-theme"
    //     : newTheme = "btn-light-theme"

    //   return { ...state, theme: newTheme }
    // } else if (action.type === "update" ) {
    //   return { ...state, [ action.payload.name ]: action.payload.value };
    // } else {
    //   console.log("The action.type was not matched anywhere");
    // }

  }, initialState)

  console.log("inside State Provider");

  return (
    <Provider value={ { state, dispatch } }>
      { children }
    </Provider>

  )
}

export default StateProvider;