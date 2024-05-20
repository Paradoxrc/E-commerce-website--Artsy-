import React from "react";
import { Link } from "react-router-dom";
import './Categories.css'


const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://img.freepik.com/free-vector/stylish-black-friday-sale-label-background_1017-34629.jpg?t=st=1714895826~exp=1714899426~hmac=3a33f93721e342e1c96c94831e45584c0cd21e143b670f423e57ecdf85a4da19&w=826"
            alt=""
          />
          <button className="category-button">
          <Link to="/products" style={{ color: 'black', textDecoration: 'none' }}>
  Sale
</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="category-button">
            <Link to="/products" style={{ color: 'black', textDecoration: 'none' }} className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://img.freepik.com/free-photo/jewelry-ring-with-blue-sapphire-3d-rendering_1057-36696.jpg?t=st=1714895672~exp=1714899272~hmac=eeef05a692fc99dab89e96ff673330e3b5b3592deb8a6eee0f6270245cd6edd8&w=826"
            alt=""
          />
          <button className="category-button">
            <Link to="/products" style={{ color: 'black', textDecoration: 'none' }} className="link">
              Jewelery
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1714895773~exp=1714899373~hmac=a416829124a83c136eaf2d736bb92caaf6806e6e4371fce9f01cd21d295339a1&w=826"
                alt=""
              />
              <button className="category-button">
                <Link to="/products" style={{ color: 'black', textDecoration: 'none' }} className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://img.freepik.com/free-vector/gaming-computer-device-seamless-pattern_1284-51634.jpg?w=826&t=st=1714895609~exp=1714896209~hmac=1414a13f7b47898aef2ae1cef19d8c8dc17cfbce1407446d3dcfae8765bda4d1"
                alt=""
              />
              <button className="category-button">
                <Link to="/products" style={{ color: 'black', textDecoration: 'none' }} className="link">
                  Accesories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?t=st=1714895351~exp=1714898951~hmac=06e98244a79dac31773d9801c51c81f1111bbdd76b0a1903db6689770ea46725&w=1380"
            alt=""
          />
          <button className="category-button">
            <Link to="/products" style={{ color: 'black', textDecoration: 'none' }} className="link">
              Electronics
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
