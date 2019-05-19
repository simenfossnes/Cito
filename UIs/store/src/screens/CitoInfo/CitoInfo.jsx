import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './CitoInfo.styles.css';
import CitoTemplate from '../../compoments/_/templates/CitoTemplate/CitoTemplate';

class CitoInfo extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('CitoInfo mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('CitoInfo getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('CitoInfo getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('CitoInfo did update');
  }

  componentWillUnmount = () => {
    console.log('CitoInfo will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CitoInfoWrapper">
        <CitoTemplate/>
      </div>
    );
  }
}

CitoInfo.propTypes = {
  // bla: PropTypes.string,
};

CitoInfo.defaultProps = {
  // bla: 'test',
};

export default CitoInfo;
