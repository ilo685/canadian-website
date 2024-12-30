import React from 'react'
import CanadaImmigrationForm from '../components/Comp1'
import AdvantagesSection from '../components/Comp2'
import FAQSection from '../components/Comp3'
// import DeadlineNotice from '../components/DeadLine'

function HomePage() {
  return (
    <div>
      
      <CanadaImmigrationForm/>
      {/* <DeadlineNotice/> */}
      <AdvantagesSection/>
      <FAQSection/>
    </div>
  )
}

export default HomePage
