import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product title='Funko POP! NFL: Lamar Jackson' price={18.99} image='https://m.media-amazon.com/images/I/61l80KEogWL.__AC_SX300_SY300_QL70_FMwebp_.jpg' rating={5} />
          <Product title='Mens 2023 Snowtrooper Snowboard' price={599.95} image='https://m.media-amazon.com/images/I/5164ZYvl1QL._AC_SX679_.jpg' rating={5}/>
        </div>
        <div className="home_row">
        </div>
        <div className="home_row">
        </div>
      </div>
    </div>
  );
};

export default Home