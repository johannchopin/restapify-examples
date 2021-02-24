import { useRouter } from 'next/router'
import { Card, Col, Button } from 'react-bootstrap';

import api from '../../axiosStore'

import MyNavbar from '../../components/MyNavbar';

export default function Animal() {
  const router = useRouter()
  const { animalid } = router.query

  const [animal, setAnimal] = React.useState(null)

  const fetchAnimal = (id) => {
    api.get(`/animals/${id}`).then((response) => {
			setAnimal(response.data)
		})
  }

  const adopt = () => {
    api.put(`/animals/${animal.id}/adopt`).then((response) => {
      if (response.status === 204) {
        alert(`You have adopted ${animal.name}`)
      }
		}).catch(({ response }) => {
      if (response.status === 403) alert(`Not possible to adopt ${animal.name}`)
    })
  }

  const renderAnimal = () => {
    return (
      <>
        <MyNavbar />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={animal.avatar} />
          <Card.Body>
            <Card.Title>{animal.name}</Card.Title>
            <Card.Text>{animal.description}</Card.Text>
            <Button variant="primary" onClick={adopt}>Adopt me</Button>
          </Card.Body>
        </Card>
      </>
    )
  }

  React.useEffect(() => {
    if (animalid) fetchAnimal(animalid)
  }, [animalid])

  return (
    <Col>
      {!animal 
        ? <p>Loading...</p> 
        : renderAnimal()
      }
    </Col>
    )
}
