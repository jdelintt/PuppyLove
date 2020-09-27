import React from "react";

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
    padding: "0 20px"   }
  
  
}

function Card2() {
  return (
    <div className="card text-center">
    <div style={styles.header}className="card-header">
      Dogs in my area
    </div>
    <div className="card-body" >
      
      <h5 style={styles.card}className="card-title">Dogs in my area</h5>
      <a href="/#" className="btn btn-primary">See more pups</a>
    </div>
    <div className="card-footer text-muted">
      2 days ago
    </div>
  </div>
  )
}

export default Card2;