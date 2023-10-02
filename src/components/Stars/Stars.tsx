import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface Props {
    rating: number;
    size?: number;
}

export default function Stars({rating,size}: Props) {
    const fontSize: string = size !== undefined ? `${size}rem` : '';

    return (
        <span>
            { [...Array(5)].map((i, count) => {
                if (rating > count && rating < (count + 1)) { return <StarHalfIcon key={count} sx={{color:'#FF6006', fontSize:{fontSize}}} /> }
                else if (rating > count) { return <StarRateIcon key={count} sx={{color:'#FF6006', fontSize:{fontSize}}} /> }
                return <StarOutlineIcon key={count} sx={{color:'#FF6006', fontSize:{fontSize}}} />
            })}
        </span>
    );
}