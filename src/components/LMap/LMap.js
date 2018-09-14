import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapStyle, poiStyle } from './styleLMap.js';
import L from 'leaflet';


class LMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 40,
      lng: -3,
      zoom: 13,
    };
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    // const iconMarker = new L.Icon({
    //   iconUrl: require('../../images/poi.png'),
    //   iconSize: [50, 58],
    //   shadowSize: [44, 44],
    //   iconAnchor: [32, 32],
    //   shadowAnchor: [22, 22],
    //   popupAnchor: [-5, -35]
    // })
    return (
      <Map style={MapStyle} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} style={poiStyle}>
          <Popup>
            <span>Dirección<br />
              <span style={{ display: 'block', textAlign: 'center' }}><b>Precio</b> €</span>
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default LMap;
