import react from 'react';
import Colors from '../../svgs/colors.svg';
import './DisplayItemCard.css';


interface Props {
    imageName: string;
    itemName: string;
    price: string;
}

export default function DisplayItemCard({imageName, itemName, price}: Props) {
    const imageLocation = "../../images/itemImages/" + imageName + ".jpg"
    console.log(imageName);
    return (
        <div className="display_item_card">
            <div>
                <img className="display_item_card_colors" src={Colors} alt='colors' />
                <img className="display_item_card_image" src={imageName} alt={itemName}/>
                <h4 className="display_item_card_name">{itemName}</h4>
            </div>
            <h4 className="display_item_card_price">${price}</h4>
        </div>
    );
}