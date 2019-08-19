import * as React from 'react';
import * as __ from 'lodash';
import Sticker from './Sticker';
import { Wrapper, StickersPlateWrapper } from './styles';

import TextIcon from '@assets/svg/ico-text.svg';
import StickerIcon from '@assets/svg/ico-sticker.svg';
import PictureIcon from '@assets/svg/ico-picture.svg';
import AttachIcon from '@assets/svg/ico-attach.svg';

const Controlls: React.FC<any> = () => {
  const [isShowStickerPlate, setShowStickerPlate] = React.useState<boolean>(false);
  const onMouseEnterHandler = () => {
    setShowStickerPlate(true);
  };

  const onMouseLeaveHandler = () => {
    setShowStickerPlate(true)
  };

  const renderStickersPlate = () => {
    const stickers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
      <StickersPlateWrapper
        isShow={isShowStickerPlate}
        onMouseLeave={__.debounce(onMouseLeaveHandler, 200)}
      >
        {stickers.map((item) => (
          <Sticker key={item} index={item.toString()} />
        ))}
      </StickersPlateWrapper>
    );
  };
  return (
    <Wrapper>
      {renderStickersPlate()}
      <TextIcon />
      <StickerIcon onMouseEnter={onMouseEnterHandler} />
      <PictureIcon />
      <AttachIcon />
    </Wrapper>
  );
};

export default Controlls;
