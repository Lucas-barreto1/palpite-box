import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4 '>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por Lucas Barreto {' '}
      </div>
      <div className=' text-center mx-auto container mt-4'>
        <img className='inline px-10' src='/logo_devpleno.png' />  {' '}
        <img className='inline px-10 ' src='/logo_semana_fsm.png' alt='' /> {' '}
        <div className='text-center mx-auto container mt-8'>
          <img className='inline px-1 ' src='/GitHub.png' />  {' '}
          <a className='hover:underline font-bold text-center' href='https://github.com/Lucas-barreto1'>Lucas Barreto</a>
        </div>
      </div>
    </div>
  )
}

export default Footer