import React from "react";
import PropTypes from "prop-types";
import styles from './NavBar.module.css';

const NavBar = props => (
  <div className="NavBarWrapper">
    <nav className={styles.navbar}>
        <div className={styles.background}/>
        <div className={styles.content}>
          <span>
            <strong>Cito</strong> Store
          </span> 
        </div>
    </nav>
  </div>
);

NavBar.propTypes = {
  // bla: PropTypes.string,
};

NavBar.defaultProps = {
  // bla: 'test',
};

export default NavBar;
