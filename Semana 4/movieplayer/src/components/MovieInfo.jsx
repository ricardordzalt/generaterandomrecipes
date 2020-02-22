import React from 'react';

const convertMoney = (money) => {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  }
  const calcTime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
  }

const MovieInfo = props => {
    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/'; 
    const movies = props.data.map((movie, idx) => (
        <div key={idx}>
            <img width="600" src={`${IMAGE_BASE_URL}w500${movie.poster_path}`} alt="Imagen no encontrada"></img>
            <p>{`"${movie.title}"`}</p>
            <p>{movie.overview}</p>
            <label>Valoración: </label>
            <meter
            id="vote"
            min="0"
            max="100"
            optimum="100"
            low="40"
            high="70"
            value={movie.vote_average * 10}
            />
            <p></p>
            <p>{calcTime(movie.runtime)}</p>
            <p>{`Presupuesto: ${convertMoney(movie.budget)}`}</p>
            <p>{`Ingresos: ${convertMoney(movie.revenue)}`}</p>
            <p>{props.directors}</p>
        </div>
    ));
    return(
        <div className="col-4">
            {movies}
        </div>
    );
}

export default MovieInfo;
