import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Landing() {
  return <Container className='pt-4'>
    <Col>
      <Row>
        <h1>🐝 Welcome to the Animal shelter</h1>
      </Row>
      <Row>
        <a href='/animals' className='btn btn-primary'>Visit our residents</a>
      </Row>
    </Col>
  </Container>
}

export default Landing;