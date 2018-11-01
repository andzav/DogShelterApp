import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../Themes/MediaTemplate';

const HeaderDiv = styled.div`
  text-align: center;
  width: 100vw;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const HeaderImageWrapper = styled.div`
  display: inline-block;
  width: 40%;

  ${media.mobile`
    display: inline-block;
    width: 90%;
  `};

`;

const HeaderImage = styled.img`
  width: 90%;
  max-height: 400px;
  object-fit: contain;

  ${media.mobile`
    width: 100%;
    max-height: 400px;
  `}

`;

const TextOuter = styled.div`
  display: inline-block;
  width: 40%;
  height: 100%;

  ${media.mobile`
    display: inline-block;
    width: 90%;
  `}
`;

const TextDecorator = styled.p`
  text-align: left;
  font-size: 1.5rem;
`;

function Header(props) {
  return (
    <HeaderDiv>
      <h1>Dog Shelter</h1>
      <HeaderContent>
        <HeaderImageWrapper>
          <HeaderImage src={props.headImg} alt=""></HeaderImage>
        </HeaderImageWrapper>
        <TextOuter>
          <TextDecorator>
            {/* eslint-disable-next-line max-len */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
          </TextDecorator>
        </TextOuter>
      </HeaderContent>
    </HeaderDiv>
  );
}

Header.propTypes = {
  headImg: PropTypes.string,
};

export default Header;
