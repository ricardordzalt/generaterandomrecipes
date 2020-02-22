import React from 'react';



const PopularMovies = props => {
    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/w1280'; 
    const movies = props.data.map((movie, idx) => (
        <div key={idx}>
            <img 
            width="300" 
            title={`${movie.original_title} | ${movie.overview}`} 
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} 
            alt={movie.original_title}
            onClick={props.action}
            id={movie.id}
            ></img>
            <br/><br/>
        </div>
    ));
    return(
        <div className="col-4">
            <h4>Películas populares</h4>
            {movies}
        </div>
    );
}

export default PopularMovies;
