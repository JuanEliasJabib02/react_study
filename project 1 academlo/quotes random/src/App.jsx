import quotes from "./json/quotes.json";
import './App.css';
import QuoteBox from "./components/QuoteBox";
import { useState } from "react";
import colors from "./json/color.json";

function App() {


  const getRandomFromArray = (quotes) => {
    const indexRandom = Math.floor(quotes.length * Math.random());
    return quotes[indexRandom]
  }

  const changeQuote = () => {
    setQuoteRandom(getRandomFromArray(quotes))
    setColorRandom(getRandomFromArray(colors))
  }

  

  const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))

  const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))

  
  const objColor = {
    backgroundColor: colorRandom
  }

  
  return (
    <div style={objColor} className="App">
      <QuoteBox
        quoteRandom={quoteRandom}
        changeQuote={changeQuote}
        colorRandom = {colorRandom}
    />
    </div>
  )
}

export default App
