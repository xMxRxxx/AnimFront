import React, { useState, useEffect } from 'react';
import './AddSubSeries.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";

import "react-datepicker/dist/react-datepicker.css";

const AddSubSeries = () => {
   
    const [series,setseries] = useState("")
    const [category,setcategory] = useState([])

    const [title,settitle] = useState("")
    const [link_360,setlink_360] = useState("")
    const [link_480,setlink_480] = useState("")
    const [link_720,setlink_720] = useState("")
    const [link_1080,setlink_1080] = useState("")
    const [link1_360,setlink1_360] = useState("")
    const [link1_480,setlink1_480] = useState("")
    const [link1_720,setlink1_720] = useState("")
    const [link1_1080,setlink1_1080] = useState("")
    const [stream_link,setstream_link] = useState("")
    const [upload_at, setupload_at] = useState(new Date())
    const [slug,setslug] = useState("")
    const [items, setItems] = useState([])
    const [id_item, setidItem] = useState(0)
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

    useEffect(() => {
        fetch('http://animback.herokuapp.com/api/enjeItem/',{
          method:'GET',
          headers : {
            'Content-Type':'application/json',
          }
          
        }).then((res) => {
          if (res.ok) return res.json()
        }).then((res) => setItems(res)).catch((err) => console.log(err));
    }, [])
    const showSeries  = () =>{
        items.map((val, key) =>{
          if(val.id === id_item){
            setseries(val.series)
            setcategory(val.category)
            // setrelease(val.title)
          }
        })
    }
    const addItem =  async() =>{
        let formField = new FormData()
        alert(series)
        formField.append('series',id_item)
        formField.append('title',title)
        formField.append('link_360',link_360)
        formField.append('link_480',link_480)
        formField.append('link_720',link_720)
        formField.append('link_1080',link_1080)
        formField.append('link_360',link1_360)
        formField.append('link_480',link1_480)
        formField.append('link_720',link1_720)
        formField.append('link_1080',link1_1080)
        formField.append('stream_link',stream_link)
        formField.append('upload_at',upload_at.getFullYear()+"-"+(upload_at.getMonth()+1) +"-"+upload_at.getDate())
        
        formField.append('slug',slug)
        
        try {
            axios
            .post("http://animback.herokuapp.com/api/enjeSubItem/", formField)
            .then((res) => {
              alert("SUKSES")
              window.location.reload(false)
            });
        } catch (error) {
            alert(error)
        }
        
        
    } 

    const [rowIndexClicked, setRowIndexClicked] = useState(null);
    const handlerRowClicked = (rowIndex,id) => (event) => {
        if (rowIndexClicked !== rowIndex) {
          // handle if user clicks again the same row
          setRowIndexClicked(rowIndex);
          setidItem(id)
        } else {
          setRowIndexClicked(null); // set clicked row to null if same row is selected
        }
      };
  return (
    <>
    <div className="banner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original//rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg")`}}></div>
    <div className="mb-2 movie-content container">
        <div className="movie-content__poster">
          <table>
            <tr>
              <th>Series</th>
              <th>Category</th>
            </tr>
            {items.map((val, key) => {
              return (
                <tr
                key={key}
                id={key}
                className={rowIndexClicked === key ? "clicked-class" : ""}
                onClick={handlerRowClicked(key,val.id)}
              >
                  <td>{val.series}</td>
                  <td>{val.category}</td>
                </tr>
              )
            })}
          </table>
          <button className='btn-update' onClick={showSeries} > Add </button>
          {/* <button className='btn-update' onClick={showUpdate} > UPDATE </button>
          <button className='btn-delete' onClick={DeletItem}> DELETE </button> */}
        </div>
        <div className="movie-content__info">
            <div className="genres">     
                <span className='label_input'>Series :</span>
                <input type="text" placeholder="Enter keyword"
                    name='series'
                    value={series}
                    onChange={(e) => setseries(e.target.value)}/>
            </div>
            <div className="genres">     
                <span className='label_input'>title :</span>
                    <input type="text" placeholder="Enter keyword"
                    name='title'
                    value={title}
                    onChange={(e) => settitle(e.target.value)}/>
            </div>
            <div className='genres'>
                <span className='label_input'>Update Date : </span>
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
                    selected={upload_at}
                    onChange={(date) => setupload_at(new Date(date))}
                    />
            </div>
            <h3>Link Download:</h3>
            <div className="genres"> 
                <h4>360 :</h4>    
                <span className='label_input'>
                    <input type="text" placeholder="Enter keyword"
                        name='link_360'
                        value={link_360}
                        onChange={(e) => setlink_360(e.target.value)}/>
                        <input type="text" placeholder="Enter keyword"
                        name='link1_360'
                        value={link1_360}
                        onChange={(e) => setlink1_360(e.target.value)}/>
                </span>
            </div>
            <div className="genres"> 
            <h4>480 :</h4>     
                <span className='label_input'>
                    <input type="text" placeholder="Enter keyword"
                        name='link_480'
                        value={link_480}
                        onChange={(e) => setlink_480(e.target.value)}/>
                        <input type="text" placeholder="Enter keyword"
                        name='link1_480'
                        value={link1_480}
                        onChange={(e) => setlink1_480(e.target.value)}/>
                </span>
            </div>
            <div className="genres"> 
            <h4>720 :</h4>     
                <span className='label_input'>
                    <input type="text" placeholder="Enter keyword"
                        name='link_720'
                        value={link_720}
                        onChange={(e) => setlink_720(e.target.value)}/>
                        <input type="text" placeholder="Enter keyword"
                        name='link1_720'
                        value={link1_720}
                        onChange={(e) => setlink1_720(e.target.value)}/>
                </span>
            </div>
            <div className="genres"> 
            <h4>1080 :</h4>     
                <span className='label_input'>
                    <input type="text" placeholder="Enter keyword"
                        name='link_1080'
                        value={link_1080}
                        onChange={(e) => setlink_1080(e.target.value)}/>
                        <input type="text" placeholder="Enter keyword"
                        name='link1_1080'
                        value={link1_1080}
                        onChange={(e) => setlink1_1080(e.target.value)}/>
                </span>
            </div>
            <div className="genres">     
                <span className='label_input'>Streaming :</span>
                    <input type="text" placeholder="Enter keyword"
                    name='stream_link'
                    value={stream_link}
                    onChange={(e) => setstream_link(e.target.value)}/>
            </div>
            <div className="genres">     
                <span className='label_input'>Slug : 
                    <input type="text" placeholder="Enter keyword"
                    name='slug'
                    value={slug}
                    onChange={(e) => setslug(e.target.value)}/></span>
            </div>
            <button className='btn-save' onClick={addItem}> Save </button>
        </div>
        
    </div>
    </>
  )
}

export default AddSubSeries;