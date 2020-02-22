import React from 'react';

const API_KEY = '0d59c137d4b1775154cc094577fbe290';

const Header = (props) => {
    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/w1280'; 
    const movies = props.data.map((movie) => (
        <div className="image" key={API_KEY}>
            <img 
            width="500" 
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} 
            alt={movie.original_title}
            onClick={props.action}
            id={movie.id}/>
            <br/><br/>
            <h5>{movie.original_title}</h5>
            <h6>{movie.overview}</h6>
        </div>
    ));
    return(
        <div className="col-4">
            {movies}
        </div>
    );
}

export default Header;