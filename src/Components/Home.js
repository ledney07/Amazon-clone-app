import React from "react";
import mainImage from "../assets/mainImage/amazon-bgr-gift.jpg";
import "./Css/Home.css";
import Product from "./Products";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={mainImage} alt="amazon gift img" />
        <div className="home__row">
          <Product
            id="23435"
            title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
            price={1500}
            image="https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Air_Late_2020_M1_8_Core_GPU_2C_8_GB_RAM_256_GB/macbook_air_m1.png"
            rating={4}
          />

          <Product
            id="83215"
            title="Hoover Pet Max Complete Bagless Upright Vacuum Cleaner, UH74110, Red Pearl "
            price={169.99}
            image="https://m.media-amazon.com/images/I/41JWvXo6quL.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="20450"
            title="VIZIO M-Series Quantum 50” | Class (49.5” diag.) 4K HDR Smart TV"
            price={350.45}
            image="https://cdn-ssl.vizio.com/media/catalog/product/cache/1/image/1920x1395/040ec09b1e35df139433887a97daa66f/r/s/rs12770_2018_d-series_d40f-g9_hero.jpg"
            rating={3}
          />
          <Product
            id="13536"
            title="PlayStation 5 | with Additional Controller "
            price={499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SX342_.jpg"
            rating={3}
          />

          <Product
            id="92410"
            title="XBOX SERIES X 1TB Console with Additional Controller"
            price={450.45}
            image="https://media.gamestop.com/i/gamestop/11108371/Xbox-Series-X?$pdp$"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="46485"
            title=" Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR"
            price={1000.34}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425569_sd.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
