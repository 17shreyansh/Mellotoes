import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import shoeGroup from '../assets/b4.png';

const ShippingGuaranteeBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        padding: '40px 0 0 0',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Row
        gutter={[0, 0]}
        style={{
          width: '100%',
          maxWidth: '1400px',
          alignItems: 'center',
          position: 'relative',
          flexWrap: 'wrap',
        }}
      >
        {/* Text Box */}
        <Col
          xs={24}
          md={24}
          style={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              backgroundColor: '#1C4352',
              borderRadius: '140px',
              padding: isMobile ? '40px 20px' : '40px 150px',
              width: isMobile ? '90vw' : '75vw',
              minHeight: isMobile ? 'auto' : '500px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
              marginRight: isMobile ? '0' : '-15%',
              textAlign: isMobile ? 'center' : 'right',
            }}
          >
            <div
              style={{
                color: '#F0D8B6',
                fontSize: isMobile ? '32px' : '60px',
                fontWeight: 600,
                fontFamily: 'Montserrat, sans-serif',
                maxWidth: '500px',
              }}
            >
              <div>Free Shipping</div>
              <div>Easy Returns</div>
              <div>100% Comfort Guarantee</div>
            </div>
          </div>
        </Col>

        {/* Shoe Image */}
        <img
          src={shoeGroup}
          alt="Group of stylish shoes showcasing comfort and design"
          style={{
            position: isMobile ? 'relative' : 'absolute',
            left: isMobile ? '0' : '0',
            top: isMobile ? '-100px' : '50%',
            transform: isMobile ? 'none' : 'translateY(-50%)',
            width: isMobile ? '60%' : '55%',
            maxWidth: '600px',
            margin: isMobile ? '20px auto 0 auto' : '0',
            display: 'block',
            objectFit: 'contain',
            zIndex: 2,
          }}
        />
      </Row>
    </div>
  );
};

export default ShippingGuaranteeBanner;
