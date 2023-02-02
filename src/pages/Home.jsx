import React from "react";
import News from "../Components/News";
// import banner from "../imgs/crew.jpg";
import "../Sass/home.css";
const Home = () => {
  return (
    <>
      <header>
        <div className="bannerinfo">
          <p className="title">Breaking News!</p>
          <p className="decsription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus eligendi doloribus explicabo hic sint, vero ab, deleniti
            a tempora nihil neque. Voluptate libero ullam dolores non
            exercitationem, quibusdam ut quisquam!
          </p>
        </div>
      </header>
      <div className="news-list">
        {/* news */}
        <News />
        {/* <img src={require('../imgs/1.jpg')} alt="" /> */}
      </div>
    </>
  );
};

export default Home;
