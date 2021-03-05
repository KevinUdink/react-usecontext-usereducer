// React is because we are creating a functional component called StateProvider

// createContext provides a way to pass things to any child component avoiding 
//    having to pass "props" through every child in the component tree

// useReducer - a very facy version of state that holds state along with the
//    many different actions that can be taken to update state

import React, {createContext, useReducer} from 'react';

// we will have our initial state as an empty object
const initialState = {
  textTheme: {
    color: 'red',
  },
  theme: 'btn-light-theme',
  isLoggedIn: false,
  firstName: "",
  lastName: "",
};

// the createContext method returns an object with a Provider and a Consumer component
//    const { Provider, Consumer } = newContext;
// "store" is a common naming convention due to the popularity of Redux
const store = createContext(initialState);

// deconstruct only the Provider component from our store object for now
const { Provider } = store;


const StateProvider = ( { children } ) => {
  // using reducer to consolidate all of the actions needed for our state object
  // useReducer accepts 2 parameters
  //    1 - callback function referred to as dispatch - this is a really fancy setter method
  //        it gives us the current value of state as the first parameter
  //        the action is an object with 2 parts:
  //            1 - type - a string used to determine what actions to take with state
  //            2 - payload - this can be anything we want so we can update state's values
  //    2 - the initial state value
  const [state, dispatch] = useReducer((state, action) => {
    // creating a temp variable called newState to be more explicit in this example
    //    this is NOT required! You can return the new value directly!
    let newState = state;

    console.log("inside of dispatch");
    console.log(`type: ${action.type}`);
    console.log('payload: ');
    console.log(action.payload);

    // switch is just a fancy way of doing if / else if / else if / ... / else  
    //    default option is the else block of code that catches anything that didn't 
    //    match anything above it

    // you MUST return a new value for state or else you break your state value!!
    switch(action.type) {
      case 'switch theme':
        const newTheme = action.payload === 'btn-light-theme' ? 
            'btn-dark-theme' 
            : 'btn-light-theme';
        
        newState = { ...state, theme: newTheme }
        return newState;

      case 'update':
        // returning the new state directly without using the temp variable
        return { ...state, [action.payload.name]: action.payload.value }

      default:
        // this will make NO changes to state, but this is bad practice
        //    throwing a new error will stop processing in its track and force you to
        //    debug things
        // return newState;
        throw new Error();
    };
  }, initialState);

  // The Provider component is what makes the state available to all child components, 
  //    no matter how deeply nested they are within the component hierarchy. 
  // The Provider component receives a value prop to set the initial values
  // the "children" referenced here are ALL child components included in tree from where 
  //    this component starts - in our case, the top - index.js
  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
};

// remember that:
//   store is an instantiated object that "transports" our values around
//   StateProvider is a component we can use as our starting point for all child components
//      that need to share this "global" state and its reducer (state setters)
export { store, StateProvider }