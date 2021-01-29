import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from 'react'
import Recipe from './Component/Recipe'

function App() {

  const APP_ID = "afa511a5"
  const APP_KEY = "093114aa5abcac42189741f9889cea23"

  
  
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("chicken")

  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    console.log(exampleReq)
    console.log('Effect has been running');
    getRecipes()
    
    console.log("done") 
  
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e=>{
    setSearch(e.target.value)
    console.log("this is search : " + search)
    console.log(search)
  }

  const getSearch = e => { 
    e.preventDefault();
    setQuery(search)
    console.log("this is query : " + query)
    setSearch('')
  }
 
  return (
    <div className="App">
      <div className="title">
        <h1 >Recipes Search Engine</h1>
      </div>

      <form className="search-form" onSubmit={getSearch}>
        <input 
          className="search-bar" 
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button 
          className="search-button" 
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="recipe">
        {recipes.map(recipe =>{
          return (
            
          <Recipe 
          
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
        
          )
        })}
        
        </div>
    </div>
  );
}

export default App;
