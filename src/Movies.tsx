import { useState } from 'react';
import MovieData from './MovieData.json';

const movieData = MovieData.MovieData;

function MovieList() {
  //Was going to add functionality to add movies, but it is not needed right now.
  // const [ListofMovies, setListofMovies] = useState(movieData);

  // const addMovie = () => {
  //   setListofMovies(
  //     [
  //       ...movieData,
  //       {

  //       }]);
  // };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {movieData.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button className="btn  btn-primary" onClick=""></button> */}
    </>
  );
}

export default MovieList;
