import React, {Component} from 'react'
//import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
const MarkerIcon = require('./marker.png')
 
function Map(props){

  return(
      <>
      <GoogleMap
      defaultZoom={15}
      defaultCenter={{
          lat : props.data.latitude,
          lng : props.data.longitude
      }}
      options={{
          enableEventPropagation: true,
          mapTypeControl:false,
          fullscreenControl:false,
          zoomControl:false,
          streetViewControl:false
      }}
      >
      <Marker
          position={{
              lat : props.data.latitude,
              lng : props.data.longitude
          }}
          icon={MarkerIcon}
      />
      </GoogleMap>
      </>
  )
}

const WrappedMapsingle = withScriptjs(withGoogleMap(Map))
 
export default function APP(props){
  return(
      <WrappedMapsingle
       googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCf4y8NJ92lQZMTiAgsx2c5Upt0i52Ft88`}
       loadingElement={<div style={{height: '100%'}}/>}
       containerElement={<div style={{height: '100%'}}/>}
       mapElement={<div id="react-map" style={{height: '100%'}}/>}
       data={props}
      />
  )
}