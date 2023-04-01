import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './Movies';
import Podcasts from './Podcasts';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/podcasts',
    element: <Podcasts />,
  },
  {
    path: '/movieList',
    element: <MovieList />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="Podcasts" element={<Podcasts />}>
//           <Route index element={<App />} />
//           <Route path="MovieList" element={<MovieList />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));
