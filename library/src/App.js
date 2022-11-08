import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard/MovieCard';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  // isLoading = true

  // esta condição é verdadeira ? se sim faça isso : se não faça isso
  return (
    <div className="App">
      { isLoading ? <Spinner /> : <MovieCard /> }
    </div>
  )

  // if(isLoading) {
  //   return (
  //     <div className="App">
  //       <Spinner />
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className="App">
  //       <MovieCard />
  //     </div>
  //   )
  // }
}

export default App;
