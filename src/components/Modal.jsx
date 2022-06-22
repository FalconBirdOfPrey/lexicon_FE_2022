import React from 'react'

const Modal = ({clearList, setShowModal}) => {
  return (
    <div className='modal-bg'>
        <div className="modal">
            <h2>Clear all items!</h2>
            <p>Sure?</p>
            <div className="modal_flex">
                <button onClick={() => clearList()}   className='y-btn'>Absolutely!</button>
                <button onClick={() => setShowModal(false)} className='n-btn'>No, I changed my mind...</button>
            </div>
        </div>
    </div>
  )
}

export default Modal