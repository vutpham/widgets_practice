import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      temp: null
    };
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{
      let lon = position.coords.longitude;
      let lat = position.coords.latitude;
      let APPID = `&APPID=c9d002923ca54918d0f7bb419fa9c202`;

      // Creating a request using plain Javascript
      let request = new XMLHttpRequest();
      request.open('GET',
       `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${APPID}&units=imperial`,
       true);

       request.onload = (res)=>{
         let city = JSON.parse(request.response).name;
         let temp = JSON.parse(request.response).main.temp;
         this.setState({city: city, temp: temp});
       };
       request.send();
    });
  }

  render() {
    return(
      <div id="weather-widget">
        <h1 className="weather-name">Weather widget</h1>
        <div id="weather-info">
          <div id="temp">{this.state.temp}°F</div>
          <div id="city-name">{this.state.city}</div>
        </div>
      </div>
    );
  }
}

export default Weather;
