import React from 'react'
import fetch from 'isomorphic-unfetch';
import HomeSCreen from '../components/home/Home'


const HomePage = ({items}) =>{  
  return(
      <HomeSCreen establishments={items}/>
  )
}


export async function getServerSideProps() {
    const res = await fetch('https://api.thesauce.app/establishment/?lat=-33.8952763&long=151.2722256',
    {
      headers: {
        THESAUCEAPI: `tk_87e470de-2096-4eb8-9772-f6d7fb5b9699`,
      }
    })
    
    const items = await res.json()

    return { props: { items } }
}

export default HomePage