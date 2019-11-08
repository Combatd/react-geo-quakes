import React from 'react';

import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
export class Maps extends React.Component {
    render(){
        return (
            <Map google={this.props.google} zoom=
            {2}
            style={{"width": "35rem", "height":"35rem"}}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          >
        {
           this.props.earthquakes.map(earthquake => {
            return (
                <Marker key={earthquake.id}position={{lat: earthquake.geometry.coordinates[1], lng: earthquake.geometry.coordinates[0]}}
                icon={{url:'../images/earthquake.png', scaledSize:{width:20, height:20}} } />
            )
        })
        }
        </Map>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'
})(Maps);

