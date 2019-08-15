import * as React from 'react';
import { StyledSticker } from './styles';


const Sticker:React.FC<{index: string}> = ({ index }) => {
    return (
        <StyledSticker src={`../../assets/img/stickers/pepe_frog${index}.png`} />
    )
}

export default Sticker;