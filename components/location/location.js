import React from 'react';
import Modal from 'react-modal';
import styles from './location.module.css'
import {Map} from '@styled-icons/boxicons-solid/Map'
import {Search} from '@styled-icons/boxicons-regular/Search'
import {Close} from '@styled-icons/evaicons-solid/Close'



const Services = require('../../services/services')
 
class ModalView extends React.Component {

  constructor(props){
    super(props)
    this.state={search_text : [], text_val : null}
  }




  onChangeText = async(e) =>{

     let search_res = await Services.autoCompleteAddress(e.target.value)

     let list = []


     if(search_res.predictions.length > 0){
         search_res.predictions.map((val, key) =>{
              list.push(val.description)
         })

         this.setState({search_text : list})
     }
     else{
         this.setState({search_text : []})
     }
  }




  onSaveLocation = async(item) =>{
    this.setState({search_text : [] , text_val : item})
  }




  
  changeLocation = async() =>{

    let res = await Services.geocodeFromAddress(this.state.text_val)

    if(res.results.length > 0){
       let lat = res.results[0].geometry.location.lat
       let long = res.results[0].geometry.location.lng

       localStorage.setItem('latitude', JSON.stringify(lat))
       localStorage.setItem('longitude', JSON.stringify(long))

       localStorage.setItem('mylocation', JSON.stringify(this.state.text_val))
       this.setState({text_val  : null})
       
    }else{
      alert('Location not found')
    }

    this.props.onChangeLocation()
  }


  useMyLocation = async() =>{
    let latitude = localStorage.getItem('currentlatitude');
    let longitude = localStorage.getItem('currentlongitude');

    localStorage.setItem('latitude',latitude);
    localStorage.setItem('longitude',longitude);
    localStorage.setItem('mylocation',JSON.stringify('Current location'))

    this.props.useMyLocation()
  }
  
  


  render() { 
    return (
        <>
        <Modal 
        isOpen = {this.props.isLocation}
        closeTimeoutMS={500}
        ariaHideApp={false}
        className={styles.modal_container}
        >

            <div className={styles.location_container}>
                <div className={styles.body}>
                    <Close size={30} className={styles.modal_close} onClick={() => this.props.closeLocation()}/>
                    <p className={styles.header_text}>Search location</p>

                    <div className={styles.current_location}>
                        <Map name="map-marker" size={20} color='#fff' />
                        <span className={styles.location_text} onClick={() => this.useMyLocation()}>Use my current location</span>
                    </div>

                    
                    <div className={styles.searchSection}>
                        <Search className={styles.searchIcon} size={22} color="#fff"/>
                        <input type="text"
                            className={styles.input}
                            placeholder="Search location"
                            onKeyUp={(e) => this.onChangeText(e)}
                            value={this.state.text_val}
                        />
                    </div>
                 
                    <ul className={styles.search_list}>
                      {
                        this.state.search_text.map(item => (
                          <li className={styles.search_list_item} onClick={() => this.onSaveLocation(item)}>{item}</li>
                        ))
                      }
                    </ul>


                    <div className={styles.changeAddress}>
                            <div className={styles.change_block}>
                                  <span style={{fontSize:18, fontWeight: 'bold', cursor: 'pointer'}} onClick={() => this.changeLocation()}>Change ></span>
                            </div>
                    </div>
                </div> 
            </div>   


            <div className={styles.location_footer} onClick = {() => {this.props.closeLocation()}}>
                
            </div>

        </Modal>
        </>
    )
  }
}
export default ModalView



 
