import React, {Component} from 'react'
import styles from './Shared.module.css'
import {KeyboardArrowRight} from '@styled-icons/material-rounded/KeyboardArrowRight'


class OfferFilters extends Component{
    constructor(){
        super()
        this.state = {
            isCheckedDelivery: false,
            isCheckedPickup: false,
            isCheckedDeliveryPartner: false,
            isCheckedDineIn: false,
        }    
    }


    async componentDidMount() {
        let offer_filters = localStorage.getItem('offer_filter');
    
        if (offer_filters != null) {
          let offer_filters_arr = JSON.parse(offer_filters);
    
          let index1 = offer_filters_arr.indexOf('delivery');
          if (index1 > -1) {
            this.setState({isCheckedDelivery: !this.state.isCheckedDelivery});
          }
    
          let index2 = offer_filters_arr.indexOf('pickup');
          if (index2 > -1) {
            this.setState({isCheckedPickup: !this.state.isCheckedPickup});
          }
    
          let index3 = offer_filters_arr.indexOf('deliverypartner');
          if (index3 > -1) {
            this.setState({isCheckedDeliveryPartner: !this.state.isCheckedDeliveryPartner});
          }

          let index4 = offer_filters_arr.indexOf('dinein');
          if (index4 > -1) {
            this.setState({isCheckedDineIn: !this.state.isCheckedDineIn});
          }
    
        }
    
    }



    handleClick = async type => {
        if (type === 'delivery') {
          this.setState({
            isCheckedDelivery: !this.state.isCheckedDelivery,
          });
        }
    
        if (type === 'pickup') {
          this.setState({
            isCheckedPickup: !this.state.isCheckedPickup,
          });
        }
        if (type === 'deliverypartner') {
          this.setState({
            isCheckedDeliveryPartner: !this.state.isCheckedDeliveryPartner,
          });
        }
        if (type === 'dinein') {
          this.setState({
            isCheckedDineIn: !this.state.isCheckedDineIn,
          });
        }
    
    
        let offer_filter = localStorage.getItem('offer_filter');
        let offer_arr = [];
    
        if (offer_filter == null || offer_filter == '') {
          offer_arr.push(type);
          localStorage.setItem('offer_filter', JSON.stringify(offer_arr));
        } 
        else{
          offer_arr = JSON.parse(offer_filter);
          const index = offer_arr.indexOf(type);
    
          if (index > -1) {
            offer_arr.splice(index, 1);
          } else {
            offer_arr.push(type);
          }
    
          localStorage.setItem('offer_filter', JSON.stringify(offer_arr));
        }
    
        this.props.updateState();
    };
    




    render(){
        return(
                <div className={styles.home_type_filters}>

                    <p className={styles.filter_text}>Pick up or Delivery? <KeyboardArrowRight size={25}/> </p>

                    <div className={styles.filter_container}>
                        <button 
                            className={styles.offer_filter} 
                            style={{ backgroundColor: this.state.isCheckedDelivery ? '#FFDAF1' : '#ffffff'}}
                            onClick={()=> {this.handleClick('delivery'); }} >
                                Direct delivery
                        </button>

                        <button 
                            className={styles.offer_filter} 
                            style={{backgroundColor: this.state.isCheckedPickup ? '#FFDAF1' : '#ffffff'}}
                            onClick={()=> {this.handleClick('pickup'); }} >
                                Pick up
                        </button>

                        <button 
                            className={styles.offer_filter} 
                            style={{backgroundColor: this.state.isCheckedDeliveryPartner ? '#FFDAF1' : '#ffffff'}}
                            onClick={()=> {this.handleClick('deliverypartner'); }} >
                                Delivery partner
                        </button>

                        <button 
                            className={styles.offer_filter} 
                            style={{backgroundColor: this.state.isCheckedDineIn ? '#FFDAF1' : '#ffffff'}}
                            onClick={()=> {this.handleClick('dinein'); }} >
                                Dine in
                        </button>
                    </div>  
                </div>
        )
    }

}
export default OfferFilters