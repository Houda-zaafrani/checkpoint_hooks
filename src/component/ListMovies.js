import React from 'react'
//we import component <MovieCard/> 
import MovieCard from "./MovieCard"
//component List card have movies like props because they display all movies in dat
const ListMovies = ({movies}) => {
  return (
    // we use style inline 
    <div style={{ fontFamily: "Roboto sansSerif" }}>
      <h3 style={{ color: "#61dafb" }}>Liste of movies </h3>
      <div
        style={{
          margin: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 20,
          alignItems: "center",
        }}
      >
       { /*we map movie after movie in the data then we display it by specify his id*/}
        {movies.map((el) => (
          <MovieCard key={el.id} movie={el} />
        ))}
      </div>
    </div>
  );
}

export default ListMovies
