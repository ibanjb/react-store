import React, { Component, PropTypes } from 'react';
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
            <a href="#">
              <h1>SHOP</h1>
            </a>
          </li>
          <li className="" href="#">
            <a href="#">
              <h1>LOOKBOOK</h1>
            </a>
          </li>
          <li className="" href="#">
            <a href="#">
              <h1>BLOG</h1>
            </a>
          </li>
          <li className="" href="#">
            <a href="#">
              <h1>ABOUT</h1>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default VideoComponent;
