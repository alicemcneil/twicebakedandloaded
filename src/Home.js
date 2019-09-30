import React from 'react';
import './assets/css/Home.scss';

function Home() {
  return (
    <div className="shell">

      <div className="nav">
        <a href="#home" className="home icon">home</a>
        {/* <p className="nav-title">Twice baked and loaded</p> */}
        <a href="tel:07766197840" className="right phone icon">phone</a>
        <a href="mailto:paul@twicebakedandloaded.com" className="right mail icon">mail</a>
      </div>
      <div className="header" id="home">
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
          {/* <div className="arrow-cont">
            <a className="arrow-up">
              circle-up
          </a>
          </div> */}
        </div>

        <div className="description-slip">
          <div>
            <h4>Twice Baked and Loaded Potato Company are based in Holt, Wiltshire. They serve delicious potatoes at festivals, street markets and are available for private parties or weddings.</h4>
          </div>
        </div>

        <div className="dark-slice">
          <div className="dark-slice-content">
            <div className="slice-text">
              <h3 className="slice-h3">
                One Potato, Two Potato, Three Potato... <span className="paul">Paul</span>
            </h3>
              <p className="slice-p">
                Meet Paul McNeil, the man behind the stand. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <img className="slice-img" src={require("./assets/images/paul.png")} />
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}

export default Home;
