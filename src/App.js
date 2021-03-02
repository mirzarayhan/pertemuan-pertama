import React, { Component } from 'react';
// import Header from './Header';
import Footer from './Component/Footer';
import List from './Component/List';class App extends Component {
  render() {
    return (
      <div>
        <h1>Component dari Class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='Aufa' />
      </div>
    );
  }
}export default App;