import React, { Component } from 'react';
import './App.css';
import Tittle from './components/Tittle';
import Form from './components/Form';
import Stats from './components/Stats'
import axios from 'axios';

const ApiKey = '636d7d2bd8c2ac6dceb567f4bbc3ec12';

class App extends Component {
  state = {
    temp: undefined,
    hum: undefined,
    city: undefined,
    country: undefined,
    desc: undefined,
    error: undefined
  }
  getWeather = (e) => {
    e.preventDefault()
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Wroclaw,pl&appid=${ApiKey}&units=metric`)
    .then(res => {
      // console.log(res.data)
      let data = res.data
      if (data) {
        this.setState({
          temp: data.main.temp,
          hum: data.main.humidity,
          city: data.name,
          country: data.sys.country,
          desc: data.weather[0].description,
          error: ""
        })
      } else {
        this.setState({
          temp: undefined,
          hum: undefined,
          city: undefined,
          country: undefined,
          desc: undefined,
          error: "Enter the values!"
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>
        <Tittle />
        <Form getWeather = {this.getWeather}/>
        <Stats 
          temp = {this.state.temp}
          hum = {this.state.hum}
          city = {this.state.city}
          country = {this.state.country}
          desc = {this.state.desc}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
