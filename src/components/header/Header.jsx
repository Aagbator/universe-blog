import React from 'react';
import { HeaderWrapper } from './Header.styles';
import { string } from 'prop-types';

const Header = ({title}) => (
  <HeaderWrapper>
      {title}
  </HeaderWrapper>
);

Header.propTypes = {
  title: string,
};

Header.defaultProps = {
    title: 'Header',
};

export default Header;