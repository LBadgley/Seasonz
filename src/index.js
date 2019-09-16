import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
      err => this.setState({ errorMessage: err.message })
    );
    console.log('My component was rendered to the screen');
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!');
  }

  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>
    } 

    if(!this.state.errorMessage && this.state.lat) {
      return <div><div>Latitude: {this.state.lat}</div><div> Longitude: {this.state.long}</div></div>
    }

    return <div>Loading!</div>
  }
}
ReactDOM.render( 
  <App />,
  document.querySelector('#root')
  );

