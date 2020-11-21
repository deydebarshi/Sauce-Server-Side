import React, {Component} from 'react'
import styles from './Shared.module.css'
import DayFilterButtton from './DayFilterButton'
import {KeyboardArrowRight} from '@styled-icons/material-rounded/KeyboardArrowRight'



class DayFilters extends Component{

    constructor(props){      
        super(props)
        this.state = {days:[{"id": 1,"day": "Mon"},{"id": 2,"day": "Tue"},{"id": 3,"day": "Wed"},{"id": 4,"day": "Thur"},{"id": 5,"day": "Fri"},{"id": 6,"day": "Sat"},{"id": 7,"day": "Sun"}]}
    }



    handleClick = async() => {
        this.props.updateState()
    }




    render(){
        return(
            <div className={styles.home_day_filters}>
                <p className={styles.filter_text}>Which day are you thinking? <KeyboardArrowRight size={25}/> </p>
                <div className={styles.filter_container}>
                    {
                        Object.entries(this.state.days).length > 0 ?
                        Object.entries(this.state.days).map(([key,val]) => (
                            <DayFilterButtton key={key} data={val} handleClick={this.handleClick} />
                        )) : (
                            <></>
                        )
                    }
                </div>  
            </div>
        )
    }



}
export default DayFilters