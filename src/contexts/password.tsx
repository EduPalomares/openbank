import { createContext, useContext, useReducer } from 'react';
import { FormType } from 'models/Form';

interface PasswordState {
  step: number;
  consent: boolean;
  password?: FormType;
}

const initialState: PasswordState = {
  step: 1,
  consent: false,
  password: {
    password1: '',
    password2: '',
    clue: ''
  }
};

const Context = createContext<PasswordState>(initialState);

type Action =
  | { type: 'set_consent'; payload: boolean }
  | { type: 'set_step'; payload: number }
  | { type: 'set_password'; payload: object }
  | { type: 'reset'; payload: object };

const reducer = (state: PasswordState, action: Action) => {
  switch (action.type) {
    case 'set_step':
      return { ...state, step: action.payload };
    case 'set_consent':
      return { ...state, consent: action.payload };
    case 'set_password':
      return { ...state, password: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unexpected action');
  }
};

export const usePassword = () => {
  const contextValue = useContext(Context);
  return contextValue;
};

export const PasswordProvider = ({ children }: { children: React.ReactElement }) => {
  // @ts-ignore
  const contextValue = useReducer(reducer, initialState);
  // @ts-ignore
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
