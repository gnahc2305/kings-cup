import React from 'react'

function Challenge({challenge, desc}) {
  return (
    <>
      <div className='text-center text-5xl mt-[50px]'>
          <p>{challenge}</p>
      </div>
      <div className='text-center mt-4 text-lg'>
        {desc}
      </div>
    </>
  )
}

export default Challenge