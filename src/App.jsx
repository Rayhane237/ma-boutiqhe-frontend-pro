import React from 'react'
import Accueil from './components/accueil/Accueil'

import Nav from './components/nav/Nav'
import MeilleursVends from './components/accueil/meilleursVendes/BoutiqueItems'
import CategorySection from './components/accueil/categorySection/Category'
import BrandCards from './components/accueil/fabriqueEnFrance/BrandCards'
import InstagramSection from './components/accueil/INSTAGRAM-section/InstaSection'
import Footer from './components/FOOTER/Footer'

const App = () => {
  return (
    <div className='main'>
       
           <Nav />
     
          <Accueil />

          <MeilleursVends />
     
          <CategorySection />

          <BrandCards />

          <InstagramSection />
          
          <Footer />
      </div>

  )
}

export default App
