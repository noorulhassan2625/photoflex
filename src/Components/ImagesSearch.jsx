import React from 'react';
import Card from '../Components/Cards';

function ImageSearcher({ data }) {
  return (
    <div className="image-searcher mt-5">
      <h2 className="text-[24px] font-semibold mb-4">Few Results:</h2>
      <div className="grid grid-cols-3 gap-6">
        {data.map((image, index) => (
          <Card
            key={index}
            imageUrl={image.urls.small}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSearcher;
