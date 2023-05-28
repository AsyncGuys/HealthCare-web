import React from 'react'
import Card  from '../components/Main/DiseaseCard'
import cardData from '../components/Main/cardData'
const Home = () => {
  return (
    <div>
       <Card details = {cardData} />
    </div>
  )
}

export default Home