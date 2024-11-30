import React from "react";
import "./home.css";


const Home = () => {


  return (
    <>
      <section className="homeContent" id="home">
        <div className="containerHomeContent">
          <h2>Unmissable Prices</h2>
          <p>
            Only here You can find the best offers on air tickets to national
            and international destinations.
            <br></br> Our mission is to offer you a smooth and affordable travel
            experience, with options to suit your style and budget.
          </p>
          <div className="homeButtonContent">
            <button>All destinations</button>
            <button>More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
