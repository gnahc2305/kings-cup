import React from 'react'

function Card({cardNumber, challenge, cardSign}) {
  return (
    <div className='h-[350px] w-[250px] bg-white rounded-sm'>
      <p className='text-[50px] text-red-900'>
        {cardNumber} {cardSign}
      </p>

      <p>
        {challenge}
      </p>
    </div>
  )
}

export default Card