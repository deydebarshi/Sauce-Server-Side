import React, {Component} from 'react'
import styles from './Shared.module.css'


//const Services = require('../../services/services')


class dayFiltersButton extends Component{

    constructor(props){
        super(props)
        this.state = {isChecked : false}
    }


    async componentDidMount(){

        let day_filters = localStorage.getItem('day_filter')

        if(day_filters != null)
        {
            let day_filters_arr = JSON.parse(day_filters)
            
            const index = day_filters_arr.indexOf(this.props.data.id);

            if (index > -1) {
                this.setState({isChecked : !this.state.isChecked})
            }
           
        }
    }




    handleClick = async(id) => {

        this.setState({isChecked : !this.state.isChecked})

        let day_filters = localStorage.getItem('day_filter')

        let day_arr = []

        if(day_filters == null || day_filters =='')
        {

            day_arr.push(id)

            localStorage.setItem('day_filter', JSON.stringify(day_arr))
            
        }
        else 
        {
            
            day_arr = JSON.parse(day_filters)

            const index = day_arr.indexOf(id);

            if (index > -1) 
            {
                day_arr.splice(index, 1);
            }
            else
            {
                day_arr.push(id)
            }
            
            localStorage.setItem('day_filter', JSON.stringify(day_arr))
        }

        this.props.handleClick()
    }




    render(){
        return(
            <button  
            className={styles.day_filter} 
            style={{backgroundColor: this.state.isChecked ? '#FFDAF1' : '#ffffff'}}
            onClick={()=>this.handleClick(this.props.data.id)} 
            key={this.props.data.id}>
                {this.props.data.day}
            </button >    
        )
    }



}
export default dayFiltersButton


