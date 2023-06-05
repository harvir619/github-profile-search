import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const initialState = {
        alert:null
    }
    
    const [state, dispatch] = useReducer(alertReducer, initialState)
    
    
}

export default AlertContext;
