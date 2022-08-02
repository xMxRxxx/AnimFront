import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import MovieCard from '../movie-card/MovieCard';

const MovieList = props => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        if (props.type !== undefined ) {
            if(props.type === "Popular"){
                fetch(`http://127.0.0.1:8000/film/${props.category}/popular`,{
                method:'GET',
                headers : {
                    'Content-Type':'application/json',
                }
                
                }).then((res) => {
                if (res.ok) return res.json()
            }).then((res) => setItems(res)).catch((err) => console.log(err));
            }
                
        }
        else if(props.category === "Anime" ){
            fetch(`http://127.0.0.1:8000/film/${props.category}/${props.type}/`,{ 
                method:'GET',
                headers : {
                    'Content-Type':'application/json',
                }
                
                }).then((res) => {
                if (res.ok) return res.json()
            }).then((res) => setItems(res)).catch((err) => console.log(err));
        }
    }, [])
        
    // useEffect(() => {
    //     const getList = async () => {
    //         let response = null;
    //         const params = {};

    //         if (props.type !== 'similar') {
    //             switch(props.category) {
    //                 case category.movie:
    //                     response = await tmdbApi.getMoviesList(props.type, {params});
    //                     break;
    //                 default:
    //                     response = await tmdbApi.getTvList(props.type, {params});
    //             }
    //         } else {
    //             response = await tmdbApi.similar(props.category, props.id);
    //         }
    //         setItems(response.results);
    //     }
    //     getList();
    // }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;