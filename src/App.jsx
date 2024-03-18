import { useState } from 'react';
import './App.css';
import NoMovieSelected from './components/NoMovieSelected';
import Sidebar from './components/Sidebar';
import AddMovieReview from './components/AddMovieReview';

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

  let content;

  if (movieState.selectedMovieId === null) {
    content = <AddMovieReview />
  }else if (movieState.selectedMovieId === undefined) {
    content = <NoMovieSelected onStartAddReview={handleStartAddReview}/>
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onStartAddReview={handleStartAddReview}/>
      {content}
    </main>
  );
}

export default App;
