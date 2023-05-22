import React, { useState } from 'react';
import sArea from './components/Areas.module.css';
import sKey from './components/Keywords.module.css';
import sSlugs from './components/Slugs.module.css';




function App() {
  // states (text of keywords)
  const [textEntered, setTextEntered] = useState('');
  const [wordsEntered, setWordsEntered] = useState([]);
  const [link, setLink] = useState('');

  // function for searching keywords in text
  function replacerKeyWords(text, keywords) {
    // function-randomizer (setting tags inside the keyword)
    function randomTags(onekey) {
      let randomNum = Math.random() * 10;
      if (randomNum >= 5) {
        return `<b>${onekey}</b>`
      } else {
        return `<i>${onekey}</i>`
      }

    }
    for (let i = 0; i <= keywords.length; i++) {
      let regex = new RegExp(`${keywords[i]}`,'g'); // regular expression of KEYWORD
      text = text.replace(regex, (elem) => {
        return randomTags(keywords[i]);
      })
    }
    return text;
  }
  // function for indentation 
  function createMarkup() {
        return {__html: replacerKeyWords(textEntered, wordsEntered).split('\n').join('<br>')}; // --- setting paragraphes
  }
  // function for transformation words into array and reverse its elements
  function makeArray(str) {
        return setWordsEntered(str.split(', ').reverse()) // --- add columns of keywords and reverse them
  }      
  
  function compileWordsOfLink(link) {
    return link.toLowerCase().split(' ').join('-');
  }

  return (
    <div className="App">
      <div className={sSlugs.areaForInputs}>
                <input id={sSlugs.mainInput} placeholder='Tap your URL...' onChange={(e) => {
                    setLink(e.target.value);
                }}/>
                <div className={sSlugs.doneLink}>
                    <p>{compileWordsOfLink(link)}</p>
                </div>
        </div>
      <div>
            <div className={sArea.areas}>
                <div className={sArea.areaForYourText}>
                    <textarea id={sArea.textareaForYourText} placeholder='Enter your text...' onChange={(e) => {
                        setTextEntered(e.target.value);
                    }}/>
                </div>
                <div className={sArea.textDone}>
                    <p dangerouslySetInnerHTML={createMarkup()}></p>
                </div>
            </div>
        </div>
        <div className={sKey.keywords}>
            <div className={sKey.areaForYourKeyWords}>
                <textarea id={sKey.textareaForYourText} placeholder='Tap your keywords...' onChange={(e) => {
                    makeArray(e.target.value);
                }}/>
            </div>

        <div className={sKey.wordsDone}>
                <span>
                        {wordsEntered.map((el, i) => {
                        return <p className={sKey.blockParagraph} key={i}>{el}</p>
                        })}
                </span>
        </div>
        </div>
    </div>
  );
}

export default App;
