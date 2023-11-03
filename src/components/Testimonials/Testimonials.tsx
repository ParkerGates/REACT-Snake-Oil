import react from "react";
import { useContextData } from "../../context/context";
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import './Testimonials.css';

interface Props {
    image: string;
    name: string;
    location: string;
    children: string;
}

export default function Testimonials({image, name, location, children}: Props) {
    const { screenW } = useContextData();

    return (
        <div className="testimonial_card">
            <div className="testimonial_card_person">
                <img src={image} alt={name} />
                <span className="testimonial_card_person_name">{name}</span>
                <span className="testimonial_card_person_location">{location}</span>
            </div>
            <div className="testimonial_card_quote">
                <span className="testimonial_quotation_top">
                    <FormatQuoteOutlinedIcon fontSize="large" sx={{color:"#E6E6E6", fontSize:`${550<screenW?'3.2':'2.2'}rem`}}/>
                </span>
                <div>{children}</div>
                <span className="testimonial_quotation_bottom">
                    <FormatQuoteOutlinedIcon fontSize="large" sx={{color:"#E6E6E6", fontSize:`${550<screenW?'3.2':'2.2'}rem`}}/>
                </span>
            </div>
        </div>
    );
}