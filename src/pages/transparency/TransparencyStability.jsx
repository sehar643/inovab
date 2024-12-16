import React from 'react'
import Transparency from '../home/_components/Transparency'
import CurrentBalance from './_components/CurrentBalance'
import StabilitySection from './_components/StabilitySection'
import BuildCurrency from '../buildCurrency/BuildCurrency'

const TransparencyStability = () => {
  return (
    <div className='bg-gradient-to-r from-blue-50 via-white to-blue-50'>
      <Transparency/>
      <CurrentBalance/>
      <StabilitySection/>
    </div>
  )
}

export default TransparencyStability
