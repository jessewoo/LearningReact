import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeatherList extends Component {

  renderWeather(cityData, index) {
    console.log(cityData);

    return(
      <tr key={index}>
        <td className="col-md-3">
          Jesse
        </td>
        <td className="col-md-3">
            Jesse
        </td>
        <td className="col-md-3">
            Jesse
        </td>
        <td className="col-md-3">
            Jesse
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-md-3">City</th>
            <th className="col-md-3">Temperature</th>
            <th className="col-md-3">Pressure</th>
            <th className="col-md-3">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>


      </table>
          {process.env.NODE_ENV}
          {process.env.REACT_APP_SECRET_CODE}
      </div>
    );
  }
}

function mapStateToProps( { weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList)
