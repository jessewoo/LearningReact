import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {

  // Function that is called during map
  renderWeather(cityData) {
    const name = cityData.city.name
    // Map over the list, pull off the temperature
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)

// Refactored out Chart component - pattern DRY, don't replicate
    return(
      <tr key={name}>
        <td className="col-md-3">
          {name}
        </td>
        <td className="col-md-3">
          <Chart data={temps} color="orange"/>
        </td>
        <td className="col-md-3">
          <Chart data={pressure} color="black"/>
        </td>
        <td className="col-md-3">
          <Chart data={humidity} color="red"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
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
    );
  }
}

// Specifically using state.weather because it's in the reducer key
// Because we are just using one aspect of state, then we will just specific key
// Hooked it up to our REDUX state along with the weather state there
// Now we have access to this.props.weather inside of WeatherList ******
function mapStateToProps( { weather }) {
  return { weather };
  // return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList)
