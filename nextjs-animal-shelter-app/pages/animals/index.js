import React from 'react'
import Link from 'next/link'
import MyNavbar from '../../components/MyNavbar';

import { ListGroup, ListGroupItem, Form, Row, Col } from 'react-bootstrap';

import api from '../../axiosStore'

const Animals = () => {
  const [animals, setAnimals] = React.useState(null)

  const fetchAnimals = (limit) => {
    const query = limit ? `?limit=${limit}` : ''
    api.get(`/animals/${query}`).then((response) => {
			setAnimals(response.data)
		})
  }

  const renderAnimals = () => {
    return (
      <ListGroup>
        {animals.map((animal) => {
          return (
            <Link key={animal.id} href={`/animals/${animal.id}`} style={{cursor: 'pointer'}}>
              <ListGroupItem styles={{cursor: 'pointer'}}>{animal.id}. {animal.name}</ListGroupItem>
            </Link>
          )
        })}
      </ListGroup>
    )
  }

  React.useEffect(() => {
    fetchAnimals()
  }, [])

  return (
    <>
      <MyNavbar />

      <Row>
        <Col><h1>Our Residents</h1></Col>
        <Col lg="2">
          Limit
          <Form.Control as="select" size="lg" onChange={e => { fetchAnimals(e.target.value) }}>
            {[15, 25, 50, 100].map(limit => (
              <option key={limit}>{limit}</option>
            ))}
          </Form.Control>
        </Col>
      </Row>
      {!animals 
        ? <p>Loading...</p> 
        : renderAnimals()
      }
    </>
    )
}

export default Animals