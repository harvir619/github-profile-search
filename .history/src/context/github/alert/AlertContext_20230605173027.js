import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const initialState = {
        alert:null
    }
    
    const [state, dispatch] = useReducer(alertReducer, initialState)
    
    return <AlertContext.Provider value={{ alert: state.alert }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext;
