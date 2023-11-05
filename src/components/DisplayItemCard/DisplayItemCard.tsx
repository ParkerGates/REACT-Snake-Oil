import react from 'react';
import { Link } from 'react-router-dom';
import itemImg from '../../images/itemImageIndex';
import Colors from '../../svgs/colors.svg';
import './DisplayItemCard.css';


interface Props {
    imageName: string;
    itemName: string;
    price: string;
    sale?: string;
}

export default function DisplayItemCard({imageName, itemName, price, sale}: Props) {

    return (
        <Link to={'/shop/'+imageName} className='text_dec_none'>
            <div className="display_item_card">
                <div className='display_item_card_image_sec'>
                    <img className="display_item_card_colors" src={Colors} alt='colors' />
                    <img className="display_item_card_image" src={itemImg[imageName]} alt={itemName}/>
                    <h4 className="display_item_card_name">{itemName}</h4>
                </div>
                <div className={`display_item_card_price_cont ${sale ? 'item_price_red' : ''}`}>
                    { sale && <span className='display_item_card_sale'>${price}</span> }
                    <span className="display_item_card_price">${sale ? sale : price}</span>
                </div>
            </div>
        </Link>
    );
}