import React, {Component} from 'react'
import styles from './Shared.module.css'
import {KeyboardArrowRight} from '@styled-icons/material-rounded/KeyboardArrowRight'


class typeFilters extends Component{
    constructor(){
        super()
        this.state = {
            isCheckedDrinks: false, 
            isCheckedFood: false,  
            isCheckedBoth: false
        }    
    }



    
    async componentDidMount(){
        
        let type_filters = localStorage.getItem('type_filter')

        if(type_filters != null){

            type_filters = JSON.parse(type_filters)

            if(type_filters === 'drink'){
                this.setState({isCheckedDrinks: true , isCheckedFood: false,  isCheckedBoth: false})
            }
    
            if(type_filters === 'food'){
                this.setState({isCheckedDrinks: false , isCheckedFood: true,  isCheckedBoth: false})
            }
    
            if(type_filters === 'food,drink'){
                this.setState({isCheckedDrinks: false , isCheckedFood: false,  isCheckedBoth: true})
            }
        }
    }





    handleClick = async(type) => { 

        let type_filter = localStorage.getItem('type_filter');

        if (type_filter == null || type_filter == '') 
        {

            if(type === 'drink'){
                    this.setState({isCheckedDrinks: true , isCheckedFood: false,  isCheckedBoth: false})
            }


            if(type === 'food'){
                this.setState({isCheckedDrinks: false , isCheckedFood: true,  isCheckedBoth: false})
            }


            if(type === 'food,drink'){
                this.setState({isCheckedDrinks: false , isCheckedFood: false,  isCheckedBoth: true})
            }

            localStorage.setItem('type_filter', JSON.stringify(type))
        }
        else
        {
            let type_val = JSON.parse(type_filter);

            if(type_val === type)
            { 
                if(type === 'drink')
                {
                    this.setState({isCheckedDrinks: false})
                }
                if(type === 'food')
                {
                    this.setState({isCheckedFood: false})
                }
                if(type === 'food,drink')
                {
                    this.setState({isCheckedBoth: false})
                }
                
                localStorage.removeItem('type_filter')
            }
            else
            {
                if(type === 'drink')
                {
                    this.setState({isCheckedDrinks: true , isCheckedFood: false,  isCheckedBoth: false})
                }
                if(type === 'food')
                {
                    this.setState({isCheckedDrinks: false , isCheckedFood: true,  isCheckedBoth: false})
                }
                if(type === 'food,drink')
                {
                    this.setState({isCheckedDrinks: false , isCheckedFood: false,  isCheckedBoth: true})
                }
                localStorage.setItem('type_filter', JSON.stringify(type))
            }
        }
        
        this.props.updateState()
    }





    render(){
        return(
                <div className={styles.home_type_filters}>

                    <p className={styles.filter_text}>What are you looking for? <KeyboardArrowRight size={25}/></p>

                    <div className={styles.filter_container}>
                        <button 
                            className={styles.type_filter} 
                            style={{ backgroundColor: this.state.isCheckedDrinks ? '#FFDAF1' : '#ffffff'}}
                            onClick={()=> {this.handleClick('drink'); }} >
                                Drink
                        </button>

                        <button 
                            className={styles.type_filter} 
                            style={{backgroundColor: this.state.isCheckedFood ? '#FFDAF1' : '#ffffff'}}
                            onClick={()=> {this.handleClick('food'); }} >
                                Food
                        </button>

                        <button 
                            className={styles.type_filter} 
                            style={{backgroundColor: this.state.isCheckedBoth ? '#FFDAF1' : '#ffffff'}}
                            onClick={()=> {this.handleClick('food,drink'); }} >
                                Both
                        </button>
                    </div>  
                </div>
        )
    }

}
export default typeFilters