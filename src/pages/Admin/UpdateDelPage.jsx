import React, { useState, useEffect } from 'react';
import './UpdateDelPage.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateDelPage = () => {
  const [backdrop,setbackdrop] = useState(null)
  const [poster,setposter] = useState(null)
  const [title,settitle] = useState("")
  const [category,setcategory] = useState([])
  const [ty_pe,setty_pe] = useState([])
  const [description,setdescription] = useState("")
  const [episode,setepisode] = useState("")
  const [genr,setgenr] = useState([])
  const [producers,setproducers] = useState("")
  const [rate,setrate] = useState(0)
  const [release,setrelease] = useState("")
  const [status,setstatus] = useState("")
  const [link_360,setlink_360] = useState("")
  const [link_480,setlink_480] = useState("")
  const [link_720,setlink_720] = useState("")
  const [link_1080,setlink_1080] = useState("")
  const [link1_360,setlink1_360] = useState("")
  const [link1_480,setlink1_480] = useState("")
  const [link1_720,setlink1_720] = useState("")
  const [link1_1080,setlink1_1080] = useState("")
  
  const [slug,setslug] = useState("")
  const [items, setItems] = useState([])
  const [shows, setshows] = useState(true)
  const [id_item, setidItem] = useState(0)
  var categorys = ['Movie','Anime'];
  var tipes = ['Trending','New','Populer'];
  var genres = ['Action', 'Adventure', 'Cars','Comedy','Crime',
    'Demons', 'Drama', 'Ecchi','Fantasy','Game',
    'Harem', 'Historical', 'Horror','Josei','Kids',
    'Magic', 'Martial Arts', 'Mecha','Military','Music',
    'Mystery', 'Parody', 'Police','Pyschologic','Romance',
    'Samurai', 'School', 'Sci-Fi','Seinen','Shoujo',
    'Shoujo Ai', 'Shounen', 'Police','Shounen Ai','Slice of Life',
    'Space', 'Sports', 'Supernatural','Super Power','Thriller',
    'Vampire'];
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/enjeItem/',{
      method:'GET',
      headers : {
        'Content-Type':'application/json',
      }
      
    }).then((res) => {
      if (res.ok) return res.json()
    }).then((res) => setItems(res)).catch((err) => console.log(err));
  }, [])

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
  const showUpdate  = () =>{
    items.map((val, key) =>{
      if(val.id === id_item){
        setbackdrop(val.backdrop_path)
        setposter(val.poster_paths)
        settitle(val.title)
        setcategory(val.category)
        setty_pe(val.ty_pe)
        setdescription(val.description)
        setepisode(val.episode)
        setgenr(val.genres)
        setproducers(val.producers)
        setrate(val.rate)
        setstatus(val.status)
        setrelease(val.release)
        setlink_360(val.link_360[0])
        setlink1_360(val.link_360[1])
        setlink_480(val.link_480[0])
        setlink1_480(val.link_480[1])
        setlink_720(val.link_720[0])
        setlink1_720(val.link_720[1])
        setlink_1080(val.link_1080[0])
        setlink1_1080(val.link_1080[1])
        setslug(val.slug)
        // setrelease(val.title)
      }
    })
    alert(backdrop)
  }
  const UpdateItem =  async() =>{
      let formField = new FormData()
       
      if(backdrop !== null && poster !== null){
          formField.append('backdrop_path',backdrop)
          formField.append('poster_path',poster)
      }
      formField.append('title',title)
      category.map(function (ct) {  
          formField.append('category',ct)
      })
      ty_pe.map(function (tp) {
        formField.append('ty_pe',tp)
    })
      formField.append('description',description)
      formField.append('episode',episode)
      genr.map(function (gr) {
          formField.append('genres',gr)  
      })
      formField.append('producers',producers)
      formField.append('rate',rate)
      formField.append('release',release)
      formField.append('status',status)
      
      formField.append('link_360',link_360)
      formField.append('link_480',link_480)
      formField.append('link_720',link_720)
      formField.append('link_1080',link_1080)
      formField.append('link_360',link1_360)
      formField.append('link_480',link1_480)
      formField.append('link_720',link1_720)
      formField.append('link_1080',link1_1080)
      
      formField.append('slug',slug)
        // alert(formField)
        
        try {
            axios
            .put(`http://localhost:8000/api/enjeItem/${id_item}/`, formField)
            .then((res) => {
              alert("SUKSES")
              window.location.reload(false)
            });
        } catch (error) {
            alert(error)
        }
        
        
    }
    const DeletItem =  async() =>{
      try {
        axios
        .delete(`http://localhost:8000/api/enjeItem/${id_item}`)
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
    const handleChangeType = e => {
        const { value, checked } = e.target;
        if (checked) {
          // push selected value in list
          setty_pe(prev => [...prev, value]);
        } else {
          // remove unchecked value from the list
          setty_pe(prev => prev.filter(x => x !== value));
        }
      }
      const handleChangeGenre = e => {
        const { value, checked } = e.target;
        if (checked) {
          // push selected value in list
          setgenr(prev => [...prev, value]);
        } else {
          // remove unchecked value from the list
          setgenr(prev => prev.filter(x => x !== value));
        }
      }
  return (
    <>
    <div className="banner" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original//rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg")`}}></div>
    <div className="mb-3 movie-content container">
        <div className="movie-content__poster">
          <table>
            <tr>
              <th>Title</th>
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
                  <td>{val.title}</td>
                  <td>{val.category}</td>
                </tr>
              )
            })}
          </table>
          <button className='btn-update' onClick={showUpdate} > UPDATE </button>
          <button className='btn-delete' onClick={DeletItem}> DELETE </button>
        </div>
        <div className={shows ? 'none' : 'update-hide'}>
        <div className="movie-content__info">
            <h1>SETUP ITEM</h1>
            <div className="genres">     
                <span className='label_input'>
                    Backdrop : <input type="file" className='checkbox-outline' name='backdrop' accept={backdrop} src={backdrop}
                    onChange={(e) => setbackdrop(e.target.files[0])}/></span>
            </div>
            <div className="genres">     
                <span className='label_input'>
                    Poster   : <input type="file" className='checkbox-outline' name='poster' src={poster}
                    onChange={(e) => setposter(e.target.files[0])}/></span>
            </div>
            <div className="genres">     
                <span className='label_input'>
                    title : 
                    <input type="text" placeholder="Enter keyword"
                    name='title'
                    value={title}
                    onChange={(e) => settitle(e.target.value)}/></span>
            </div>
            <div className="genres">     
                <span className='label_input'>
                    episode : 
                    <input type="text" placeholder="Enter keyword"
                    name='episode'
                    value={episode}
                    onChange={(e) => setepisode(e.target.value)}/></span>
            </div>
            <div className="genres">     
                <span className='label_input'>
                    producers : 
                    <input type="text" placeholder="Enter keyword"
                    name='producers'
                    value={producers}
                    onChange={(e) => setproducers(e.target.value)}/></span>
            </div>
            <div className="genres">     
                <span className='label_input'>description : 
                    <input type="text" placeholder="Enter keyword"
                    name='description'
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}/></span>
            </div>
            <div className="genres">     
                <span className='label_input'>rate : 
                    <input type="text" placeholder="Enter keyword"
                    name='rate'
                    value={rate}
                    onChange={(e) => setrate(e.target.value)}/></span>
            </div>
            <div className="genres">     
                <span className='label_input'>status : 
                    <input type="text" placeholder="Enter keyword"
                    name='status'
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}/></span>
            </div>
            <div className="genres">     
                <span className='label_input'>release date : 
                    <input type="text" placeholder="Enter keyword"
                    name='release'
                    value={release}
                    onChange={(e) => setrelease(e.target.value)}/></span>
            </div>
            <div className="genres">
                <h4>category :</h4>
                {categorys.map(function(categorye){
                  if(category.indexOf(categorye)>-1){
                    return <span><input
                    type="checkbox"
                    name="category"
                    checked={true}
                    value={[categorye]}
                    onChange={handleChangeCategory}
                  />{categorye}</span>
                  }else{
                    return <span><input
                    type="checkbox"
                    name="category"
                    checked={false}
                    value={[categorye]}
                    onChange={handleChangeCategory}
                  />{categorye}</span>
                  }
                   
                })}
            </div>
            <div className="genres">
                <h4>Type :</h4>
                {tipes.map(function(tp){
                  if(ty_pe.indexOf(tp)>-1){
                    return <span><input
                    type="checkbox"
                    name="Ty_pe"
                    checked={true}
                    value={[tp]}
                    onChange={handleChangeType}
                  />{tp}</span>
                  }else{
                    return <span><input
                    type="checkbox"
                    name="Ty_pe"
                    checked={false}
                    value={[tp]}
                    onChange={handleChangeType}
                  />{tp}</span>
                  }
                   
                })}
                
            </div>
            <div className="genres">
                <h4>genre :</h4>
                {genres.map(function(genre){
                  if(genr.indexOf(genre) > -1){
                    return <span><input
                    type="checkbox"
                    name="genr"
                    checked={true}
                    value={[genre]}
                    onChange={handleChangeGenre}
                  />{genre}</span>
                  }
                  else{
                    return <span><input
                    type="checkbox"
                    name="genr"
                    checked={false}
                    value={[genre]}
                    onChange={handleChangeGenre}
                  />{genre}</span>
                  }
                    
                })}
                
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
                <span className='label_input'>slug : 
                    <input type="text" placeholder="Enter keyword"
                    name='slug'
                    value={slug}
                    onChange={(e) => setslug(e.target.value)}/></span>
            </div>
            <button className='btn-save' onClick={UpdateItem}> SAVE </button>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default UpdateDelPage;