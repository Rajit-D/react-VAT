import React from 'react'
import './Blog.css';

const Blog = (props) => {
  return (
    <>
      <div className="fond">
        <span className="s1">blog </span>
        <span className="s2">card</span>
      </div>
      <div className="card">
        <div className="thumbnail">
          <img className="left" alt='' src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg" /></div>
        <div className="right">
          <h1>{props.title}</h1>
          <div className="author"><img src="https://randomuser.me/api/portraits/men/95.jpg" alt='' />
            <h2>{props.name}</h2>
          </div>
          <div className="separator"></div>
          <p>{props.content}</p>
        </div>
        <h5>12</h5>
        <h6>JANUARY</h6>
        <ul>
          <li><i className="fa fa-eye fa-2x"></i></li>
          <li><i className="fa-regular fa-heart fa-2x"></i></li>
          <li><i className="fa-regular fa-envelope fa-2x"></i></li>
          <li><i className="fa fa-share-alt fa-2x"></i></li>
        </ul>
        <div className="fab"><i className="fa fa-arrow-down fa-3x"></i></div>
      </div>
    </>
  )
}

export default Blog