import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Senit</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>Segun</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar