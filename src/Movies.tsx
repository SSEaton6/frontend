// import { useState } from 'react';
import MovieData from './MovieData.json';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
const movieData = MovieData.MovieData;
//this function loops through the data file and displays the movies in a table.
function MovieList() {
  return (
    <>
      <Navbar />
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table-striped">
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
