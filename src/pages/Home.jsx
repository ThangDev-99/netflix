import React from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../components/button/Button'
import HeroSlide from '../components/hero-slide/HeroSlide'
import MovieList from '../components/movie-list/MovieList'
import {category, movieType, tvType} from "../api/tmdbApi"
const Home = () => {
  return (
    <>
      <HeroSlide/>
      <div className="container">
      {/* Popular */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>
        {/* Top rated */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>
        {/* Trend tv */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trend TV</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular}/>
        </div>
        {/* Top rated TV */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top rated TV</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>
      </div>
    </>
  )
}

export default Home