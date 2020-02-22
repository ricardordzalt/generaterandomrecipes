import React, {Component} from 'react';
import PopularMovies from '../components/PopularMovies';
import MovieInfo from '../components/MovieInfo';
import Button from '../components/Button';
import Header from '../components/Header';

const API_KEY = '0d59c137d4b1775154cc094577fbe290';
const API_URL = 'https://api.themoviedb.org/3/';

class MovieContainer extends Component{
    constructor(){
        super();
        this.state = {
        moviesSaved: [],
        movieinfo: [],
        currentPage: 1,
        firstMovie: [],
    }
    this.showMoreMovies = this.showMoreMovies.bind(this);
    this.showMovieInfo = this.showMovieInfo.bind(this);
    this.showFirstMovie = this.showFirstMovie.bind(this);
    this.goBottom = this.goBottom.bind(this);
    }        
    componentDidMount(){
        this.showFirstMovie(); 
        this.showMoreMovies();
        }
        
        showMoreMovies(e){
        const url= `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState(prevState => (
                {
                    moviesSaved: [...prevState.moviesSaved, ...data.results],
                    currentPage: this.state.currentPage + 1
                }
            ));
        });       
    }

    showMovieInfo(e){
        e.preventDefault();
        window.scrollTo(0, 0);
        const moviesid=e.target.id
        const url=`${API_URL}movie/${e.target.id}?api_key=${API_KEY}&language=en-US`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState(prevState => (
                {
                    movieinfo: [data],
                    idmovie: moviesid
                }
            ));
        }); 
    }
    

    goBottom(e){
        e.preventDefault();
        window.scrollTo(0,document.body.scrollHeight);
    }
   
    showFirstMovie(e){
        const url= `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState(prevState => (
                {
                   firstMovie: [data.results[0]]
                }
            ));
        });       
    }

    render(){
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-6">
                    <Header data={this.state.firstMovie}/>
                    <Button action={this.goBottom} title="Desplazarse hacia abajo"/>
                      <PopularMovies 
                      data={this.state.moviesSaved} 
                      action={this.showMovieInfo}
                      id={this.state.moviesSaved.results}
                      />
                      <Button action={this.showMoreMovies} title="Desplegar más películas"/>
                      </div>
                      <div className="col-6">
                      <MovieInfo 
                      data={this.state.movieinfo}
                      directors={this.state.director}
                      />
                      </div>
                </div>
            </div>
        );
    }
}

export default MovieContainer;