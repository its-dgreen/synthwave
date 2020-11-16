import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './logo';

const Header = () => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        <Logo />
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
