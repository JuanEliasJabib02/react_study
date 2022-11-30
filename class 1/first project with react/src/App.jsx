
import './App.css'
import Card from './components/Card'
import CardPerson from './components/CardPerson'
import CardExercise from './components/CardExercise'

function App() {

 
  return (
    <div className="App">
 
      < CardExercise
        title="Hobbies"
        e1="Coding"
        e2="cooking"
        e3="sport"
        e4="gaming"
        backgroundColor="red"
      />

< CardExercise
        title="Fav Food"
        e1="Pizza"
        e2="Hamburguesa"
        e3="Crispeta"
        e4="Galleta"
        backgroundColor="Blue"
      />

< CardExercise
        title="Stack"
        e1="html"
        e2="css"
        e3="react"
        e4="express"
        backgroundColor="green"
      />
      <CardPerson />

      < Card text="hi ima  prop" color="red" />
      < Card text="hi im another prop" color="blue" />
    </div>
  )
}

export default App
