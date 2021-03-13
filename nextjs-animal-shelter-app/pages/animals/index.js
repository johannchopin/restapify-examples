import React from 'react'
import Link from 'next/link'
import MyNavbar from '../../components/MyNavbar';

import { ListGroup, ListGroupItem, Form, Row, Col } from 'react-bootstrap';

import api from '../../axiosStore'

const Animals = () => {
  const [animals, setAnimals] = React.useState(null)

  const fetchAnimals = (limit) => {
    api.get(`/animals?limit=${limit}`).then((response) => {
			setAnimals(response.data)
		})
  }

  const renderAnimals = () => {
    return (
      <ListGroup className="px-3">
        {animals.map((animal) => {
          return (
            <Link key={animal.id} href={`/animals/${animal.id}`} style={{cursor: 'pointer'}}>
              <ListGroupItem action styles={{cursor: 'pointer'}}>{animal.id}. {animal.name}</ListGroupItem>
            </Link>
          )
        })}
      </ListGroup>
    )
  }

  React.useEffect(() => {
    fetchAnimals(15)
  }, [])

  return (
    <>
      <MyNavbar />

      <Row className='mb-3 p-3'>
        <Col><h1>Our Residents</h1></Col>
        <Col lg="2" style={{display: 'flex'}}>
          Limit
          <Form.Control 
            className="ml-2 align-items-center" 
            as="select" 
            size="sm" 
            style={{width: 'fit-content'}} 
            onChange={e => { fetchAnimals(e.target.value) }}
          >
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