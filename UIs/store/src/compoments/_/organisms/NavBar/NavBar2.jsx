import React from "react";
import PropTypes from "prop-types";
import styles from './NavBar.module.css';
import {MdKeyboardArrowLeft} from 'react-icons/md';
import { Link } from "react-router-dom";

const NavBar2 = props => (
  <div className="NavBarWrapper">
    <nav className={styles.navbar}>
        <div className={styles.background}/>
        <div className={styles.content}>
        <Link to="/" style={{color: "black", verticalAlign: "middle"}}>
            <div style={{height:"40", verticalAlign: "middle"}}><MdKeyboardArrowLeft style={{width: "40", height: "40"}}/>
            <strong>Cito</strong> Store</div>
          </Link>
        </div>
    </nav>
  </div>
);

NavBar2.propTypes = {
  // bla: PropTypes.string,
};

NavBar2.defaultProps = {
  // bla: 'test',
};

export default NavBar2;
