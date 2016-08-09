import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './VideoComponent.scss';

export class VideoComponent extends Component {

  static propTypes = {
    actions: PropTypes.object,
  };

  render() {
    return (
      <div>
        <video
               className="VideoComponent"
               loop
               autoPlay
               preload
               muted
               poster="//d1cid3xs4pymdr.cloudfront.net/videos/HSC-F16.jpg"
        >
          <source src="//d1cid3xs4pymdr.cloudfront.net/videos/HSC-F16.mp4" type="video/mp4" />
          <source src="//d1cid3xs4pymdr.cloudfront.net/videos/HSC-F16.webm" type="video/webm" />
          <source src="//d1cid3xs4pymdr.cloudfront.net/videos/HSC-F16.ogv" type="video/ogg" />
          Sorry your browser does not support video playback.
        </video>
        <ul className="VideoComponent--list" >
          <li className="" href="#">
            <Link to="/shop">
              <h1>Shop</h1>
            </Link>
          </li>
          <li className="" href="#">
            <Link to="/product">
              <h1>Product</h1>
            </Link>
          </li>
          <li className="" href="#">
            <Link to="/login">
              <h1>Login</h1>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default VideoComponent;
