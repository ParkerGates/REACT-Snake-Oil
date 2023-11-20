import React from 'react';
import Snake1 from '../images/snakes/snake1.png';
import Snake2 from '../images/snakes/snake2.png';
import Snake3 from '../images/snakes/snake3.png';
import Snake4 from '../images/snakes/snake4.png';
import Snake5 from '../images/snakes/snake5.png';
import Snake6 from '../images/snakes/snake6.png';
import Snake7 from '../images/designImages/greenSnake.png'
import Leaves1 from '../images/snakes/leaves1.png';
import Leaves2 from '../images/snakes/leaves2.png';
import './css/Snake.css'

export default function Snake() {

    return (
        <div className='snake_cont'>
            <div className='snake_text'>
                Snake
            </div>

            <img className='snake1' src={Snake1} alt='snake' />
            <img className='snake2' src={Snake2} alt='snake' />
            <img className='snake3' src={Snake3} alt='snake' />
            <img className='snake4' src={Snake4} alt='snake' />
            <img className='snake5' src={Snake5} alt='snake' />
            <img className='snake6' src={Snake6} alt='snake' />
            <img className='snake7' src={Snake7} alt='snake' />

            <img className='leaves1' src={Leaves1} alt='leaves' />
            <img className='leaves2' src={Leaves2} alt='leaves' />
        </div>
    );
}