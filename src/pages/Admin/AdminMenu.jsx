import React from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <>
    <div className="banner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original//rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg")`}}></div>
    <div className="mb-3 movie-content container">
        <div className="movie-content__poster">
            <div className="movie-content__poster__img" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original//jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg")`}}></div>
        </div>
        <div className="movie-content__info">
            <h1>SETUP ITEM</h1>
            <div className="genres">
            <Link to="/basecamp/addSeries"> <button className='btn-outline' > Add Series </button></Link>
            <Link to="/basecamp/addSubSeries"> <button className='btn-outline' > Add Sub Series </button></Link>
            <Link to="/basecamp/update"> <button className='btn-outline' > Update & Delete</button></Link>

            {/* <Link to="/basecamp/delete"> <button className='btn-outline' > Delete </button></Link> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminMenu