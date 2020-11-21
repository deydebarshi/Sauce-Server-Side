import React, {Component} from 'react'
import styles from './Shared.module.css'
import {KeyboardArrowRight} from '@styled-icons/material-rounded/KeyboardArrowRight'

class Search extends Component{

    componentDidMount(){
        localStorage.removeItem('search')
    }

    onChangeText = async(e) =>{
        localStorage.setItem('search',e.target.value)
    }
   

     render(){
            return(
                <div className={styles.home_type_filters}>

                    <p className={styles.filter_text}>Search Restaurants <KeyboardArrowRight size={25}/> </p>

                    <div className={styles.filter_container}>
                        <input type="text"
                            className={styles.search_input}
                            placeholder="Enter restaurant name"
                            onKeyUp={(e) => this.onChangeText(e)}
                        />
                    </div>  
                </div>
            )
     }
}
export default Search