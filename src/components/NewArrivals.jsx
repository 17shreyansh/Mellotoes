import React, { useState, useEffect } from 'react';
import { Typography, Button } from 'antd';
import ProductCard from './ProductCard';
import Image from "../assets/shoes.png";

const { Title } = Typography;

const NewArrivals = () => {
  const allProducts = new Array(10).fill({
    name: 'PRODUCT NAME',
    description: 'Product description',
    price: '1234',
    image: Image
  });

  const [visibleCount, setVisibleCount] = useState(10);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setVisibleCount(mobile ? 4 : allProducts.length);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSeeMore = () => {
    setVisibleCount(allProducts.length);
  };

  const visibleProducts = allProducts.slice(0, visibleCount);

  return (
    <div style={{ padding: '0 50px', overflow: "hidden", width: '100%', boxSizing: 'border-box' }}>
      <Title level={1} style={{
        textAlign: 'left',
        margin: '40px 0',
        fontFamily: 'Outfit',
        color: '#1C4352',
        textTransform: "uppercase",
        fontWeight: "700"
      }}>
        NEW ARRIVALS
      </Title>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '10px',
        marginBottom: '24px'
      }}>
        {visibleProducts.map((product, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>

      {isMobile && visibleCount < allProducts.length && (
  <div style={{ textAlign: 'center', marginBottom: '48px' }}>
    <span
      onClick={handleSeeMore}
      style={{
        color: '#159895',
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: 'Outfit, sans-serif',
        cursor: 'pointer',
        textDecoration: 'underline',
        transition: 'color 0.3s ease'
      }}
      onMouseOver={(e) => (e.target.style.color = '#1C4352')}
      onMouseOut={(e) => (e.target.style.color = '#159895')}
    >
      See More
    </span>
  </div>
)}

    </div>
  );
};

export default NewArrivals;
