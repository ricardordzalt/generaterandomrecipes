import React, {Component} from 'react';
import recipesdata from './recipesdata';
import RecipesGenerator from './Components/RecipesGenerator';
import style from './style/style.css'

const App = () => {
  const receta = [recipesdata[0]];
  return(
    <div>
      <RecipesGenerator recipes={receta}/>
    </div>
  );
}

export default App;
