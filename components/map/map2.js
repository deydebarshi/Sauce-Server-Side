import React, {useState} from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
import Link from 'next/link'
import styles from  './Mapview.module.css'
const MarkerIcon = require('./marker.png')
const MyLocation = require('./location.png')
const Maptoggle = require('./maptoggle.png');
import SingleModal from '../singlemodal/Single'
import Router from 'next/router'

function Map(props){

    const [selectedItem , setSelectedItem] = useState(null)
    const [refmap, setRefMap] = useState(null)
    const [singleParam , setsingleParam] = useState(0)
    const [isSingleVisible, setisSingleVisible] = useState(false)

    let latitude = localStorage.getItem('latitude');  
    latitude = JSON.parse(latitude)

    let longitude = localStorage.getItem('longitude');   
    longitude = JSON.parse(longitude)


    const showSingleView = (id) =>{
        setsingleParam(id)
        setisSingleVisible(true)
    }

    const closeSingleView = () =>{
        setisSingleVisible(false)
    }

    
    return(
        <>
        <GoogleMap
        ref={(map)=>{
            setRefMap(map)
        }}
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
    
        onDragEnd = {()=> props.data.centerMoved(refmap)}
        >
        <Marker
            position={{
                lat : latitude,
                lng : longitude
            }}
            icon={MyLocation}
        />
        {props.data.markers.map(item =>(
            <Marker
                key={item.id}
                position={{
                    lat : item.latitude,
                    lng : item.longitude
                }}
                onClick={() => {
                    setSelectedItem(item)
                }}
                icon={MarkerIcon}
            />
        ))}
        {selectedItem && (
                <InfoWindow
                position={{
                    lat : selectedItem.latitude,
                    lng : selectedItem.longitude
                }}
                onCloseClick={()=>{
                    setSelectedItem(null)
                }}
                style={{bottom:50}}
                >
                   
                    <a className={styles.establishment_link} onClick={()=> showSingleView(selectedItem.id)}>
                        <div className={styles.info_container}>
                            <div className={styles.establishment_image} style={{backgroundImage: `url(${selectedItem.image})`}}>
                            {
                                selectedItem.offers.length > 0 ?
                                selectedItem.offers.map((offer_val, key) => (
                                    <>
                                        <Offers  key={key} value_key={key} name={offer_val.deal_name}/>
                                    </>
                                )) : (
                                    <></>
                                )
                            }
                            </div>
                            <p className={styles.establishment_name}>{selectedItem.name}</p>
                            <span style={{fontWeight:600, color:'#ddd'}}>Less than 2 km</span>
                        </div>
                    </a>
                    
                </InfoWindow>
        )}

        </GoogleMap>

        <img 
        src={Maptoggle} 
        className={styles.floating} 
        onClick={() => {
            localStorage.removeItem('establishments')
            localStorage.removeItem('haveNextPage')
            localStorage.removeItem('resultCount')
            Router.push('/home')
        }}
        />

        <div className={styles.floating_result}>
            <span style={{color: '#777'}}>{props.data.resultCount} Results</span>
        </div>

        <SingleModal id={singleParam} isSingleVisible={isSingleVisible} closeSingleView={closeSingleView}/>
        </>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))


export default function APP(props){
    return(
        <WrappedMap
         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCf4y8NJ92lQZMTiAgsx2c5Upt0i52Ft88`}
         loadingElement={<div style={{height: '100%'}}/>}
         containerElement={<div style={{height: '100%'}}/>}
         mapElement={<div id="react-map" style={{height: '100%'}}/>}
         data={props}
        />
    )
}







const Offers = (props) =>{
    
    if(props.value_key == 0)
    {
        return(
            <span className={styles.offer_deal_1}>{props.name}</span>
        )
    }
    else if(props.value_key == 1)
    {
        return(
            <span className={styles.offer_deal_2}>{props.name}</span>
        )
    }
    else if(props.value_key == 2)
    {
        return(
            <span className={styles.offer_deal_3}>{props.name}</span>
        )
    }
    else{
        return null
    }
   
}




