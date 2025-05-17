import React, { useState, useEffect } from 'react';
import { Typography, Button, Space, Card } from 'antd';

const { Title } = Typography;

const PromoBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Add a listener for screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      style={{ 
        display: 'flex', 
        width: '100%', 
        margin: isMobile ? '40px 0' : '80px 0',
        flexDirection: 'row', // Always keep side by side
        overflow: 'hidden', // For small screens to prevent horizontal scroll
      }}
    >
      <Card
        bordered={false}
        style={{
          width: isMobile ? '60%' : '50%',
          backgroundColor: '#1C4352',
          borderRadius: 0,
          padding: isMobile ? '20px 15px' : '40px 60px',
          height: isMobile ? '400px' : '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: "Montserrat"
        }}
      >
        <Space direction="vertical" size="large">
          <div>
            <Title
              level={2}
              style={{
                color: '#F0D8B6',
                margin: 0,
                marginBottom: '10px',
                fontSize: isMobile ? '24px' : '5vw', 
                fontWeight: 'bold',
                lineHeight: isMobile ? '1.2' : '1.3',
              }}
            >
              Free Shipping<br/>
              Easy Returns<br/>
              100% Comfort<br/>
              Guarantee
            </Title>
          </div>
          <Button
            type="default"
            size={isMobile ? 'middle' : 'large'}
            style={{
              backgroundColor: '#F0D8B6',
              border: 'none',
              borderRadius: '20px',
              fontWeight: 'bold',
              width: isMobile ? '150px' : '180px',
              height: isMobile ? '40px' : '45px',
              marginTop: '20px',
              fontSize: isMobile ? '12px' : '14px',
            }}
          >
            SHOP NOW
          </Button>
        </Space>
      </Card>
      <div
        style={{
          width: isMobile ? '40%' : '50%',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'10\' height=\'10\' fill=\'%23f0f0f0\'/%3E%3Crect x=\'10\' y=\'10\' width=\'10\' height=\'10\' fill=\'%23f0f0f0\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: isMobile ? '15px 15px' : '20px 20px',
          height: isMobile ? '400px' : '600px',
        }}
      />
    </div>
  );
};

export default PromoBanner;