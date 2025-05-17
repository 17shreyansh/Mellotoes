import React from 'react';
import { Row, Col, Typography } from 'antd';
import ShoeCategoryCard from './ShoeCategoryCard'; // Adjust the path as needed
import s1 from '../assets/shoe1.png'; // Example imports
import s2 from '../assets/shoe2.png';
import s3 from '../assets/shoe3.png';

const { Title } = Typography;

const ShoeCategorySection = () => {
  return (
    <div style={{ padding: '40px 0px', overflow:"hidden" }}>
      {/* Heading */}
      <Title level={1} style={{ textAlign: 'left', margin: '50px', fontFamily: 'Outfit', color: '#1C4352',textTransform:"uppercase", fontWeight:"700" }}>
        Categories
      </Title>

      {/* Responsive Grid */}
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8} style={{ display: 'flex', justifyContent: 'center' }}>
          <ShoeCategoryCard category="MEN" shoeImage={s1} />
        </Col>
        <Col xs={24} sm={12} md={8} style={{ display: 'flex', justifyContent: 'center' }}>
          <ShoeCategoryCard category="WOMEN" shoeImage={s2} />
        </Col>
        <Col xs={24} sm={12} md={8} style={{ display: 'flex', justifyContent: 'center' }}>
          <ShoeCategoryCard category="KIDS" shoeImage={s3} Scale={1.3} />
        </Col>
      </Row>
    </div>
  );
};

export default ShoeCategorySection;
