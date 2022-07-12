import React, { useEffect, useState } from 'react';
import QuoteBox from './QuoteBox';


import Error404 from './404.jpg';
import './App.css';

const API_URL = 'https://type.fit/api/quotes/';


const App = () => {
  // const [findQuote, setFindQuote] = useState("");
  const [quotes, setQuotes] = useState([ ]);

  const searchQuote = async ( ) =>{
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    setQuotes(data);
  }

  useEffect(() =>{
    searchQuote(" ");
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Quote Box</h1>

        <div className="search">
            <input
            type="search"
            value = ""
            onChange={() => {}}
            placeholder = "Type any author name to get his quotes"
            />

            <div className="searchBtn"
            onClick={() => {}}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
      </div>

        { quotes?.length > 0 ? (
        <div className="container">
          { quotes.map(quote => (
            < QuoteBox quote = { quote} />
          ))}
        </div>
        ) : (
          <div className="empty">
            <img
            src= {Error404}
            alt ="404 page no found"
            />
          </div>
        )}

        
    </div>
  )
}

export default App
