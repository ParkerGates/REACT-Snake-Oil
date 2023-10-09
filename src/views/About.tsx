import React from 'react';
import './css/About.css';
import { useContextData } from '../context/context';

export default function About() {
    const appData = useContextData(); 

    return(
        <div className='about_body'>
            <h1>About</h1>
        </div>
    );
}