import React, { Component } from 'react';
import SearchBar from "../containers/search_bar"
import WeatherList from "../containers/weather_list"

import '../style/weatherapp.css';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-sm-12'>
                <SearchBar />
            </div>
            <div className='col-sm-12'>
                <WeatherList />
            </div>
        </div>
      </div>
    );
  }
}
