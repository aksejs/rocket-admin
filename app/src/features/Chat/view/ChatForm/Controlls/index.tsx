import * as React from 'react';
import * as __ from 'lodash';
import Sticker from './Sticker';
import { Wrapper, StickersPlateWrapper } from './styles';

import TextIcon from '@assets/svg/ico-text.svg';
import StickerIcon from '@assets/svg/ico-sticker.svg';
import PictureIcon from '@assets/svg/ico-picture.svg';
import AttachIcon from '@assets/svg/ico-attach.svg';

class Controlls extends React.Component<any, {isShowStickerPlate: boolean}> {
  constructor(props:any) {
      super(props);
      this.state = {
          isShowStickerPlate: false
      };
  }
  onMouseEnterHandler = () => {
      this.setState({ isShowStickerPlate: true })
  };

  onMouseLeaveHandler = () => {
    this.setState({ isShowStickerPlate: false })
  };
  
  renderStickersPlate = () => {
      const { isShowStickerPlate } = this.state;
      const stickers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12];
      return (
        <StickersPlateWrapper 
            isShow={isShowStickerPlate}
            onMouseLeave={__.debounce(this.onMouseLeaveHandler, 200)}
        >
            {stickers.map((item) => (
                <Sticker key={item} index={item.toString()} />
            ))}
        </StickersPlateWrapper>
      );
  }
  render() {
    return (
      <Wrapper>
        {this.renderStickersPlate()}
        <TextIcon />
        <StickerIcon 
            onMouseEnter={this.onMouseEnterHandler}
        />
        <PictureIcon />
        <AttachIcon />
      </Wrapper>
    );
  }
}

export default Controlls;
