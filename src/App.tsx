import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from './JoelHiltonHeadshot.jpg';
import TopBanner from './Blah';
import MovieList from './Movies';
import Navbar from './navbar';

class Welcome extends React.Component {
  render() {
    return <h1>Welcome to Joel Hilton's Website!</h1>;
  }
}

function Image() {
  return (
    <div>
      <figure>
        <img src={image} alt="Joel Hilton" loading="lazy" width="350" />
      </figure>
      <p>
        This website is for all about Joel Hilton's Podcast and his love for
        movies!
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <TopBanner words="Main Page" /> */}
      <Navbar />
      <Welcome />
      <Image />
    </div>
  );
}
export default App;
