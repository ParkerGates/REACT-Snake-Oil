import React from 'react';
import { Link } from 'react-router-dom';
import { useContextData } from '../../context/context';
import Stars from '../Stars/Stars';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './DisplayItemRow.css';

interface Props {
    item: any;
}

export default function DisplayItemRow({item}: Props) {
    const appData = useContextData(); 

    return (
        <div className="shp_row" key={item.name} >
            <img className="shp_row_img" src={item.image} alt={item.name} />
            <div className="shp_row_details_cont">
                <div className="shp_row_header">
                    <div className="shp_row_title">{item.name}</div>
                    <Stars rating={item.stars} />
                </div>
                <div className="shp_row_description">{item.description}</div>
                <div className="shp_row_footer">
                    <div className='shp_row_price'>${item.price}</div>
                    <div className="shp_row_btns">
                        <Link to={'/shop/'+ item.alias}><button>Details</button></Link>
                        <button style={{position:'relative'}}><span>Add to cart </span><AddShoppingCartIcon fontSize='small' sx={{fontSize:"17px",position:'absolute',right:'8px'}}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}