import React from 'react'

const Header = ({ title, openModal }) => {
  return (
    <div className='Header'>
        <h1>{title}</h1>
        <button onClick={() => openModal(true)} className='clear-btn'>Empty the list</button>
    </div>
  )
}

export default Header