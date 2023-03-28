import React from 'react';
import api from '../api/api';
import Row from '../components/Row/Row';
import Banner from '../components/Banner/Banner';
import Nav from '../components/Nav/Nav';

const NetflixShow = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row title ="Netflix Originals" fetchUrl={api.fetchNetflixOriginals} />
      <Row title ="Trending Now" fetchUrl={api.fetchTrending} />
      <Row title ="Top Rated" fetchUrl={api.fetchTopRated} />
      <Row title ="Action Movies" fetchUrl={api.fetchActionMovies} />
      <Row title ="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
      <Row title ="Horror Movies" fetchUrl={api.fetchHorrorMovies} />
      <Row title ="Science Fiction" fetchUrl={api.fetchSciFi} />
      <Row title ="Animation" fetchUrl={api.fetchAnime} />
    </div>
  )
}

export default NetflixShow
