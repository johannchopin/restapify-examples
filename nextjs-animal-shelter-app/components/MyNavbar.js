import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import UserContext from '../lib/userContext';
import Router from 'next/router';

import Cookies from 'js-cookie';

function MyNavbar() {
  const { user, setUser } = React.useContext(UserContext);

  const onLogout = () => {
    Cookies.remove('jwt');
    setUser(null);
    Router.push('/');
  }

  const renderUserNav = (isLogged) => {
    if (isLogged) {
      return <Nav>
        <Navbar.Text className='pr-3'>
          Signed in as: {user.username}
        </Navbar.Text>
        <Link href="/dashboard" passHref>
          <Nav.Link className='pr-3'>Dashboard</Nav.Link>
        </Link>
        <Nav.Link onClick={onLogout}>Logout</Nav.Link>
      </Nav>
    }

    return <Nav>
      <Link href="/login" passHref>
        <Nav.Link>Login</Nav.Link>
      </Link>
    </Nav>
  }

  return <Navbar>
    <Link href="/" passHref>
      <Navbar.Brand>🐕 The Animal Shelter</Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      {renderUserNav(user !== null)}
    </Navbar.Collapse>
  </Navbar>;
}

export default MyNavbar;