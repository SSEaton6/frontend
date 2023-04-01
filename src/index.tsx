import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './Movies';
import Podcasts from './Podcasts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Podcasts" element={<Podcasts />}>
          <Route index element={<App />} />
          <Route path="MovieList" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
