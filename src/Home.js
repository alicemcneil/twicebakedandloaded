import React from 'react';
import './assets/css/Home.css';

function Home() {
  return (
    <div className="shell">

      <div className="nav">
        <a>home</a>
        <a href="tel:07766197840" className="right">phone</a>
        <a href="mailto:paul@twicebakedandloaded.com" className="right">mail</a>
      </div>

      <div className="header">
        <div className="banner1">
          <span>Welcome to</span>
        </div>
        <div className="header-img">
          <div className="banner2">
            <div>Twice Baked</div>
            <div className="line2">and Loaded</div>
          </div>
          <div className="banner3">
            <span>Potato Company</span>
          </div>
          <div className="arrow-cont">
            <a className="arrow-up">
              circle-up
          </a>
          </div>

        </div>
        <div className="dark-slice">
          <div className="slice-text">
            <h3>
              One Potato, Two Potato, Three Potato... Paul
        </h3>
            <p>
              Meet Paul McNeil, the man behind the stand.
        </p>
          </div>
          <div className="slice-img">
            <img src={require("./assets/images/paul.png")} />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;
