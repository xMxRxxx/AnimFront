import React from 'react';
import { useParams } from 'react-router';
import { category as cate } from '../api/enjeApi';
import PageHeader from '../components/page-header/PageHeader';
import MovieGrid from '../components/movie-grid/MovieGrid';
const CatalogSecond = () => {
    const { category, tipe } = useParams();
    return (
        <>
        <PageHeader>
                {category === cate.movie ? 'Movies' : 'Anime'}
        </PageHeader>
        <div className="container">
            <div className="section mb-3">
                    <MovieGrid category={category}tipes={tipe}/> 
            </div>
            </div>
        </>
  )
}

export default CatalogSecond