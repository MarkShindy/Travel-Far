import React, {Component} from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper';
import {createContainer} from 'meteor/react-meteor-data';
import {Locations} from '../../api/locations.js';
import _ from 'lodash';

class AdminPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      view: 'list',
      locationId: null,
      form: {
        key: '',
        title: '',
        description: '',
        price: ''
      }
    }
  }
  editLocation(locationId) {
    let location = {};
    if (locationId !== null) {
      location = _.find(this.props.locations, {_id: locationId})
    }
    console.log(location)
    this.setState({
      view: 'edit',
      locationId: locationId,
      form: {
        key: location.key || '',
        title: location.title || '',
        description: location.description || '',
        price: location.price || ''
      }
    })
  }

  changeValue(name, value) {
    const newForm = Object.assign({}, this.state.form);
    newForm[name] = value;
    this.setState({form: newForm})
  }
  saveLocation() {
    Locations.upsert(this.state.locationId, {
      $set: Object.assign({}, this.state.form, {
        updatedAt: (new Date).toISOString()
      }),
      $setOnInsert: {
        createdAt: (new Date).toISOString()
      }
    })
    this.setState({
      view: 'list',
      locationId: null,
      form: {
        key: '',
        title: '',
        description: '',
        price: ''
      }
    })
  }
  deleteLocation(location) {
    Locations.remove(location._id);
  }

  render() {
    const {view, locationId, form} = this.state;
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
      display = (
        <div id="fork">

          <label htmlFor="element_1_1">Key</label>
          <div>
            <input name="element_1_1" id="element_1_1" type="text" value={form.key} onChange={(event) => {
              this.changeValue('key', event.target.value)
            }}/>
          </div>

          <br/>

          <label htmlFor="element_1_2">Title</label>
          <div>
            <input name="element_1_2" id="element_1_2" type="text" value={form.title} onChange={(event) => {
              this.changeValue('title', event.target.value)
            }}/>
          </div>

          <br/>

          <label htmlFor="element_1_3">Description</label>
          <div>
            <textarea name="element_1_3" id="element_1_3" cols="30" rows="10" value={form.description} onChange={(event) => {
              this.changeValue('description', event.target.value)
            }}/>
          </div>

          <br/>

          <label htmlFor="element_1_4">Price</label>
          <div>
            <input name="element_1_4" id="element_1_4" type="text" value={form.price} onChange={(event) => {
              this.changeValue('price', event.target.value)
            }}/>
          </div>

          <br/>

          <button onClick={() => {
            this.setState({view: 'list'})
          }}>Cancel</button>
          <button onClick={() => {
            this.saveLocation();
          }}>Update</button>

        </div>
      )
    } else if (view === 'list') {
      display = (
        <div>
          <div className="dataActions">
            <button id="newbutton" onClick={() => {
              this.setState({
                view: 'edit',
                form: {
                  key: '',
                  title: '',
                  description: '',
                  price: ''
                },
                locationId: null
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
                      <button className="edit" onClick={() => {
                        this.editLocation(place._id);
                      }}>Edit</button>
                      <button onClick={() => {
                        this.deleteLocation(place);
                      }}>
                        Delete
                      </button>
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
  locations: React.PropTypes.array.isRequired
};

export default createContainer(() => {
  return {userId: Meteor.userId(), locations: Locations.find({}).fetch()};
}, AdminPage);
