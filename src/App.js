import React, {Component} from 'react'

import Display from './Display'
import  Maps  from './Maps';

class App extends Component{
  state = {
    earthquakes: []
  }

getEarthquakes = async () => {
  try {
    const earthquakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson')

    const earthquakesJson = await earthquakes.json();
    this.setState({earthquakes: earthquakesJson.features})

  } catch (err){
    console.log(err)
  }
}

componentDidMount(){
  this.getEarthquakes()
}

  render() {
    return (
      <div >
        <Display earthquakes={this.state.earthquakes}/>
        <div className="Maps">
          <Maps earthquakes={this.state.earthquakes} />
        </div>
      </div>
    );
  }
}



export default App;
