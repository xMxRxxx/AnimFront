import React from 'react'
import './AddSeries.scss';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";

import "react-datepicker/dist/react-datepicker.css";


const AddSeries = () => {
    const [backdrop,setbackdrop] = useState(null)
    const [poster,setposter] = useState(null)
    const [series,setseries] = useState("")
    const [category,setcategory] = useState([])
    const [description,setdescription] = useState("")
    const [episode,setepisode] = useState("")
    const [genre,setgenre] = useState([])
    const [producers,setproducers] = useState("")
    const [rate,setrate] = useState(0)
    const [release,setrelease] = useState(new Date())
    const [status,setstatus] = useState("")
    const [trailer,settrailer] = useState("")
    const [slug,setslug] = useState("")
    const range = (start, end) => {
        return new Array(end - start).fill().map((d, i) => i + start);
      };
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var categorys = ['Movie','Anime'];
    // var tipes = ['Trending','New','Populer'];
    var listgenre = ['Action', 'Adventure', 'Cars','Comedy','Crime',
    'Demons', 'Drama', 'Ecchi','Fantasy','Game',
    'Harem', 'Historical', 'Horror','Josei','Kids',
    'Magic', 'Martial Arts', 'Mecha','Military','Music',
    'Mystery', 'Parody', 'Police','Pyschologic','Romance',
    'Samurai', 'School', 'Sci-Fi','Seinen','Shoujo',
    'Shoujo Ai', 'Shounen', 'Police','Shounen Ai','Slice of Life',
    'Space', 'Sports', 'Supernatural','Super Power','Thriller',
    'Vampire'];
    
    const addItem =  async() =>{
        let formField = new FormData()
       
        if(backdrop !== null && poster !== null){
            formField.append('backdrop_path',backdrop)
            formField.append('poster_path',poster)
        }
        formField.append('series',series)
        category.map(function (ct) {  
            formField.append('category',ct)
        })
        formField.append('description',description)
        formField.append('episode',episode)
        genre.map(function (gr) {
            formField.append('genres',gr)  
        })
        formField.append('producers',producers)
        formField.append('rate',rate)
        formField.append('release',release.getFullYear()+"-"+(release.getMonth()+1) +"-"+release.getDate())
        formField.append('status',status)
        formField.append('trailer_link',trailer)
        formField.append('slug',slug)
        
        try {
            axios
            .post("http://localhost:8000/api/enjeItem/", formField)
            .then((res) => {
              alert("SUKSES")
              window.location.reload(false)
            });
        } catch (error) {
            alert(error)
        }
        
        
    }   
    const handleChangeCategory = e => {
        const { value, checked } = e.target;
        if (checked) {
          // push selected value in list
          setcategory(prev => [...prev, value]);
        } else {
          // remove unchecked value from the list
          setcategory(prev => prev.filter(x => x !== value));
        }
      }
    const handleChangeGenre = e => {
        const { value, checked } = e.target;
        if (checked) {
          // push selected value in list
          setgenre(prev => [...prev, value]);
        } else {
          // remove unchecked value from the list
          setgenre(prev => prev.filter(x => x !== value));
        }
      }
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
                <span className='label_input'>
                    Backdrop :</span>
                    <input type="file" className='checkbox-outline' name='backdrop' src={backdrop}
                    onChange={(e) => setbackdrop(e.target.files[0])}/>
            </div>
            <div className="genres">     
                <span className='label_input'>
                    Poster   :</span>
                    <input type="file" className='checkbox-outline' name='poster' src={poster}
                    onChange={(e) => setposter(e.target.files[0])}/>
            </div>
            <div className="genres">     
                <span className='label_input'>
                    Series :</span>
                    <input type="text" placeholder="Enter keyword"
                    name='series'
                    value={series}
                    onChange={(e) => setseries(e.target.value)}/>
            </div>
            <div className="genres">     
                <span className='label_input'>
                    Episode :</span>
                    <input type="text" placeholder="Enter keyword"
                    name='episode'
                    value={episode}
                    onChange={(e) => setepisode(e.target.value)}/>
            </div>
            <div className="genres">     
                <span className='label_input'>
                    Producers : </span>
                    <input type="text" placeholder="Enter keyword"
                    name='producers'
                    value={producers}
                    onChange={(e) => setproducers(e.target.value)}/>
            </div>
            <div className="genres">     
                <span className='label_input'>Description :</span>
                <input type="text" placeholder="Enter keyword"
                    name='description'
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}/>
            </div>
            <div className="genres">     
                <span className='label_input'>Rate :</span>
                <input type="text" placeholder="Enter keyword"
                    name='rate'
                    value={rate}
                    onChange={(e) => setrate(e.target.value)}/>
            </div>
            <div className="genres">     
                <span className='label_input'>Status :</span>
                    <input type="text" placeholder="Enter keyword"
                    name='status'
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}/>
            </div>
            <div className='genres'>
                <span className='label_input'>Release Date : </span>
                <DatePicker
                    
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div
                        style={{
                            margin: 10,
                            display: "flex",
                            justifyContent: "center",
                        }}
                        >
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {"<"}
                        </button>
                        <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}
                        >
                            {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>

                        <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                            }
                        >
                            {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {">"}
                        </button>
                        </div>
                    )}
                    selected={release}
                    onChange={(date) => setrelease(new Date(date))}
                    />
            </div>
            <div className="genres">
                <h4>Category :</h4>
                {categorys.map(function(category){
                    return <span><input
                    type="checkbox"
                    name="category"
                    value={[category]}
                    onChange={handleChangeCategory}
                  />{category}</span>
                })}
            </div>
            <div className="genres">
                <h4>Genre :</h4>
                {listgenre.map(function(lsgenre){
                    return <span><input
                    type="checkbox"
                    name="genre"
                    value={[lsgenre]}
                    onChange={handleChangeGenre}
                  />{lsgenre}</span>
                })}
                
            </div>
            <div className="genres">
                <span className='label_input'>
                    Trailer :</span>
                    <input type="text" placeholder="Enter keyword"
                    name='trailer'
                    value={trailer}
                    onChange={(e) => settrailer(e.target.value)}/>
            </div>
            <div className="genres">     
                <span className='label_input'>Slug : 
                    <input type="text" placeholder="Enter keyword"
                    name='slug'
                    value={slug}
                    onChange={(e) => setslug(e.target.value)}/></span>
            </div>
            <button className='btn-save' onClick={addItem}> SAVE </button>
        </div>
    </div>
    </>
  )
}

export default AddSeries