import React, {useState} from "react"; 
import { Image, Modal,  Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw,faDog } from '@fortawesome/free-solid-svg-icons';
// import Modal from "../../components/Modal";

const styles = {
  card: {
    height: 50,

   },
   header: {
    background: "orange",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
     
   },
   image: {
    padding:"20px",
    marginRight:"300px"
   },
   image2: {
     padding:"20px",
     marginLeft:"210px"
   },
   
}

const cardText = {
  // "My Recent Pups": "Dogs I recently interacted with.",
  // "Dogs In My Area": "Find pups that are close to me."
}

function Card({header, setLoading, link1, link2, isFirstCard}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const delay = (v) => {
    return new Promise((resolve) => {
        setTimeout(resolve.bind(null, v), 5000)
    })
  }

// Set load state to true
// make API call
// When API resolves (Success or Failure)
// Set load state to false
const mockAPI = (e) => {
    e.preventDefault();
    setLoading(true)
    delay().then(() => {
        //throw new Error('Error')
        setLoading(false)
    }).catch((error) => {
        setLoading(false);
        console.error(error)
    })
}
  return (
    
    <div className="card text-center">
    <button onClick={mockAPI}>Mock API Call</button>
    <div style={styles.header}className="card-header">
{header}
    <FontAwesomeIcon icon={faDog}></FontAwesomeIcon>
    </div>
    <div className="card-body" >
      
      <Image style={!isFirstCard ? styles.image2 : styles.image} src={link1} width="200px" height="200px" roundedCircle />
      <Button variant="outline-primary" onClick={handleShow}>
        Comment
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <br></br>
      <Image style={!isFirstCard ? styles.image2 : styles.image} src={link2} width="200px" height="200px" roundedCircle />
      {/* <h5 style={styles.card}className="card-title">{cardText[header]}</h5> */}

      <Button variant="outline-primary" onClick={handleShow}>
        Comment
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <br></br>
      <br></br>


      <a href="/#" className="btn btn-primary">See more pups</a>
    </div>
    
    <div className="card-footer text-muted">
    <FontAwesomeIcon icon={faPaw} />
    </div>
  </div>
  )
}

export default Card;