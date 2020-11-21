import React,{Component} from 'react' 
import styles from  './Home.module.css'
import Head from 'next/head'
import Link from 'next/link'
import {Map} from '@styled-icons/boxicons-solid/Map'
import {Slider} from '@styled-icons/boxicons-regular/Slider'
import {MapMarkedAlt} from '@styled-icons/fa-solid/MapMarkedAlt'
import DayFilters from '../shared/DayFilters'
import TypeFilters from '../shared/TypeFilters'
import EstablishmentListView from '../shared/EstablishmentListView'
import { Spinner } from 'react-activity';
import Router from 'next/router'
import ModalView from '../modal/modal';
import LocationView from '../location/location'
import SingleModal from '../singlemodal/Single'
import Subscribe from '../subscribe/Subscribe'
import { useBeforeunload } from 'react-beforeunload';
import NoSSR from 'react-no-ssr'
import { Fab} from 'react-tiny-fab';

const Services = require('../../services/services')
let UserIcon = require('../../public/images/add.png')


class Home extends Component{

    constructor(props){

        super(props);
 
        this.state={
            selected: false, 
            establishments : this.props.establishments.results,
            isVisible: false,
            isLocation : false,
            isSingleVisible: false,
            singleParam : 0,
            haveNextPage : this.props.establishments.next,
            isLoader : false,
            isScrollLoader : false,
            modalLoader : true,
            current_lat : 0,
            current_long: 0,
            resultCount: this.props.establishments.count,
            locationName : 'Current location',
            appIsMounted: false,
            isSubscribe  :false

        }

       
        this.showMap = this.showMap.bind(this);

        this.trackScrolling = this.trackScrolling.bind(this)

    
    }




    async componentDidMount(){
        
        //this.showLoader()
        //let home_list = await Services.GetEstablishment() 
        // if(this.props.establishments != undefined){
            
        //     this.setState({
        //         establishments: this.props.establishments.results, 
        //         haveNextPage: this.props.establishments.next, 
        //         resultCount: this.props.establishments.count
        //     }) 
            
        // }
        //this.showLoader()
       
        let current_location = localStorage.getItem('mylocation');
        if(current_location !== null)
        {
            current_location = JSON.parse(current_location)
            let location_name = current_location.split(',')
            this.setState({locationName : location_name[0]})
        }
    
        

        let latitude = localStorage.getItem('latitude');  
        latitude = JSON.parse(latitude)

        let longitude = localStorage.getItem('longitude');   
        longitude = JSON.parse(longitude)

        this.setState({current_lat : latitude, current_long : longitude})

        window.addEventListener('scroll', this.trackScrolling);
    
    }



    componentWillUnmount() {
       window.removeEventListener('scroll', this.trackScrolling);
    }



    updateState = async() => {
        window. location. reload(false)
    }




    updateFilter = async() =>{ 
        this.setState({isVisible : false})

        window. location. reload(false)
    }


    onChangeLocation = async() =>{
        this.setState({isLocation : false})    
      
        window. location. reload(false)
    }

      


    isBottom() {
        //return el.getBoundingClientRect().bottom <= document.documentElement.clientHeight;
        //return (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight
        //return (document.documentElement.clientHeight + window.scrollY) >= document.body.scrollHeight
        return (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 5
    }





    trackScrolling = () => {
        if (this.isBottom()) {
            if(this.state.haveNextPage != null){
                this.scrollMore(this.state.haveNextPage)
            }
        }
    }





    scrollMore = async(next) =>{

        this.setState({isScrollLoader : true})

        let  home_list = await Services.GetMoreEstablishment(next)

        if(home_list.results.length > 0 ){

            let temp_establishment = Object.assign({}, this.state.establishments);

            let establishment = Object.values(temp_establishment);

            let final_list = [...establishment, ...home_list.results]

            const keys = ['id']
            
            const filtered = final_list.filter(
                (s => o => 
                (k => !s.has(k) && s.add(k))
                    (keys.map(k => o[k]).join('|'))
                )
                (new Set)
            );

            this.setState({establishments: filtered})
            this.setState({haveNextPage: home_list.next})
            this.setState({isScrollLoader : false})        
        }

    }




    closeModal = () =>{
        this.setState({isVisible : false})
        this.setState({isSubscribe : false})
    }




    showLoader = () =>{
        this.setState({isLoader: !this.state.isLoader})
    }



    showMap(){
        Router.push({
            pathname: '/map'
        })
    }


    closeLocation = () =>{
        this.setState({isLocation : false})
    }



    useMyLocation = () =>{
        window.location.reload(false)
    }

    

    showSingleView = (id) =>{
        this.setState({singleParam : id, isSingleVisible: true})
    }



    closeSingleView = () =>{
        this.setState({isSingleVisible : false})
    }

    
    render(){

       
        
        return(
            <>
            <Head>
                <title>The sauce</title>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
            </Head>

            <div className={styles.home_container}>

           

                <div className={styles.header}>
                    <div className={styles.header_container}>
                        <Map size={20} style={{marginLeft:5, color:'#fff'}} />
                        <span style={{marginLeft:5, color:'#fff'}}>{this.state.locationName}</span>
                        <span className={styles.change_loaction} onClick = {() => {this.setState({ isLocation: true})}}>change</span>
                        <Slider size={30} className={styles.slider} onClick = {() => {this.setState({ isVisible: true})}}/>
                        <MapMarkedAlt size={30} className={styles.mapToggle} onClick={this.showMap}/>
                    </div>
                </div>

                <div className={styles.large_container}>
                    <div className={styles.large_left_container}>
                        <div className={styles.fixed}>
                        <DayFilters updateState={this.updateState}/>
                        <TypeFilters updateState={this.updateState}/>
                        </div>
                    </div>
                    
                    <div className={styles.large_right_container}>
                        <div className={styles.establishment_container} id="establishment_container">
                            <div className={styles.establishment_header_section}>
                                <span className={styles.establishment_header_text}>Open near you</span>
                                <span className={styles.establisment_count}>{this.state.resultCount} Results</span>
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



                            {
                                Object.entries(this.state.establishments).length > 0 ? 
                                Object.entries(this.state.establishments).map(([key,val]) => (
                                  
                                    <a key={key} className={styles.establishment_link} onClick={()=>this.showSingleView(val.id)}>
                                        <EstablishmentListView   data={val} />
                                    </a>
    
                                    )) : (
                                        <div style={{display:'flex', flexDirection: 'column', height: 250, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginTop:30}}>
                                            <span style={{color:'#EA8CC7'}}>There is no data available...</span>
                                        </div>
                                    )
                               
                            }  

                            {
                                Object.entries(this.state.establishments).length > 0 ?
                                    this.state.haveNextPage !=null ? (
                                        <div style={{display:'flex',flexDirection: 'row', height: 50, justifyContent: 'center', alignItems: 'center', marginTop:10, marginBottom:10}}>
                                            <Spinner size="large"  color="#FFB6E4" /> 
                                            <span style={{marginLeft:10}}>Retrieving results</span>
                                        </div> 
                                    ) : (
                                        <></>
                                    )
                                : <></>
                            }
                        </div>
                    </div>
                </div>

            </div>

            <ModalView isVisible={this.state.isVisible} closeModal={this.closeModal} updateFilter={this.updateFilter}/>
            <LocationView  isLocation={this.state.isLocation} closeLocation={this.closeLocation} onChangeLocation = {this.onChangeLocation} useMyLocation={this.useMyLocation}/>
            <SingleModal id={this.state.singleParam} isSingleVisible={this.state.isSingleVisible} closeSingleView={this.closeSingleView}/>
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
export default Home