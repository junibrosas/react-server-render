import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ loggedIn }) => (
  <ul>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/contact'>Contact</Link>
    </li>
    {loggedIn && (
      <li>
        <Link to='/secret'>Secret</Link>
      </li>
    )}
  </ul>
);

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(Header);
