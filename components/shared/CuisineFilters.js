import React from 'react'
import NoSSR from 'react-no-ssr'
import styles from './Shared.module.css'
import { Multiselect } from 'react-widgets'
import {KeyboardArrowRight} from '@styled-icons/material-rounded/KeyboardArrowRight'

const Services = require('../../services/services')


let Select='';

const dropdownstyles = {
    chips:{
        fontSize:17,
        background:'#EA8CC7'
    },
    searchBox:{
        height: 'auto',
        minHeight: 40
    },
    inputField:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        padding: 5,
        width:'100%'
    },
    option:{
        color: '#EA8CC7'
    }
}



class CuisineFilter extends React.Component{
    constructor(){
        super()
        this.state={
            appIsMounted  :false,
            options: [],
            selectedOption:[],
            removedOption:[],
            selectedValue:["European"],
            value: []
        }

        this.onSelect = this.onSelect.bind(this);
    }



    onSelect(value) {

        this.setState({value}) 

        //let cuisin_filter = localStorage.getItem('cuisin_filter')

        //let arr = []
        
        // if(cuisin_filter !== null)
        // {
        //     arr =  JSON.parse(cuisin_filter)
        // }
      
        // arr.push(selectedItem['id'])

        localStorage.setItem('cuisin_filter', JSON.stringify(value));
    }
     


    // onRemove(selectedList, removedItem) {

    //     let cuisin_filter = localStorage.getItem('cuisin_filter')

    //     let new_arr = JSON.parse(cuisin_filter)

    //     const index = new_arr.indexOf(removedItem['id']);

    //     if (index > -1) 
    //     {
    //         new_arr.splice(index, 1);
    //     }

    //     localStorage.setItem('cuisin_filter', JSON.stringify(new_arr));
        
    // }



    async  componentDidMount() {
        
        let result = await import('multiselect-react-dropdown')
        Select = result.Multiselect
        this.setState({
            appIsMounted: true
        })

        
        let GetCuisinList = await Services.getCuisinList();
        if (GetCuisinList.length > 0) {

            let main_arr = [];
    
            GetCuisinList.map((item, key) => {
              let val = [];
              val['id'] = item;
              val['name'] = item;
              main_arr.push(item);
            });
            this.setState({options: main_arr})
        }


        let selected_data = localStorage.getItem('cuisin_filter');

        selected_data = JSON.parse(selected_data)
    
        if(selected_data != null){

            let new_array = []
            
            let selected_state = []

            selected_data.map((item, key) => {
                let new_val = []
                new_val['id'] = item
                new_val['name'] = item
                new_array.push(item)
                selected_state.push(item)
            })

            this.setState({value: selected_data})
        }
    }



    render(){
        
        return(
            <>
               <NoSSR>
                {this.state.appIsMounted? 
                    <div className={styles.home_type_filters}>
                    <p className={styles.filter_text}>Search Cuisine <KeyboardArrowRight size={25}/></p>
                    {/* <Select options={this.state.options} 
                    selectedValues={this.state.selectedValue} 
                    singleSelect={false}
                    onSelect={this.onSelect} 
                    onRemove={this.onRemove} 
                    displayValue="name"
                    showCheckbox={false}
                    closeIcon="cancel"
                    groupBy=''
                    avoidHighlightFirstOption={true}
                    style={dropdownstyles}/>  */}
                     <Multiselect
                        data={this.state.options}
                        value={this.state.value}
                        onChange={value => this.onSelect(value)}
                        placeholder='Select...'
                    />
                    </div>
                : null
                }
                </NoSSR>
            </>    
        )
    }
}
export default CuisineFilter