import React from 'react';
import { Link } from 'react-router-dom';  

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';
// import { category, movieType, tvType } from '../api/tmdbApi';
import { category, Type_s} from '../api/enjeApi';
const Home = () => {
    var listgenre = ['Action', 'Adventure', 'Cars','Comedy','Crime',
    'Demons', 'Drama', 'Ecchi','Fantasy','Game',
    'Harem', 'Historical', 'Horror','Josei','Kids',
    'Magic', 'Martial Arts', 'Mecha','Military','Music',
    'Mystery', 'Parody', 'Police','Pyschologic','Romance',
    'Samurai', 'School', 'Sci-Fi','Seinen','Shoujo',
    'Shoujo Ai', 'Shounen', 'Police','Shounen Ai','Slice of Life',
    'Space', 'Sports', 'Supernatural','Super Power','Thriller',
    'Vampire'];

  return (
    <>
    <HeroSlide/>
    <div className="container">
        <div className="section mb-3">
            <div className="section__header mb-2"> 
                <h2>Trending Movies</h2>
                <Link to="/Movie/popular">
                    <OutlineButton className="small">View more</OutlineButton>
                </Link>
            </div>
            <MovieList category={category.movie} type={Type_s.popular} />
        </div>
        <div className="section mb-3">
            <div className="section__header mb-2">
                <h2>Popular Anime</h2>
                    <Link to="/Anime">
                        <OutlineButton className="small">View more</OutlineButton>
                    </Link>
            </div>
            <MovieList category={category.anime} type={Type_s.popular}/>
        </div>
        <div className="section mb-3">
            <div className="section__header mb-2">
                <h2>New Update Anime</h2>
                    <Link to="/Anime">
                        <OutlineButton className="small">View more</OutlineButton>
                    </Link>
            </div>
            <MovieList category={category.anime}/>
        </div>
        <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>GENRE</h2>
                    </div>
                    {listgenre.map((x,z)=> 
                    <>
                    <span>   </span>
                        <Link to={`/Anime/${x}`}>
                            <OutlineButton className="small">{x}</OutlineButton>
                        </Link>
                    </>
                        
                    )}
                    
                    
        </div>
    </div>
    {/* <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/Movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={Type_s.trending} />
                </div>
                
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Anime</h2>
                        <Link to="/Anime">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.anime} type={Type_s.trending}/>
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rate Anime</h2>
                        <Link to="/Anime">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.anime} type={Type_s.trending}/>
                </div>
                
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>GENRE</h2>
                    </div>
                    {listgenre.map((x,z)=> 
                    <>
                    <span>   </span>
                        <Link to={`/genre/${x}`}>
                            <OutlineButton className="small">{x}</OutlineButton>
                        </Link>
                    </>
                        
                    )}
                    
                    
                </div>
    </div> */}
        
     
    </>
  )
}

export default Home