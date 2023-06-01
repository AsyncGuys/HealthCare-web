// import React from 'react'
import Diseasecard from '../components/common/Diseasecard'
import data from '../utils/diseasedata'
const Home = () => {
    console.log(data)
  return (
  <div className='w-full' id="home">
     <div className='mt-16'>
     {data.map((item,index)=>{
       return <Diseasecard name={item.name} description={item.description} image={item.image} moreinfo={item.moreinfo} key={index} route={item.route}/>
     })}
  </div>
</div>



  )
}

export default Home