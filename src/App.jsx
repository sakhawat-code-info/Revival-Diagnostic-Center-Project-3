

import './App.css'
import Banner from './Components/Banner'
import HealthTipsAndPromotions from './Components/HealthTipsAndPromotions'
import Promotions from './Components/Promotions'
import SliderFeaturedTest from './Components/SliderFeaturedTest/SliderFeaturedTest'


function App() {


  return (
    <>



      <div className='container mx-auto'>


        <Banner></Banner>

        <SliderFeaturedTest></SliderFeaturedTest>

        <Promotions></Promotions>

        <HealthTipsAndPromotions></HealthTipsAndPromotions>

      </div>









    </>
  )
}

export default App
