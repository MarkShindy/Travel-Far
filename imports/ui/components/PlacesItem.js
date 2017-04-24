import React, {Component} from 'react';

export default class HomePage extends Component {

  render() {
    const {
      place,
    } = this.props;
    return (

      <div className="place-item">
        <h2>{place.title}</h2>
        <p>{place.description}</p>
        <h3>{place.price}</h3>
      </div>

    );
  }
}