import React, { Component, useState, useEffect } from 'react';


export function HamburgerMenu({onToggleHamburger, toggleLoginModal, setToggleLoginModal}) {


  useEffect(() => {
    if (toggleLoginModal === true) onToggleHamburger()
  }, [toggleLoginModal]);


  const onToggleLoginModal = (e) => {
    e.stopPropagation();
    setToggleLoginModal(!toggleLoginModal);
  };

  return (
    <section className='hamburger-menu'>

      <div onClick={onToggleLoginModal}>Log in</div>
      <div onClick={onToggleLoginModal}>Sign up</div>
      <div>Host your home</div>
    </section>
  )
}

