import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../store/user.action';
import { updateText } from '../store/modal.action';
import { useSelector, useDispatch } from 'react-redux';
import { setNotification } from '../store/order.action';
import NotificationIcon from '../assets/imgs/4.svg';

export function HamburgerMenu({ onToggleHamburger, toggleLoginModal, setToggleLoginModal, toggleHamburger }) {
  useEffect(() => {
    if (toggleLoginModal && toggleHamburger) onToggleHamburger();
  }, [toggleLoginModal]);

  const dispatch = useDispatch();
  const notification = useSelector((state) => state?.ordersModule.notification);

  const onToggleLoginModal = (e) => {
    e.stopPropagation();
    setToggleLoginModal(!toggleLoginModal);
    
  };

  const loggedInUser = useSelector((state) => state?.userModule.user);

  //clear notification

  const clearNotification = () => {
    if (!loggedInUser) {
      setToggleLoginModal(true);
      return;
    }
    dispatch(setNotification(false));
  };

  //logout

  const onLogout = () => {
    dispatch(logout());
    dispatch(updateText({ txt: 'Logged out!', type: 'success' }));
  };

  return (
    <section className='hamburger-menu'>
      <div className='hidden-on-mobile' onClick={onToggleLoginModal}>
        Log in / Sign up
      </div>

      {/* <div onClick={onToggleLoginModal}>Sign up</div> */}
      <Link to='/Trips' className='clean-link' onClick={onToggleHamburger}>
        {' '}
        <div onClick={clearNotification}>Trips </div>
      </Link>
      {/* {isHost && <div><Link to='/Orders' className='clean-link'> Orders </Link></div>} */}
      <Link to='/Orders' className='clean-link' onClick={onToggleHamburger}>
        {' '}
        {notification && <img src={NotificationIcon} className='red-dot'></img>}
        {/* <img src={NotificationIcon} className='red-dot'></img> */}
        {/* <div className='red-dot'>🔴</div> */}
        <div onClick={clearNotification}>Orders</div>{' '}
      </Link>
      <Link to='/BecomeHost' className='clean-link hidden-on-mobile' onClick={onToggleHamburger}>
        {' '}
        <div>Host your home</div>
      </Link>
      <div onClick={onLogout}>Logout</div>
    </section>
  );
}
