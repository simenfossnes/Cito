import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExpandableSection.module.css';

const ExpandableSection = (props) => (
  <section className={styles.expandableSection}>
    <h2 className={styles.heading}>
      {props.heading}
    </h2>
    <div className={styles.subSectionWrapper}>
      <div className={styles.subHeading}>
        {props.subHeading && props.subHeading}
      </div>            
      <div className={styles.contentWrapper}>
        {props.children}
      </div>
    </div>
  </section>
);

ExpandableSection.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

ExpandableSection.defaultProps = {
  heading: 'Description',
  subHeading: null,
};

export default ExpandableSection;
