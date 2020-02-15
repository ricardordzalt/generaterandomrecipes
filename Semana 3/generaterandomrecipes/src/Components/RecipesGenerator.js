import React, {Component} from 'react';
import Recipe from './Recipe';
import recipesdata from '../recipesdata';

class RecipesGenerator extends Component{
    constructor(){
        super();
        this.state = {
            recipes: [],
            random: []
        };
        this.getRecipe = this.getRecipe.bind(this);
    }
    getRecipe = () => { 
        this.state.random = recipesdata[Math.floor(Math.random() * recipesdata.length)]
        this.setState({
          recipes: [this.state.random]
        });
    }
    render(){
        const mostrarrecetas = this.state.recipes.map((info, idx) => 
        <Recipe info={info} key={idx}/>
        
        );
        return(
            <div className="container estilo">
                <div className="row estilo">
                    <div className="col-7">
                        <h1>¿Qué cenamos?</h1>
                        <h3>¿Cansado de hacerte siempre la misma pregunta?</h3>
                        <h6>Haz click en el botón de abajo para obtener una receta aleatoria!</h6>                        
                        <button className="btn btn-primary" onClick={this.getRecipe}>
                            ¡Obtener Receta!
                        </button>
                    </div>
                    <div className="col-5">
                        {mostrarrecetas}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipesGenerator;