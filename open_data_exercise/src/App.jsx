import { useState } from 'react'
import axios from "axios";

function App() {
 
  const [img, setImg] = useState('')
  const [instructions, setInstrctions] = useState('')
  const [ingredients, setIngredients] = useState([])
  

  async function getData(){ 
    const response = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const data = response.data.drinks[0]
    
    setImg(data.strDrinkThumb)

    setInstrctions(data.strInstructions)

    
    const newIngredients = [
      data.strIngredient1,
      data.strIngredient2,
      data.strIngredient3,
      data.strIngredient4,
      data.strIngredient5,
      data.strIngredient6,
      data.strIngredient7,
      data.strIngredient8
    ].filter(ingredient => ingredient)
    
    setIngredients(newIngredients)

    

  }
  

  return (

    <div>

    <button onClick={getData}>Show drink</button>

    <img src={img}/>

    <h3>Instructions</h3>

    <p>{instructions}</p>

    <h3>Ingredients</h3>

    <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

    
     </div>
  )
}

export default App
