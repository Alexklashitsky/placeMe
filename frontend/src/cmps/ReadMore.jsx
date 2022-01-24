import { useEffect, useState } from 'react';

function showTxt(text, isLongTxtShown) {
  if (isLongTxtShown) return text;
  else return text.substr(0, text.lastIndexOf(' ', 180));
}

export function ReadMore({ text }) {
  const [isLongTxtShown, setisLongTxtShown] = useState(false);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    if (200 > text.length) {
      setShowMore(false);
    }
  }, [text]);

  const onToggle = () => {
    setisLongTxtShown(!isLongTxtShown);
  };

  return (
    <section className='txt'>
      {showTxt(text, isLongTxtShown) + ' '}
      <a onClick={onToggle}>{isLongTxtShown ? ' Less...' : ' More...'}</a>
    </section>
  );
}
