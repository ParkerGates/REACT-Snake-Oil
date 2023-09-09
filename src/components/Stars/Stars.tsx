import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface Props {
    rating: number;
}

export default function Stars({rating}: Props) {
    return (
        <span>
            { [...Array(5)].map((i, count) => {
                if (rating > count && rating < (count + 1)) { return <StarHalfIcon sx={{color:'#FF6006'}} /> }
                else if (rating > count) { return  <StarRateIcon sx={{color:'#FF6006'}} /> }
                return <StarOutlineIcon sx={{color:'#FF6006'}} />
            })}
        </span>
    );
}