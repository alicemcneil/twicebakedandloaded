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
            <h4><span>Twice Baked and Loaded Potato Company</span> are based in Holt, Wiltshire. They serve delicious potatoes at festivals, street markets and are available for private parties or weddings.</h4>
          </div>
        </div>

        <div className="black-slice">
          <div className="black-slice-content">
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

        <div className="contact-slip">
          <div>
            <h4><span>Contact Paul: </span>
              <a href="tel:07766197840" className="icon">phone</a><a href="tel:07766197840" className="link">07766197840</a>
              <a href="mailto:paul@twicebakedandloaded.com" className="icon">mail</a><a href="mailto:paul@twicebakedandloaded.com" className="link">paul@twicebakedandloaded.com</a> </h4>
          </div>
        </div>

        <div className="brown-slice">
          <div className="brown-slice-content">
            <div className="slice-text">
              <h3 className="slice-h3">
                ...But Why <span className="paul">Potatoes?</span>
              </h3>
              <p className="slice-p">
                Potatoes are delicious and nutrious. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <img className="slice-img" src={require("./assets/images/why-potatoes.png")} />
            </div>
          </div>
        </div>

        <div className="insta-slip">
          <div className="insta-slip-cont">
            <div className="img-cont">
              <img className="slide-img" src={require("./assets/images/insta1.png")} />
              <img className="slide-img" src={require("./assets/images/insta2.png")} />
              <img className="slide-img" src={require("./assets/images/insta3.png")} />
              <img className="slide-img" src={require("./assets/images/insta4.png")} />
              <img className="slide-img" src={require("./assets/images/insta5.png")} />
              <img className="slide-img" src={require("./assets/images/insta6.png")} />
              <img className="slide-img" src={require("./assets/images/insta7.png")} />
            </div>
          </div>
          <div className="insta-link">          
          <span>#twicebakedandloaded</span>
            <a href="https://www.facebook.com/Twice-Baked-and-Loaded-Potato-Company-100501174636828/" target="_blank" className="icon">facebook2</a><a href="https://www.facebook.com/Twice-Baked-and-Loaded-Potato-Company-100501174636828/" className="link">/TwiceBakedandLoaded</a>
            <a href="https://www.instagram.com/twicebakedandloaded/" target="_blank" className="icon">instagram</a><a href="https://www.instagram.com/twicebakedandloaded/" className="link">@twicebakedandloaded</a>
          </div>
        </div>


        <div className="black-slice">
          <div className="black-slice-content">
            <div className="slice-text">
              <h3 className="slice-h3">
                Twice Baked and loaded with <span className="paul">Sustainablity</span>
              </h3>
              <p className="slice-p">
                We are trying to do our bit, we refuse to use single-use plastics. We don't see plastic bottles and use 100% recycled napkins and cardboard boxes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu ea commodo consequat.
              </p>
            </div>
            <div>
              <img className="slice-img" src={require("./assets/images/sustainabilty.png")} />
            </div>
          </div>
        </div>


      </div >

    </div >
  );
}

export default Home;
