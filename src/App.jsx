/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import NoMovieSelected from './components/NoMovieSelected';
import Sidebar from './components/Sidebar';
import AddMovieReview from './components/AddMovieReview';
import MoviesList from './components/MoviesList';

function App() {
  const [movieState, setMovieState] = useState({
    selectedMovieId : undefined,
    movies : []
  })

  function handleStartAddReview() {
    setMovieState(prevState => {
      return {
        ...prevState,
        selectedMovieId : null,
      }
    })
  }

  console.log(movieState);

  function handleAddReview(reviewData) {
    setMovieState(prevState => {
      const newReview = {
        id : Math.random(),
        ...reviewData
      }

      return {
        ...prevState,
        selectedMovieId : undefined,
        movies : [...prevState.movies, newReview]
      }
    })
  }
  
  return (
    <main className='my-8 flex'>
      <div className='h-screen flex col-2'>
        <Sidebar moviesList={movieState.movies} onStartAddReview={handleStartAddReview}/>
      </div>
      <div className='col-10'>
        <MoviesList />
      </div>
    </main>
  );
}

export default App;
