import React, { createContext, useReducer, useContext } from "react";

//Prepare the DataLayer
export const StateContext = createContext();

//wrap the App  and provide Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the Data layer
export const useStateValue = () => useContext(StateContext);

// with the DataLayer every component can get access to the data in the DataLayer
// so whenever we push information in, we can basically pull information out wherever we are in the app
