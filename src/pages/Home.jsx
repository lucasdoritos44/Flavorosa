import React from "react";
import "./Home.css";
import dish1 from "../assets/dish1.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="desc">
        <div>
          <p className="home__p">Chase the new flavour</p>
          <h1 className="home__h1">The key to fine dining</h1>
        </div>
        <p className="home__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          earum. Pariatur eum officiis aut nobis repellat vel cum ad soluta non?
          Autem, quia natus unde accusantium cumque culpa recusandae nemo.
        </p>
      </div>
    </section>
  );
};

export default Home;
