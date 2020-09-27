import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ loggedIn }) => (
  <ul>
    <li className='link'>
      <Link to='/'>Home</Link>
    </li>
    <li className='link'>
      <Link to='/about'>About</Link>
    </li>
    <li className='link'>
      <Link to='/contact'>Contact</Link>
    </li>
    {loggedIn && (
      <li className='link'>
        <Link to='/secret'>Secret</Link>
      </li>
    )}
  </ul>
);

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(Header);
