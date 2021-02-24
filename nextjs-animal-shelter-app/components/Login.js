
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';
import Cookies from 'js-cookie';
import api from '../axiosStore'

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault()
    api.post('/auth/login', { email, password }).then((response) => {
      const { token } = response.data
      Cookies.set('jwt', token);
      Router.push('/');
    }).catch(({ response }) => {
      if (response?.status === 401) {
        alert('Invalid credentials')
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          onChange={e => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}