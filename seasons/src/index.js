import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component{
    constructor(props){
        super(props);

        //THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //WE CALLED SETSTATE!!
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }

    render(){
        if(this.state.errorMessage && ! this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading</div>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));