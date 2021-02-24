import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Router from 'next/router';

import UserContext from '../lib/userContext';

import MyNavbar from '../components/MyNavbar';

export default function Dashboard() {
  const { user } = React.useContext(UserContext)

  React.useEffect(() => {
    if(!user) {
      Router.push('/login');
    }
  }, [])

  return <>
    <MyNavbar />
    <Container>
      <Col>
        <Row>
          {user ? <p>Logged in as {user.username}</p> : '...'}
        </Row>
      </Col>
    </Container>
  </>
}
