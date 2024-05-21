import React from "react";
import { Link, useLocation } from "react-router-dom";

function Card({ title, imageUrl, description, link }) {
  const location = useLocation();

  // Check if the current location's pathname is the homepage
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="card">
        <div className="card-info">
          <img src={imageUrl} width="300px" height="200px" alt={title} />
          <div className="container">
            {/* <p className='mb-4'>{description}</p> */}
            {isHomePage && (
              <Link
                className="border-b-2 border-[#6BB4B4] text-white px-2 py-1"
                to={link}
              >
                <h4 className="mt-2 card-tile">{title} <span className="arrow">&rarr;</span></h4>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
