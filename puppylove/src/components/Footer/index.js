import React from "react"


var style = {
    backgroundColor: "orange",
    borderTop: "1px solid #E7E7E7",
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
            <div style={phantom} />
            <div style={style}>
                { children }
            </div>
        </div>
    )
}
// const styles = {
//     footer: {
//     position: "fixed",
//    left: 0,
//    bottom: 0,
//    width: 100,
//    backgroundColor: "orange",
// }


// }


// function Footer() {
//     return (
//         <div style={styles.footer} class="footer">
  
// </div>
//     );
// }

export default Footer
