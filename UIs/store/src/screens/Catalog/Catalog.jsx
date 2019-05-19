import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Catalog.styles.css';
import dummyApps from '../../data/dummyApps';
import NavBar2 from '../../compoments/_/organisms/NavBar/NavBar';

import icon1 from '../../images/main-app-icon.png';

class AppBase extends PureComponent {

  render() {
    return <div style={{width: "100%", height: "100%"}} align="center" >
            <div className="module" style={{"background": `url(${this.props.img})`, "backgroundSize": "contain"}}>
              <header>
                <h1>
                  {this.props.name}
                </h1>
              </header>
            </div>
          </div>;
  }
}

class Grid1 extends PureComponent {

  render() {

    

    return <div className="grid_unequal">
            <div className="item_1 items_all">
              <Link to="/cito/1" ><AppBase name="Wanted" img={icon1}/></Link>
            </div>
            {dummyApps.map((app) => 
            <div className="items_all"><Link to={"/cito/" + app.id} ><AppBase name={app.name} img={app.img} /></Link></div>)}
          </div>;
  }
}

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
      <div>
      <NavBar2/>
        <div className="CatalogWrapper" style={{padding: "3vw", height:"100%", overflow: "scroll"}}>
          <Grid1 />
        </div>
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
