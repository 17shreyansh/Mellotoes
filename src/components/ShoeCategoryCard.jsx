import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import backgroundImage from '../assets/b3.png';

const ShoeCategoryCard = ({ category, shoeImage, onClick, Scale = 1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardSize, setCardSize] = useState({ width: 400, height: 450 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 576) {
        setCardSize({ width: 280, height: 340 }); // Mobile
      } else if (width < 768) {
        setCardSize({ width: 320, height: 380 }); // Tablet
      } else {
        setCardSize({ width: 400, height: 450 }); // Desktop
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize); // Listen to resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <Card
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: cardSize.width,
        height: cardSize.height,
        position: 'relative',
        padding: 0,
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
        border: 'none',
      }}
      bodyStyle={{ padding: 0, height: '100%' }}
    >
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Shoe Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: `translateX(-50%) scale(${isHovered ? 1.1 : 1})`,
          height: '70%',
          zIndex: 1,
          transition: 'transform 0.4s ease',
        }}
      >
        <img
          src={shoeImage}
          alt={category}
          style={{
            height: '100%',
            objectFit: 'contain',
            transform: `scale(${Scale})`,
          }}
        />
      </div>

      {/* Category Text */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 'calc(100% - 40px)',
        }}
      >
        <h2
          style={{
            margin: '40px auto',
            color: '#0D3B3B',
            fontSize: '40px',
            fontFamily: 'Outfit',
          }}
        >
          {category}
        </h2>
      </div>
    </Card>
  );
};

export default ShoeCategoryCard;
