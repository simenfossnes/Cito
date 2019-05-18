import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Cito.styles.css';

class Cito extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('Cito mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('Cito getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Cito getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Cito did update');
  }

  componentWillUnmount = () => {
    console.log('Cito will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CitoWrapper">
        Cito
      </div>
    );
  }
}

Cito.propTypes = {
  // bla: PropTypes.string,
};

Cito.defaultProps = {
  // bla: 'test',
};

export default Cito;
