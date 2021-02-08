import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  consent: false,
  password: ''
};

const Context = createContext<typeof initialState>(initialState);

type Action = { type: 'set_consent'; payload: boolean };

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'set_consent':
      return { ...state, consent: action.payload };
    default:
      throw new Error('Unexpected action');
  }
};

export const usePassword = () => {
  const contextValue = useContext(Context);
  return contextValue;
};

export const PasswordProvider = ({ children }: { children: React.ReactElement }) => {
  const contextValue: any = useReducer(reducer, initialState);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
