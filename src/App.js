import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components/';
import { fetchData } from './components/api';

import covidImg from './images/image.png';
import styles from './App.module.css';

class App extends Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountyChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={covidImg} alt='Covid-19' className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountyChange={this.handleCountyChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
