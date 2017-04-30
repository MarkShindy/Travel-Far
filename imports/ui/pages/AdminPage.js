import React, {
  Component
} from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper';
import { createContainer } from 'meteor/react-meteor-data';
import { Locations } from '../../api/locations.js';
import _ from 'lodash';

class AdminPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: 'list',
      locationId: null,
    }
  }
  editLocation(locationId) {
    this.setState({
      view: 'edit',
      locationId:locationId,
    })
  }
  render() {
    const {view, locationId} = this.state;
    const {userId, locations} = this.props;
    let display = null;

    if (userId === null) {
      return (
        <div id="page" className="row">
          <h1 className="textCenter">Please login to see admin page.</h1>
        </div>
      )
    }
    if (view === 'edit') {
      let location = {};
      if (locationId !== null) {
        location = _.find(locations, {_id: locationId})
      }
      display = (
        <form id="fork">

          <label htmlFor="element_1_1">Key</label>
          <div>
            <input name="element_1_1" id="element_1_1" type="text" value={location.title}/>
          </div>

          <br/>

          <label htmlFor="element_1_2">Title</label>
          <div>
            <input name="element_1_2" id="element_1_2" type="text" value=""/>
          </div>

          <br/>

          <label htmlFor="element_1_3">Description</label>
          <div>
            <textarea name="element_1_3" id="element_1_3" cols="30" rows="10">{location.description}</textarea>
          </div>

          <br/>

          <label htmlFor="element_1_4">Price</label>
          <div>
            <input name="element_1_4" id="element_1_4" type="text" value=""/>
          </div>

          <br/>

          <button onClick={() => {
            this.setState({
              view: 'list'
            })
          }}>Cancel</button>
          <button>Update</button>

        </form>
      )
    } else if (view === 'list') {
      display = (
        <div>
          <div className="dataActions">
            <button onClick={() => {
              this.setState({
                view: 'edit'
              })
            }}>Add new location!</button>
          </div>
          <table className="adminLoc">
            <thead>
              <tr>
                <th>Key</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Created On</th>
                <th>Updated On</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((place) => {
                return (
                  <tr key={place.key}>
                    <td>{place.key}</td>
                    <td>{place.title}</td>
                    <td className="diff">
                      <div>{place.description}</div>
                    </td>
                    <td>{place.price}</td>
                    <td>{place.createdAt}</td>
                    <td>{place.updatedAt}</td>
                    <td className="actions">
                    <button onClick={() => {
                      this.setState({
                        view: 'edit',
                        locationId: place._id,
                      })
                    }}>Edit</button>
                      <a href="#delete">delete</a>
                    </td>
                  </tr>

                );
              })}
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div id="page" className="row">
        {display}
      </div>

    );
  }
}

AdminPage.propTypes = {
  userId: React.PropTypes.string,
  locations: React.PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    userId: Meteor.userId(),
    locations: Locations.find({}).fetch(),
  };
}, AdminPage);
