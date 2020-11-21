import React, {Component} from 'react'
import styles from './Single.module.css'
import Modal from 'react-modal';
import SingleView from '../single/Single'
import {Close} from '@styled-icons/evaicons-solid/Close'


class SingleModal extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <Modal 
                isOpen = {this.props.isSingleVisible}
                closeTimeoutMS={500}
                ariaHideApp={false}
                //onRequestClose={closeModal}
            >
                  <div className={styles.single_modal_container}>
                    <Close size={30} className={styles.modal_close} onClick={() => this.props.closeSingleView()}/>
                    <SingleView id={this.props.id}/>
                  </div>
            </Modal>
        )
    }
}
export default SingleModal