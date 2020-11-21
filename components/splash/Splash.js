import React,{Component} from 'react' 
import styles from  './Splash.module.css'
import Router from 'next/router'

class Splash extends Component{

    componentDidMount = async() =>{

        if (localStorage.length > 0)
        {
            localStorage.clear();
        }

        await this.requestLocationPermission()
    }
  
  
    requestLocationPermission = async()=>{
      let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      let isFirefox = typeof InstallTrigger !== 'undefined';
      let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
      let isIE = /*@cc_on!@*/false || !!document.documentMode;
      let isEdge = !isIE && !!window.StyleMedia;
      let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

      try { 
          if(isFirefox || isSafari || isIE)
          {
              localStorage.setItem('latitude','-33.8952763')
              localStorage.setItem('longitude','151.2722256')
              localStorage.setItem('currentlatitude','-33.8952763')
              localStorage.setItem('currentlongitude','151.2722256')

              setTimeout(() => {
                Router.push('/home')
              }, 500);
          }
          else
          {
              const permission = await navigator.permissions.query({name:'geolocation'})
        
              if(permission.state == 'granted')
              {
                  navigator.geolocation.getCurrentPosition(function(position) {
                      localStorage.setItem('latitude','-33.8952763')
                      localStorage.setItem('longitude','151.2722256')
                      localStorage.setItem('currentlatitude','-33.8952763')
                      localStorage.setItem('currentlongitude','151.2722256')
    
                      setTimeout(() => {
                        Router.push('/home')
                      }, 500);
    
                      
                    },(error) => {
                      console.log(error.code, error.message);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                  );
              }
              else if(permission.state == 'prompt')
              {
                  await navigator.geolocation.getCurrentPosition(getPosition , showError) 
              }
              else
              {
                  localStorage.setItem('latitude','-33.8952763')
                  localStorage.setItem('longitude','151.2722256')
                  localStorage.setItem('currentlatitude','-33.8952763')
                  localStorage.setItem('currentlongitude','151.2722256')
    
                  setTimeout(() => {
                    Router.push('/home')
                  }, 500);
              }
             
          }
      } catch (err) {
        console.warn(err)
        localStorage.setItem('latitude','-33.8952763')
        localStorage.setItem('longitude','151.2722256')
        localStorage.setItem('currentlatitude','-33.8952763')
        localStorage.setItem('currentlongitude','151.2722256')
        setTimeout(() => {
          Router.push('/home')
        }, 500);
      }
    }


    render(){
      return(
        <div className={styles.splash_container}>
          <img src="/images/sauce_logo.png" className={styles.splashLogo}/>
		</div>
      )
    }
  }
  
  export default Splash


  function getPosition(position){
      localStorage.setItem('latitude',JSON.stringify(position.coords.latitude))
      localStorage.setItem('longitude',JSON.stringify(position.coords.longitude))
      localStorage.setItem('currentlatitude',JSON.stringify(position.coords.latitude))
      localStorage.setItem('currentlongitude',JSON.stringify(position.coords.latitude))
      setTimeout(() => {
        Router.push('/home')
      }, 500);
  }


  function showError(error){
      localStorage.setItem('latitude','-33.8952763')
      localStorage.setItem('longitude','151.2722256')
      localStorage.setItem('currentlatitude','-33.8952763')
      localStorage.setItem('currentlongitude','151.2722256')
      setTimeout(() => {
        Router.push('/home')
      }, 500);
  }