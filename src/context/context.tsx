import React, { useContext, useReducer } from "react";
import { initialState, reducer } from './reducer';

interface Props {
    children: JSX.Element;
}

const ContextData = React.createContext<any>({});
export function useContextData() { return useContext(ContextData)}

export default function AppContext({children}: Props) {
    const [appData, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextData.Provider value={{appData, dispatch}}>
            {children}
        </ContextData.Provider>
    );
}