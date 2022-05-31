import { useState } from 'react'
const Navbar = () => {

    
      const [isLoggedIn, setIsLoggedIn] = useState(false)

      const toggleLoggedIn = () => {
          setIsLoggedIn(state => !state)

      }
      
  return (
    <nav className='navbar navbar-light bg-primary'>
        <div className="container">
            <span className='text-white'>
              { isLoggedIn ? <h1>Tony Larsson</h1> : <h1>Login</h1>}               
            </span>
            <button onClick={toggleLoggedIn}>Login</button>

        </div>
    </nav>
  )
}

export default Navbar