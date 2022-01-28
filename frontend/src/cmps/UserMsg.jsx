import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateText } from '../store/modal.action';

export const UserMsg = () => {
  let timeOutId;

  const message = useSelector((state) => state?.modalModule.msg);
  console.log('message:', message);

  const dispatch = useDispatch();

  useEffect(() => {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      closeMsg();
    }, 2000);
  }, []);

  const closeMsg = () => {
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
