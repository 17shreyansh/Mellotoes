import React from 'react';
import { Row, Col, Typography, Space, List } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
  LinkedinFilled,
} from '@ant-design/icons';

import logo from '../assets/logo.jpg';
import backgroundImg from '../assets/lines.png';

const FooterSection = () => {
  const menuItems = [
    'Home',
    'About Us',
    'Men Footwear',
    'Women Footwear',
    'Kids Footwear',
    'Contact Us',
  ];

  const customerItems = [
    'Return Policy',
    'Shipping Info',
    'Track Order',
    'FAQs',
    'Terms & Conditions',
    'Privacy Policy',
  ];

  const containerStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundColor: '#F0D8B6',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '60px 30px',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(248, 231, 199, 0.85)',
    zIndex: 0,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const logoStyle = {
    maxWidth: '140px',
    marginBottom: '25px',
    borderRadius: '4px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  };

  const textStyle = {
    color: '#333',
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '12px',
  };

  const listItemStyle = {
    borderBottom: 'none',
    padding: '6px 0',
    cursor: 'pointer',
    transition: 'padding-left 0.3s ease, color 0.3s ease',
  };

  const bulletStyle = {
    color: '#006d77',
    fontWeight: 'bold',
    marginRight: '8px',
    fontSize: '16px',
  };

  const listItemTextStyle = {
    color: '#333',
    fontSize: '15px',
  };

  const titleStyle = {
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const socialIconStyle = {
    fontSize: '24px',
    color: '#000',
    marginRight: '16px',
    cursor: 'pointer',
    transition: 'color 0.3s ease, transform 0.3s ease',
  };

  const handleIconHover = (e, hover) => {
    e.currentTarget.style.color = hover ? '#006d77' : '#000';
    e.currentTarget.style.transform = hover ? 'scale(1.2)' : 'scale(1)';
  };

  const handleListItemHover = (e, hover) => {
    e.currentTarget.style.paddingLeft = hover ? '6px' : '0';
    e.currentTarget.style.color = hover ? '#006d77' : '#333';
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <Row gutter={[40, 40]} justify="space-between" align="top">
          {/* Logo & About */}
          <Col xs={24} sm={24} md={8} lg={6}>
            <img src={logo} alt="Mellowtoes Logo" style={logoStyle} />
            <Typography.Paragraph style={textStyle}>
              Step into comfort and style with our curated selection of footwear for everyone.
            </Typography.Paragraph>
            <Typography.Paragraph style={textStyle}>
              Crafted with care. Worn with love.
            </Typography.Paragraph>
          </Col>

          {/* Menu Items */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Typography.Title level={5} style={titleStyle}>Explore</Typography.Title>
            <List
              dataSource={menuItems}
              renderItem={(item) => (
                <List.Item
                  style={listItemStyle}
                  onMouseEnter={(e) => handleListItemHover(e, true)}
                  onMouseLeave={(e) => handleListItemHover(e, false)}
                >
                  <Space>
                    <span style={bulletStyle}>•</span>
                    <Typography.Text style={listItemTextStyle}>{item}</Typography.Text>
                  </Space>
                </List.Item>
              )}
            />
          </Col>

          {/* Customer Support */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Typography.Title level={5} style={titleStyle}>Customer Service</Typography.Title>
            <List
              dataSource={customerItems}
              renderItem={(item) => (
                <List.Item
                  style={listItemStyle}
                  onMouseEnter={(e) => handleListItemHover(e, true)}
                  onMouseLeave={(e) => handleListItemHover(e, false)}
                >
                  <Space>
                    <span style={bulletStyle}>•</span>
                    <Typography.Text style={listItemTextStyle}>{item}</Typography.Text>
                  </Space>
                </List.Item>
              )}
            />
          </Col>

          {/* Social Media */}
          <Col xs={24} sm={24} md={24} lg={6}>
            <Typography.Title level={5} style={titleStyle}>Follow Us</Typography.Title>
            <Space size="middle" wrap>
              <FacebookFilled
                style={socialIconStyle}
                onMouseEnter={(e) => handleIconHover(e, true)}
                onMouseLeave={(e) => handleIconHover(e, false)}
              />
              <InstagramFilled
                style={socialIconStyle}
                onMouseEnter={(e) => handleIconHover(e, true)}
                onMouseLeave={(e) => handleIconHover(e, false)}
              />
              <TwitterOutlined
                style={socialIconStyle}
                onMouseEnter={(e) => handleIconHover(e, true)}
                onMouseLeave={(e) => handleIconHover(e, false)}
              />
              <LinkedinFilled
                style={socialIconStyle}
                onMouseEnter={(e) => handleIconHover(e, true)}
                onMouseLeave={(e) => handleIconHover(e, false)}
              />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterSection;
