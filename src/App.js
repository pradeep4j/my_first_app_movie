import React, { useState, useEffect} from 'react';
import './App.css';
import search from './search.svg';
import MovieCard from './MovieCard';
//import {useState} from 'react';
//6d487ed2
const API = 'https://www.omdbapi.com/?apikey=697deb3e';



const App = () => {
  const [movies,searchMovies] = useState([]);   
  const [searchTerm,setSearchTerm] = useState('');   
  const setMovies = async(title) => {
        //const response = await fetch(`${API}&s=${title}`);
        //const data = await response.json();    

        const response =  await fetch(`${API}&s=${title}`) 
        const data = await response.json();
       // console.log(data.Search);
        searchMovies(data.Search);
  }
    useEffect(() => {
                    setMovies();
                    },[]);
  const setEnter = (e) =>
  {	
  alert('k');
	if(e.keyCode=='32')
	{
			
	}
  }                   
  return (
    
    <div className="App">
        <h1 className="centered">Movie List</h1>
        <div className="search">
           <input placeholder="Write to seach movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={() => {setEnter()}}/>
        
           <img src={search} onClick={() => setMovies(searchTerm)} alt="Search" />
        </div> 
        
        {
          movies?.length > 0  ?
           ( <div className="container">
                {movies.map((movie) => ( <MovieCard movie={movie} />  ))}
                
            </div>    )
            :   
            (<div>
                No movies are available
            </div>)
        }
    </div>    
        


  );
}

export default App;
