import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Logo from './logo';

const HeaderWrapper = styled.header`
  position: relative;
  margin: 0 auto;
  max-width: 85vw;
  display: inline;
  img {
    margin-bottom: 0;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Link
      to="/"
      style={{
        color: `black`,
        textDecoration: `none`,
        display: `inline-block`,
      }}
    >
      <Logo />
    </Link>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
