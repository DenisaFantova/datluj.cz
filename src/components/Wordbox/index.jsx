import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word,  }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  

   const handleKeyUp = (e) => {
    if (e.code ===  'Key' + lettersLeft[0].toUpperCase()) {
      setLettersLeft((newWord) => newWord.substring(1))
      console.log(lettersLeft.length)
    }
  };  

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [lettersLeft]);  
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
