import { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import airBnb from '../assets/imgs/1.png';

class _MyMap extends Component {
  state = {
    center: {
      lat: 32.109333,
      lng: 34.855499,
    },
    mapStyles: {
      width: '100%',
      height: '100%',
    },
    isInfoWindowOpen: true,
  };

  mapClicked = (mapProps, map, clickEvent) => {
    const center = { lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() };
    this.setState({ center });
  };

  onMarkerClick = () => {
    this.setState({ isInfoWindowOpen: true });
  };

  onInfoWindowClose = () => {
    this.setState({ isInfoWindowOpen: true });
  };

  render() {
    const { stay } = this.props;
    let newCenter = {
      lat: stay.loc.lat,
      lng: stay.loc.lng,
    };
    let center = newCenter;
    const google = window.google;

    return (
      <div style={{ position: 'relative', width: '100%', height: '40vh' }}>
        <Map google={this.props.google} zoom={14} initialCenter={center} center={center} onClick={this.mapClicked}>
          <Marker
            icon={{
              path: airBnb,
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 35),
              size: new google.maps.Size(500, 500),
            }}
            onClick={this.onMarkerClick}
            name={'Current location'}
            position={center}
          />
          <InfoWindow visible={this.isInfoWindowOpen} position={center} onClose={this.onInfoWindowClose}>
            <div>
              <h1>Hello</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export const MyMap = GoogleApiWrapper({
  apiKey: 'AIzaSyCzuZp75Yeu8Eh4TD1RtRYO3Cxs-R5wNwo',
})(_MyMap);
