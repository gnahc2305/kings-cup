import React from 'react'
import spade from '../Icons/spade.png';
import club from '../Icons/club.png';
import diamond from '../Icons/diamond.png';
import heart from '../Icons/heart.png';

function Card({cardNumber, challenge, cardSign}) {
  return (
    <div className='h-[350px] w-[250px] bg-white rounded-xl'>
      <p className='text-[50px] text-red-900 m-3'>
        {cardNumber} {cardSign}
      </p>
      {/* <img src={diamond} alt="" height='64px' width='64px' /> */}
      <p>
        {challenge}
      </p>
    </div>
  )
}

export default Card