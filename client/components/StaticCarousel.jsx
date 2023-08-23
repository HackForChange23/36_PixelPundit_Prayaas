import React from 'react';

const StaticCarousel = () => {
  return (
    <div className="static-carousel">
      <div className="carousel-item">
        <img src="/image1.jpg" alt="Item 1" />
        <h3>Item 1</h3>
        <p>Description for Item 1</p>
      </div>
      <div className="carousel-item">
        <img src="/image2.jpg" alt="Item 2" />
        <h3>Item 2</h3>
        <p>Description for Item 2</p>
      </div>
      {/* Add more carousel items as needed */}
    </div>
  );
};

export default StaticCarousel;
