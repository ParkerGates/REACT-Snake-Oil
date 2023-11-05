import React, { useContext, useReducer, useState, useEffect } from "react";
import { initialState, reducer } from './reducer';

interface Props {
    children: JSX.Element;
}

const ContextData = React.createContext<any>({});
export function useContextData() { return useContext(ContextData)}

export default function AppContext({children}: Props) {
    const [appData, dispatch] = useReducer(reducer, initialState);
    const [screenW, setScreenW] = useState<number>(window.innerWidth);

    const updateScreenChange = () => { setScreenW(window.innerWidth) }

    useEffect(()=> {
        window.addEventListener('resize', updateScreenChange);
        return () => {
            window.removeEventListener('resize', updateScreenChange);
        }
    }, []);

    return (
        <ContextData.Provider value={{appData, dispatch, screenW}}>
            {children}
        </ContextData.Provider>
    );
}