import React from 'react'

const QuoteBox = ({quoteRandom, changeQuote, colorRandom}) => {
  
  const objStyle = {
    color: colorRandom
  }

  const objStyleBtn = {
    backgroundColor: colorRandom
  }
 
  return (
    <article style={objStyle} className="quote-box">
      <i className="quote-box_icon fa-solid fa-quote-left"></i>
      <p className='quote-box_quote'>{quoteRandom.quote}</p>
      <h1 className='quote-box_author'>{ quoteRandom.author}</h1>
      <button style={objStyleBtn} className="quote-box_button"onClick={changeQuote}>&gt;</button>
    </article>
  )
}

export default QuoteBox