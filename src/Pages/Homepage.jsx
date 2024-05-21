import React, { useState } from "react";
import TopNavbar from "../Components/TopNavbar";
import Card from "../Components/Cards";
import ImageSearcher from "../Components/ImagesSearch";

function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [imageData, setImageData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=pXM-F0iBJwWBRPv2je4qjADiX_KziPhhWw4U1aMMrH0`
      );
      if (response.ok) {
        const data = await response.json();
        setImageData(data.results);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      fetchData();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <TopNavbar />
      <div className="container mx-auto px-8">
        <h2 className="text-[30px] my-5 text-center mb-0">Home Page</h2>
        <p className="text-[18px] font-medium text-center">
          Dive into PhotoFlex: Your treasure trove of stunning visuals awaits!
        </p>
        <p className="text-[15px] text-center mt-2 mb-5">
          PhotoFlex is your one-stop destination for high-quality images. Explore a world of visuals right at your fingertips. Unleash the power of imagery with our easy-to-use search bar.
        </p>
        <div className="search-bar mx-auto text-center bg-white w-1/3 rounded-[12px] py-1 flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search Images..."
            className="search-input text-[25px] mr-5 border-e-red border-e-[1px] bg-transparent ml-3"
          />
          <button onClick={handleSearch} type="submit" className="search-button text-white bg-[#6BB4B4] px-4 py-2 rounded-[5px]">
            Search
          </button>
        </div>
        {imageData.length > 0 && <ImageSearcher data={imageData} />}
        <div className="cards-section grid grid-cols-3 gap-10">
          {imageData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              imageUrl={item.urls.regular}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
