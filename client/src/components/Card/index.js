import React from "react";
// import { Image } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw,faDog } from '@fortawesome/free-solid-svg-icons'

const styles = {
  card: {
    height: 400,

   },
   header: {
    background: "orange",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
     
   }
}

const cardText = {
  "My Recent Pups": "Dogs I recently interacted with.",
  "Dogs In My Area": "Find pups that are close to me."
}

function Card({header, setLoading}) {
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
      
      <h5 style={styles.card}className="card-title">{cardText[header]}</h5>

      {/* <Image src="https://i.redd.it/nl6vkfxnebr21.jpg" width="100px" height="100px" roundedCircle /> */}

      <a href="/#" className="btn btn-primary">See more pups</a>
    </div>
    
    <div className="card-footer text-muted">
    <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
    </div>
  </div>
  )
}

export default Card;