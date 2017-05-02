import React, {Component} from 'react';

export default class OrderPage extends Component {

  render() {
    return (

      <div>

        <form action="thanks.html" id="fork">

          <div className="lkj">
            <h2>Order Your trip today!</h2>
          </div>

          <label htmlFor="element_1">First Name
          </label>
          <div>
            <input name="element_1" type="text" maxLength="255" value=""/>
          </div>

          <br/>

          <label htmlFor="element_2">Last Name
          </label>
          <div>
            <input name="element_2" type="text" maxLength="255" value=""/>
          </div>

          <br/>

          <label htmlFor="element_5">Email
          </label>
          <div>
            <input name="element_5" type="text" maxLength="255" value=""/>
          </div>

          <br/>

          <label htmlFor="element_3">Date of Desired Departure</label>
          <div>
            <input name="element_3" maxLength="20" value="" type="text"/>
          </div>

          <br/>

          <label htmlFor="element_4">Date of Desired Return</label>
          <div>
            <input name="element_4" maxLength="20" value="" type="text"/>
          </div>

          <br/>

          <label htmlFor="element_7">Perferred Leaving Time
          </label>
          <div className="radiostf">
            <input name="element_7" type="radio" value="1"/>
            <label htmlFor="element_7_1">Morning</label>

            <input name="element_7" type="radio" value="2"/>
            <label htmlFor="element_7_2">Evening</label>

            <input name="element_7" type="radio" value="3" defaultChecked="checked"/>
            <label htmlFor="element_7_3">No Preferance</label>
          </div>

          <br/>

          <label htmlFor="element_6">Destination
          </label>
          <div>
            <select name="element_6">
              <option value="1">Greece</option>
              <option value="2">Italy</option>
              <option value="3">Norway</option>
              <option value="4">Australia</option>
              <option value="5">Norway</option>
              <option value="6">Monaco</option>
              <option value="7">Iceland</option>
              <option value="8">UAE</option>
            </select>
          </div>

          <br/>

          <label htmlFor="element_8">Ticket Option</label>
          <div className="radiostf">

            <input name="element_8_1" type="checkbox" value="1"/>
            <label htmlFor="element_8_1">Coach</label>

            <input name="element_8_2" type="checkbox" value="1"/>
            <label htmlFor="element_8_2">First Class</label>

            <input name="element_8_3" type="checkbox" value="1"/>
            <label htmlFor="element_8_3">Captain or Crew</label>

          </div>

          <br/>

          <input type="submit" name="submit" value="Submit"/>

        </form>

        <div id="hing">
          <h3>
            Dont waste any more time, Buy tickets today.
          </h3>
        </div>
      </div>

    );
  }
}
