import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Catalog.styles.css';

import icon1 from '../../images/main-app-icon.png';
import icon2 from '../../images/icons-02.png';
import icon3 from '../../images/icons-03.png';
import icon4 from '../../images/icons-04.png';
import icon5 from '../../images/icons-05.png';
import icon6 from '../../images/icons-06.png';
import icon7 from '../../images/icons-07.png';

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

    let apps = [{id: "2", name: "PowerBank", img: icon2}, {id: "3", name: "Help", img: icon3}, {id: "4", name: "RoboTaxi", img: icon4}, {id: "5", name: "StreetView", img: icon5}, {id: "6", name: "Computer", img: icon6}, {id: "7", name: "Delivery", img: icon7}];

    return <div className="grid_unequal">
            <div className="item_1 items_all">
              <Link to="/cito/1" ><AppBase name="Wanted" img={icon1}/></Link>
            </div>
            {apps.map((app) => 
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
      <div className="CatalogWrapper" style={{padding: "3vw", height:"100%", overflow: "scroll"}}>
        <Grid1 />
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
