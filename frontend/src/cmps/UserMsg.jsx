import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateText } from '../store/modal.action';

export const UserMsg = () => {
  const timeOutId = useRef();

  const message = useSelector((state) => state?.modalModule.msg);

  const dispatch = useDispatch();

  useEffect(() => {
    if (timeOutId.current) clearTimeout(timeOutId.current);

    timeOutId.current = setTimeout(() => {
      closeMsg();
    }, 2000);
  }, [message]);

  const closeMsg = () => {
    console.log('closing');
    dispatch(updateText(null));
  };

  if (!message) return <span></span>;
  const msgClass = message.type || '';
  return (
    <section className={'user-msg ' + msgClass}>
      <button
        onClick={() => {
          closeMsg();
        }}>
        x
      </button>
      {message.txt}
    </section>
  );
};
