import React from 'react';
import ReactDOM from 'react-dom';
import LoadingDisplay from './LoadingDisplay';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
    // console.log('My component was rendered to the screen');
  }

  componentDidUpdate() {
    // console.log('My component was just updated - it rerendered!');
  }

  renderContent() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>
    } 
    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <div><LoadingDisplay message="Please accept our location request!" /></div>
  }

  render() {
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}
ReactDOM.render( 
  <App />,
  document.querySelector('#root')
  );

