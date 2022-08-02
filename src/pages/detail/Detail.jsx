import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './detail.scss';
import ListEpisod from './ListEpisod';
import VideoList from './VideoList';
import { OutlineButton } from '../../components/button/Button';
import MovieList from '../../components/movie-list/MovieList';

import { categorys, Type_s} from '../../api/enjeApi';

const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState([]);
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/film/detail/${id}`,{
          method:'GET',
          headers : {
            'Content-Type':'application/json',
          }
          
        }).then((res) => {
          if (res.ok) return res.json()
        }).then((res) => setItem(res)).catch((err) => console.log(err));
      }, [])

    
    // useEffect(() => {
    //     const getDetail = async () => {
    //         const response = await enjeApi.detail(category, id, {params:{}});
    //         setItem(response);
    //         window.scrollTo(0,0);
    //     }
    //     getDetail();
    // }, [category, id]);
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <>
        {item.map((items,ky) => 
                <>
                <div className="banner" style={{backgroundImage: `url(${items.backdrop_path})`}}></div>
                <div className="mb-3 movie-content container">
                    <div className="movie-content__poster">
                        <div className="movie-content__poster__img" style={{backgroundImage: `url(${items.poster_path})`}}></div>
                    </div>
                    <div className="movie-content__info">
                        <h1 className="title">
                            {items.series || items.title}
                        </h1>
                        <div className="genres"> 
                            {
                                items.genres.map((genre, i) => (
                                    <span key={i} className="genres__item">{genre}</span>
                                ))
                            }
                        </div>
                        <p className="overview">{items.description}</p>
                        <p>
                            
                            <h2>Episode   : {items.episode}</h2>
                            <h2>Release   : {items.release}</h2>
                            <h2>Status   : {items.status}</h2>
                            <h2>Producers : {items.producers}</h2>
                        </p>
                        <div className="cast">
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="section mb-3">
                        <h3>VIDEO</h3>
                        <VideoList lnk={items.trailer_link}/>
                    </div>
                    
                </div>
                <div className='container'>
                    <div className="section mb-3">
                    {/* {items.category.map((xitem,xz)=>(
                        <LinkItem  xcategory={xitem} /> */}
                        
                     <h1>EPISODE</h1>
                     <nav>
                     <ul className='border'>
                    <li> <span> /</span></li>

                    {items.itemanime.map((itm,x) => (
                    <>
                            
                     <li><ListEpisod id={itm} /></li>
                     </>
                   ))}
                    </ul>
                    </nav>
                        
                    {/* ))} */}
                        
                        
                    </div>
                    <div className="section mb-3">
                        <div className="section__header mb-2"> 
                            <h2>Similar</h2>
                            <Link to="/Movie/popular">
                                <OutlineButton className="small">View more</OutlineButton>
                            </Link>
                        </div>
                        <MovieList category={category} type={Type_s.popular} />
                    </div>
                </div>
            </>
        )}
           
        </>
    );
}

const getsmilar = props =>{
    const smilarItem = props.smlr;
    return(
        <h1>oke</h1>
    )
}

export default Detail;
