import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Catalog.styles.css';

class Catalog extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('Catalog mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('Catalog getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Catalog getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Catalog did update');
  }

  componentWillUnmount = () => {
    console.log('Catalog will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CatalogWrapper">
        Catalog
      </div>
    );
  }
}

Catalog.propTypes = {
  // bla: PropTypes.string,
};

Catalog.defaultProps = {
  // bla: 'test',
};

export default Catalog;
