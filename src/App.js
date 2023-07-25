import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from 'react';
import AddMovie from './component/AddMovie';
import ListMovies from './component/ListMovies';
import data from './data/data';
import FilterMovies from './component/FilterCard';

function App() {
   

  const [movies, setMovies] = useState(data);

 

  const toSearch = useRef();
  const [search, setSearch] = useState("");
  const [rating, setRating]=useState(0)
  const myHandleSearch = (value) => {
    setSearch(toSearch.current.value);
  };
  

  const handleRate=(rating)=>{
    setRating(rating)
  }
  const myHandleAdd = (data) => {
    setMovies([...movies, data]);
  };
  return (
    <div className="app">
      <div>
        <FilterMovies
          handleRate={handleRate}
          toSearch={toSearch}
          myHandleSearch={myHandleSearch}
        />
      </div>
      <div>
        <ListMovies
          movies={[...movies].filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .trim()
                .includes(search.toLowerCase().trim()) && movie.rate >= rating
          )}
        />
      </div>

      <div>
        <AddMovie
          
          myHandleAdd={myHandleAdd}
        />
      </div>
    </div>
  );
}

export default App;
