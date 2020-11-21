import React,{Component} from 'react'
import Head from 'next/head'
import styles from  './Mapview.module.css'
import {Map} from '@styled-icons/boxicons-solid/Map'
import {Slider} from '@styled-icons/boxicons-regular/Slider'
import MapViewcontent from './map2'
import DayFilters from '../shared/DayFilters'
import ModalView from '../modal/modal';
import { Spinner } from 'react-activity';
import {ArrowLeft} from '@styled-icons/heroicons-solid/ArrowLeft'
import LocationView from '../location/location'
import Router from 'next/router'
import Subscribe from '../subscribe/Subscribe'
import NoSSR from 'react-no-ssr'
import { Fab} from 'react-tiny-fab'

let UserIcon = require('../../public/images/add.png')

const Services = require('../../services/services')

class MapView extends Component{
    constructor(props){
        super(props)
        this.state={
            markers: [],
            isVisible: false,
            isLoader : false,
            resultCount : 0,
            currentlat: 0,
            currentlong: 0,
            isLocation : false,
            locationName : 'Current location',
            isSubscribe: false
        }
    }




    setCurrentLoc = async() =>{

        let latitude = localStorage.getItem('latitude');
    
        latitude = JSON.parse(latitude)
    
        let longitude = localStorage.getItem('longitude');
    
        longitude = JSON.parse(longitude)
        
        this.setState({currentlat: latitude, currentlong: longitude})
    
    }



    async componentDidMount(){

        this.showLoader()

        await this.setCurrentLoc()
   
        let List = await Services.GetEstablishmentMap(this.state.currentlat, this.state.currentlong)
  
        if(List != undefined){
           this.setState({markers : [...this.state.markers, ...List]})
           this.setState({resultCount: this.state.markers.length})
        }

        let current_location = localStorage.getItem('mylocation');
        if(current_location !== null)
        {
            current_location = JSON.parse(current_location)
            let location_name = current_location.split(',')
            this.setState({locationName : location_name[0]})
        }
  
        this.showLoader()
  
    }




    updateState = async() => {

        this.showLoader()
    
        let List = await Services.GetEstablishmentMap(this.state.currentlat, this.state.currentlong)
    
        if(List != undefined){
          this.setState({markers : List})
          this.setState({resultCount: this.state.markers.length})
        }
    
        this.showLoader()
    
    }



    onMapDrag = async(ref)=>{

        this.setState({currentlat : ref.getCenter().lat(), currentlong : ref.getCenter().lng()})
        
        let List = await Services.GetEstablishmentMap(ref.getCenter().lat(), ref.getCenter().lng())

        if(List != undefined){
           this.setState({markers : List})
           this.setState({resultCount: this.state.markers.length})
        }
        
        
    }


    showList = () =>{
        Router.push('/home')
    }




    updateFilter = async() =>{

        this.setState({isVisible : false})
    
        this.showLoader()
    
        let List = await Services.GetEstablishmentMap(this.state.currentlat, this.state.currentlong)
    
        if(List != undefined){
          this.setState({markers : List})
          this.setState({resultCount: this.state.markers.length})
        }
    
        this.showLoader()
    }



    onChangeLocation = async() =>{
        this.setState({isLocation : false})  
        window. location. reload(false)
    }



    closeModal = () =>{
        this.setState({isVisible : false})
        this.setState({isSubscribe : false})
    }


    showLoader = () =>{
        this.setState({isLoader: !this.state.isLoader})
    }
    

    closeLocation = () =>{
        this.setState({isLocation : false})
    }

    useMyLocation = () =>{
        window.location.reload(false)
    }


    render(){
        const {markers , currentlat, currentlong ,resultCount} = this.state

        return(
            <>
            <Head>
                <title>The sauce - Map View</title>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
            </Head>

            <div className={styles.page_container}>

                <div className={styles.header}>
                    <div className={styles.header_container}>
                        <ArrowLeft size={25} style={{marginLeft:5, cursor: 'pointer'}} onClick={() => {this.showList()}}/>
                        <Map size={20} style={{marginLeft:5, color:'#fff'}} />
                        <span style={{marginLeft:5, color:'#fff'}}>{this.state.locationName}</span>
                        <span className={styles.change_location} onClick = {() => {this.setState({ isLocation: true})}}>change</span>
                        <Slider size={30} className={styles.slider} onClick = {() => {this.setState({ isVisible: true})}}/>
                    </div>
                </div>

                <div className={styles.large_container}>
                    <div className={styles.large_left_container}>
                        <div className={styles.map_container}> 
                            <MapViewcontent markers={markers} resultCount={resultCount} centerMoved={this.onMapDrag} latitude={currentlat} longitude={currentlong}/>
                        </div>
                    </div>
                    <div className={styles.large_right_container}>
                        <div className={styles.fixed}>
                            <DayFilters updateState={this.updateState}/>
                        </div>
                    </div>
                </div>

            </div>

            {
                this.state.isLoader ? (
                    <div className={styles.custom_loader}>
        
                        <div style={{display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Spinner size="large"  color="#FFB6E4" /> 
                            <span style={{marginLeft:10}}>Retrieving results</span>
                        </div>  
        
                    </div>
                ) : <></>
            }

            <ModalView isVisible={this.state.isVisible} closeModal={this.closeModal} updateFilter={this.updateFilter}/>
            <LocationView  isLocation={this.state.isLocation} closeLocation={this.closeLocation} onChangeLocation = {this.onChangeLocation} useMyLocation={this.useMyLocation}/>
            <Subscribe isSubscribe={this.state.isSubscribe} closeModal={this.closeModal}/>
            
            <NoSSR>
                <Fab
                icon={<img src={UserIcon}/>}
                mainButtonStyles={{
                    background:'#FFB6E4'
                 }
                }
                onClick = {()=> this.setState({isSubscribe : true})}
                text="User Subscription"
                />
            </NoSSR>
            
            </>

        )
    }
}
export default MapView