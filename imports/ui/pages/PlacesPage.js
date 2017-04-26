import React, {
  Component
} from 'react';
import PlacesItem from '../components/PlacesItem';
import { createContainer } from 'meteor/react-meteor-data';
import { Locations } from '../../api/locations.js';

class PlacesPage extends Component {

render() {

    const {
      locations,
    } = this.props;

    return (

      <div id="page">
        <div className="lkj">
          <h1>Places We Go</h1>
        </div>
        <div className="flex-container" id="main">
          {locations.map(function(place) {
            return (
              <PlacesItem place={place} key={place.key}/>
            );
          })}

        </div>
        <div className="container3">
          <div>
            <form method="get" action="http://www.google.com">
              <input type="text" className="tftextinput" placeholder="What will it be?" maxLength="200" />
              <input type="submit" value="search" className="tfbutton" />
            </form>
          </div>
        </div>

        <div id="hing">
          <h3>Dont waste any more time, Buy tickets today.</h3>
        </div>
      </div>
    );
  }
}

PlacesPage.propTypes = {
  locations: React.PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    locations: Locations.find({}).fetch(),
  };
}, PlacesPage);
