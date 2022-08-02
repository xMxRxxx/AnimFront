import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DetailSub.scss';
import ListSeries from './ListSeries';
const DetailSub = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`http://animback.herokuapp.com/film/details/${id}`,{
          method:'GET',
          headers : {
            'Content-Type':'application/json',
          }
          
        }).then((res) => {
          if (res.ok) return res.json()
        }).then((res) => setItem(res)).catch((err) => console.log(err));
    }, [])

  return (
    <>
    {item.map((items,ky) =>
        <>
        <div className="mb-3 movie-content container">
           <ListSeries />
        </div>
        
        {/* <div className="mb-3 movie-content container">
            <div className="movie-content__info">
                <h1 className="title">
                    oke
                </h1>
            </div>
        </div> */}
        </>
    )}
    
    </>
  )
}

export default DetailSub