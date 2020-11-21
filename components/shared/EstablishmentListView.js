import React, {Component} from 'react'
import styles from './Shared.module.css'


const DemoImage = "https://pixabay.com/get/52e4dc4a4f50b10ff3d8992cc62c317f153dd6e54e5074417d2c7ad0954bc2_640.jpg"

class EstablishmentListView extends Component{

    constructor(props){
        super(props)
    
        
    }

   

   

    render(){

        return( 
           
            <div className={styles.establishment_image_container}>
                <div className={styles.establishment_image} style={{backgroundImage: `url(${this.props.data.image})`}}>
                        {
                            this.props.data.offers.length > 0 ?
                            this.props.data.offers.map((offer_val, key) => (
                                <Offers  key={key} value_key={key} name={offer_val.deal_name}/>
                            )) : (
                                <></>
                            )
                        }
                </div>
                <p className={styles.establishment_name}>{this.props.data.name}</p>
                <span style={{fontWeight:600, color:'#ddd'}}>{this.props.data.distance.value} {this.props.data.distance.unit}</span>
            </div>

        )
    }

   

}
export default EstablishmentListView


class Offers extends Component{
    render(){

        if(this.props.value_key == 0)
        {
            return(
                <span className={styles.offer_deal_1}>{this.props.name}</span>
            )
        }
        else if(this.props.value_key == 1)
        {
            return(
                <span className={styles.offer_deal_2}>{this.props.name}</span>
            )
        }
        else if(this.props.value_key == 2)
        {
            return(
                <span className={styles.offer_deal_3}>{this.props.name}</span>
            )
        }
        else{
            return null
        }
       
    }
}





