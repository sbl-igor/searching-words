import React, { useState } from 'react';
import s from './Keywords.module.css';


function Keywords() {

    const [wordstEntered, setWordsEntered] = useState([]);
    console.log(wordstEntered)

    function makeArray(str) {
        return setWordsEntered(str.split(' ').reverse())
    }

    return (
        <div className={s.keywords}>
            <div className={s.areaForYourKeyWords}>
                <textarea id={s.textareaForYourText} onChange={(e) => {
                    makeArray(e.target.value);
                }}/>
            </div>
            <div className={s.wordsDone}>
                <ul>
                    <span>
                        {wordstEntered.map((el, i) => {
                        return <li key={i}>{el}</li>
                        })}
                    </span>
                </ul>
            </div>
        </div>
    )
}

export default Keywords