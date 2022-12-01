import { useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => setIsVisible(!isVisible)


  return (
    <div className="App">

      <button onClick={handleClick}>Show/Hide Button</button>
      {
          isVisible  ?
          <img alt="yugi" src="https://occ-0-360-999.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUX2KYwwhnfPwUIGOPB6DKz-f2tiWG2I1yE0swf9FQihfCjOYZg0eKiWdtExO4N0kjwkAWuTFhu1eLD2eesOqjtxsI0BaBdkFCRp.jpg?r=219"></img>
          :
          <h2>is hidden</h2>
      }
     
    </div>
  )
}

export default App
