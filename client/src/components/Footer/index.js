import React from "react"


var style = {
    // backgroundColor: "orange",
    // borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    // position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            {/* <div style={phantom} /> */}
            <div className="navbar navbar-info bg-info mt-5 justify-content-center" style={style}>
                { children || <h3 className="mt-n2" style={{textAlign: "center"}}>Copyright 2020</h3> }
            </div>
        </div>
    )
}

export default Footer
