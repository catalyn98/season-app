import React from 'react';
import ReactDOM from 'react-dom';
import Season from './Season';
import Spinner from './Spinner';

if (module.hot) {
    module.hot.accept();
  }

class App extends React.Component{
state = {lat: null, errorMessage: ""};

componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat: position.coords.latitude}),
        (err) => this.setState({errorMessage: err.message})
    );
}

    renderContent(){
            if (this.state.errorMessage && !this.state.lat){
                return <div>Error: {this.state.errorMessage}</div>;
            }

            if (!this.state.errorMessage && this.state.lat){
                return <Season lat={this.state.lat}/>;
            }

            return <Spinner message="Te rog accepta sa ti cunosc locatia curenta"/>;
    }

    render(){
        return (
        <div classname= "border red"> {this.renderContent()} </div>
        );
    }
}

ReactDOM.render (<App/>, document.querySelector('#root'));