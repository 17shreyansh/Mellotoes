import React from 'react';
import { Typography } from 'antd';
import ProductCard from './ProductCard';
import Image from "../assets/shoes.png";

const { Title } = Typography;

const TrendingNow = () => {
  const products = new Array(5).fill({
    name: 'PRODUCT NAME',
    description: 'Product description',
    price: '1234',
    image: Image
  });

  return (
    <div style={{ padding: '0 50px', margin: '10px 0 0 0', overflow: "hidden", width: '100%', boxSizing: 'border-box' }}>
      <Title level={1} style={{ textAlign: 'right', margin: '50px 0', fontFamily: 'Outfit', color: '#1C4352', textTransform: "uppercase", fontWeight: "700" }}>
        TRENDING NOW
      </Title>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '10px',
        marginBottom: '48px'
      }}>
        {products.map((product, index) => (
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
    </div>
  );
};

export default TrendingNow;