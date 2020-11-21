import React from 'react';
import Modal from 'react-modal';
import styles from './Subscribe.module.css'
import {Close} from '@styled-icons/evaicons-solid/Close'


const Services = require('../../services/services')


class ModalView extends React.Component {

  constructor(props){
    super(props)
    this.state={
        name : '',
        email : '',
        nameError : false,
        emailError : false,
        isToastActive : false,
        emailErrorText : '* Invalid email address'
    }

    this.userSubscribe = this.userSubscribe.bind(this);
  }


  handleChangeName = (event) =>{
    this.setState({name: event.target.value});
  }



  handleChangeEmail = (event) =>{
    this.setState({email: event.target.value});
  }


  closeSignup =()=>{
    this.setState({isToastActive: false})
    this.props.closeModal()
  }



  userSubscribe = async() => {
    
    let name = this.state.name
    let email = this.state.email

    if (name !== '') {
        if (
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
          name !== ''
        ) {
          let result = await Services.sendSignUpDetails(name, email);
        
          if(result.data.error){
              this.setState({
                emailError: true,
                nameError: false,
                emailErrorText : '* ' + result.data.message
              });
          }
          else{
              this.setState({
                nameError: false,
                emailError: false,
                name: '',
                email: '',
                isToastActive: true,
              });
          }
          
        } else {
          this.setState({
            emailError: true,
            emailErrorText: '* Invalid email address',
            nameError: false,
          });
        }
      } else {
        this.setState({
            nameError: true,
            emailErrorText: '* Invalid email address',
            emailError: true,
        });
    }

  }
  

  render() { 
    return (
        <>
            <Modal 
                isOpen = {this.props.isSubscribe}
                closeTimeoutMS={500}
                ariaHideApp={false}
               
            >
                <div className={styles.container}>
                    <div className={styles.modal_header}>
                        <Close size={30} className={styles.modal_close} onClick={() => this.closeSignup()}/>
                        <span className={styles.subscribe_header_text}>Get on The Hot Sauce</span>
                        <p className={styles.subscribe_header_below}>Get our hottest local restaurant and bar deals delivered direct to your inbox</p>
                        <p className={styles.subscribe_policy}>We have a strict no spam policy</p>
                    </div>

                    <div className={styles.subscribe_container}>
                        <div className={styles.input_container}>
                            {
                                this.state.isToastActive ? (
                                    <span className={styles.successMSG}>Successfull</span>
                                ):null
                            }
                           
                            <input type="text"
                             name="name" 
                             placeholder="First name" 
                             className={styles.input}
                             onChange={this.handleChangeName}
                            />
                            {
                                this.state.nameError ? (
                                    <span className={styles.errorMSG}>* Invalid first name</span>
                                ):null
                            }
                            
                            <input type="email" 
                            name="email" 
                            placeholder="Enter email" 
                            className={styles.input}
                            onChange={this.handleChangeEmail}
                            />
                            {
                                this.state.emailError ? (
                                    <span className={styles.errorMSG}>{this.state.emailErrorText}</span>
                                ):null
                            }
                            
                        </div>
                        <div className={styles.button_container}>
                            <button className={styles.offer_btn} onClick = {() => {this.userSubscribe()} }>
                                <span className={styles.offer_btn_text}>Send me updates</span>
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
 
