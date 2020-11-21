import React from 'react';
import Modal from 'react-modal';
import styles from './modal.module.css'
import {Close} from '@styled-icons/evaicons-solid/Close'
import TypeFilters from '../shared/TypeFilters'
import OfferFilters from '../shared/OfferFilters'
import CuisineFilters from '../shared/CuisineFilters'
import Search from '../shared/Search'
 
class ModalView extends React.Component {

  constructor(props){
    super(props)
    
  }


  

  updateState = () => {

  }
  

  render() { 
    return (
        <>
            <Modal 
                isOpen = {this.props.isVisible}
                closeTimeoutMS={500}
                ariaHideApp={false}
               
            >
                <div className={styles.container}>
                    <div className={styles.modal_header}>
                        <Close size={30} className={styles.modal_close} onClick={() => this.props.closeModal()}/>
                        <span className={styles.filter_header_text}>Filter Result</span>
                    </div>

                    <div className={styles.filter_container}>
                        <TypeFilters updateState={this.updateState}/>
                        <OfferFilters updateState={this.updateState}/>
                        <CuisineFilters/>
                        <Search/>

                        <div className={styles.button_container}>
                            <button className={styles.offer_btn} onClick = {() => {this.props.updateFilter()} }>
                                <span className={styles.offer_btn_text}>VIEW OFFERS</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
  }
}
export default ModalView
 
