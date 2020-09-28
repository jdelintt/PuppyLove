import React from "react";


const styles = {
  card: {
    margin: 20,
    background: "orange"
  },
  heading: {
    background: "orange",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  }
};

function Navbar() {
    return (
        <nav style={styles.card} className="navbar">
        <a style={styles.heading}href="/">Profile</a>
        <a style={styles.heading} href="/aboutus">About us</a>
        <a style={styles.heading}href="/doggyhelp">Doggy help</a>
      </nav>
    );

}

export default Navbar;

