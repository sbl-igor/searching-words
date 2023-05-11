import React, { useState } from 'react';
import s from './Areas.module.css';

function Areas() {

    const [textEntered, setTextEntered] = useState('');
    console.log(textEntered)

    function createMarkup() {
        return {__html: textEntered.split('\n').join('<br>')};
      }
      
  return (
    <div>
        <div className={s.areas}>
            <div className={s.areaForYourText}>
                <textarea id={s.textareaForYourText} placeholder='Enter your text' onChange={(e) => {
                    setTextEntered(e.target.value);
                }}/>
            </div>
            <div className={s.textDone}>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
            </div>
        </div>
    </div>
  )
}

export default Areas