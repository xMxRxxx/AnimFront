import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

const VideoList = props => {

    const {category} = useParams();

    // const [videos, setVideos] = useState([]);
    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/film/detail/${props.id}`,{
    //       method:'GET',
    //       headers : {
    //         'Content-Type':'application/json',
    //       }
          
    //     }).then((res) => {
    //       if (res.ok) return res.json()
    //     }).then((res) => setVideos(res)).catch((err) => console.log(err));
    //   }, [])
    const iframeRef = useRef(null);
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);
    return (
        <>
        <div className="video">
            <div className="video__title">
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${props.lnk}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
            {/* {
                videos.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            } */}
        </>
    );
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;
