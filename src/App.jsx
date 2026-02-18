import React from 'react'
import Accueil from './components/accueil/accueil'

import Nav from './components/nav/Nav'
import MeilleursVends from './components/accueil/meilleursVendes/boutiqueItems'
import CategorySection from './components/accueil/categorySection/category'
import BrandCards from './components/accueil/fabriqueEnFrance/BrandCards'
import InstagramSection from './components/accueil/INSTAGRAM-section/instagramSection'
import Footer from './components/FOOTER/footer'

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
