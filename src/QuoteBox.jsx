import React from 'react';

import GitHubImg from './github.jpg';


const QuoteBox = ({ quote }) => {
  return (
    <div className="card">
      <div>
        <p className="text">{quote.text}</p>
        <span className="author">{quote.author !== null ? quote.author : 'unknown'}</span>
      </div>

        <a href="https://github.com/bruxx-6243" target="_blank" rel="noreferrer">
            <img
            src={ GitHubImg }
            alt="Bruxx dev"
            />
            <span className="author">Fariol Blondeau</span>
        </a>
    </div>
  )
}

export default QuoteBox
