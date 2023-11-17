import React, { useContext, useReducer, useState, useEffect } from "react";
import axios from 'axios';
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
        axios.get('http://localhost:4000/data').then((res)=>{
            dispatch({type:'mountStoreData', newStoreData: res.data})
        }).catch((error)=>{
            console.log('Server not reached. Please run `npm run serve-json` in another terminal then reload page', error)
        });

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