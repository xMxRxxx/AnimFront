import React, { useEffect, useState, useRef} from 'react';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Button, { OutlineButton } from '../../components/button/Button';
import './ListEpisod.scss';

import Modal, { ModalContent } from '../../components/modal/Modal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PopupLink from './PopupLink';

const ListEpisod = props => {
  const link = '/' + 'film/details' + '/';
  const [item, setItem] = useState([]);
  const streamlink="";
  useEffect(() => {
        fetch(`http://127.0.0.1:8000/film/subdetail/${props.id}`,{
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
    {item.map((x,y)=>(
      <div className="section mb-3">
          <div className="section__header mb-3">
              <h2>{x.title}</h2>
              <div>
              <HeroSlideItem item={x} />
              </div>
          </div>
          <StreamModal key={y} item={x}/>
      </div>
    ))}
    </>
    
  )
} 
const HeroSlideItem = props => {
  const nameLink = ["GOOGLE DRIVE","ZIPPESHARE"];
  const item = props.item;
  const [visibility, setVisibility] = useState(false);
 
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const setModalActive = async () => {
      const modal = document.querySelector(`#modal_${item.id}`);

      if (item.stream_link.length > 0) {
          const videSrc = 'https://www.youtube.com/embed/' + item.stream_link;
          modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
      } else {
          modal.querySelector('.modal__content').innerHTML = 'No trailer';
      }

      modal.classList.toggle('active');
  }
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
    // window.location.assign(url);
  };

  return (
    <div className="btns">
      
      <Button className="btn" onClick={setModalActive}>
        Stream
      </Button>
      <Button className="btn1" onClick={(e) => setVisibility(!visibility)}>
        Download
      </Button>
      {/* <Button onClick={togglePopup}>
         Download
      </Button>
      {isOpen && <LinkModal
    />} */}
 
      <PopupLink
        onClose={popupCloseHandler}
        show={visibility}
        title="Link Download"
      >
        <h3>360</h3>
        {
          item.link_360.map((lks, i) => (
              <span key={i} ><a onClick={() => openInNewTab(lks)}>{
                i===0 ? <h4>GoogleDrive</h4> : <h4>ZippyShare</h4>
            } </a> </span>
          ))
        }
        <h3>480</h3>
        {
          item.link_480.map((lks, i) => (
              <span key={i} ><a onClick={() => openInNewTab(lks)}>{
                i===0 ? <h4>GoogleDrive</h4> : <h4>ZippyShare</h4>
            } </a> </span>
          ))
        }
        <h3>720</h3>
        {
          item.link_720.map((lks, i) => (
              <span key={i} ><a onClick={() => openInNewTab(lks)}>{
                i===0 ? <h4>GoogleDrive</h4> : <h4>ZippyShare</h4>
            } </a> </span>
          ))
        }
        <h3>1080</h3>
        {
          item.link_1080.map((lks, i) => (
              <span key={i} ><a onClick={() => openInNewTab(lks)}>{
                i===0 ? <h4>GoogleDrive</h4> : <h4>ZippyShare</h4>
            } </a> </span>
          ))
        }
      </PopupLink>
                      
    </div>
      
  )
}

const StreamModal = props => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
      <Modal active={false} id={`modal_${item.id}`}>
          <ModalContent onClose={onClose}>
              <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
          </ModalContent>
      </Modal>
  )
}


export default ListEpisod