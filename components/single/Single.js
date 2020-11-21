import React, {Component} from 'react'
import Head from 'next/head'
import styles from './Single.module.css'
import {ArrowLeft} from '@styled-icons/feather/ArrowLeft'
import StarRatings from 'react-star-ratings';
import { Spinner } from 'react-activity';
import Map from './map'

const Services = require('../../services/services')

const DemoImage = ""


class SinglePage extends Component{
    constructor(props){
        super(props)
        this.state = {single_details : []}
    }



    async componentDidMount(){
       
        let establishment_id = this.props.id

        if(establishment_id !== 0)
        {
            let establishment_details = await Services.GetSingleEstablishment(establishment_id)
            this.setState({single_details : establishment_details})
        }

    }



    render(){
        return(
            <>
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'/>
            </Head>
            {
            Object.entries(this.state.single_details).length > 0 ? (
                <>
                <Head>
                    <title>{this.state.single_details.name}</title>
                </Head>
                <div className={styles.main_container}>
                    <div className={styles.single_container}>
                        <div className={styles.establishment_image} style={{backgroundImage: `url(${this.state.single_details.image})`}}>
                            {/* <ArrowLeft size={25} className={styles.back} onClick={()=> history.back()}/> */}
                            <span className={styles.establishment_cuisin}>{this.state.single_details.cuisine}</span>
                            {/* <span className={styles.establishment_offers}>{this.state.single_details.offers[0].deal_name}</span> */}
                        </div>

                        <div className={styles.establishment_details}>
                            <h3 className={styles.establishment_title}>{this.state.single_details.name}</h3>
                            {/* {
                            this.state.single_details.rating.length > 0 ? (
                            <StarRatings
                                rating={parseInt(this.state.single_details.rating)}
                                starDimension="25px"
                                starSpacing="2px"
                                starRatedColor="#FFC83D"
                                numberOfStars={5}
                            />
                            ):<></>
                            } */}
                            <span className={styles.distance}>{this.state.single_details.distance.value} {this.state.single_details.distance.unit} away</span>

                            <p className={styles.establishment_desc}>
                            {this.state.single_details.description}
                            </p>

                            <div className={styles.establishment_deals}>
                                <h4 className={styles.deals_head}>Deals</h4>
                                {
                                    Object.entries(this.state.single_details.offers).length > 0 ?
                                    Object.entries(this.state.single_details.offers).map(([key,val]) => 
                                    (
                                        <div key={key} style={{marginBottom:10}}>
                                        <p className={styles.establishment_deals_title}>{val.deal_name}</p>
                                        <span className={styles.establishment_deals_text}>{val.deal_description}</span>
                                        </div>
                                    )) : (
                                        <></>
                                    )
                                }
                            </div>

                            <div className={styles.more_info}>
                                <h4 className={styles.more_info_head}>More Information</h4>
                                <a href={this.state.single_details.website} target="_blank" className={styles.more_info_site}>{this.state.single_details.website}</a>
                                <a href={`tel:${this.state.single_details.phone_number}`} className={styles.more_info_phone}>{this.state.single_details.phone_number}</a>
                            </div>

                        </div>

                        <div className={styles.establishment_map}>
                            <Map latitude={this.state.single_details.latitude} longitude={this.state.single_details.longitude}/>
                        </div>

                    </div>
                </div>
                </>
            ) : (
                <div className={styles.custom_loader}>
                    <div style={{display:'flex',flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Spinner size="large"  color="#FFB6E4" /> 
                        <span style={{marginLeft:10}}>Retrieving results</span>
                    </div>  
                </div>
            )
            }
            </>
        )
    }
}
export default SinglePage