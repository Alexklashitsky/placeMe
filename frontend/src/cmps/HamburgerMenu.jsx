import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



export function HamburgerMenu({ onToggleHamburger, toggleLoginModal, setToggleLoginModal }) {

  
  // const user = useSelector((state) => state?.userModule?.user);


  useEffect(() => {
    if (toggleLoginModal === true) onToggleHamburger()
  }, [toggleLoginModal]);


  const onToggleLoginModal = (e) => {
    e.stopPropagation();
    setToggleLoginModal(!toggleLoginModal);
  };

  return (
    <section className='hamburger-menu'>

      <div onClick={onToggleLoginModal}>Log in / Sign up</div>
      {/* <div onClick={onToggleLoginModal}>Sign up</div> */}
      <Link to='/Trips' className='clean-link' onClick={onToggleHamburger}> <div>Trips </div></Link>
      {/* {isHost && <div><Link to='/Orders' className='clean-link'> Orders </Link></div>} */}
      <Link to='/Orders' className='clean-link' onClick={onToggleHamburger}> <div>Orders</div> </Link>
      <Link to='/BecomeHost' className='clean-link' onClick={onToggleHamburger}> <div>Host your home</div></Link>
    </section>
  )
}

