import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const ProductCard = ({ name, description, price, image }) => {
  return (
    <Card
      hoverable
      style={{ width: 250, borderRadius: 8, border: 'none', marginBottom:50 }}
      bodyStyle={{ padding: '8px 12px 12px 12px' }} // reduce padding inside card body
      cover={
        <div
          style={{
            height: 300,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: 'none',
            backgroundColor:"gray" //remove
          }}
        />
      }
    >
      <Title level={5} style={{ marginBottom: 2 }}>{name}</Title>
      <hr/>
      <Text type="secondary" style={{ display: 'block', marginBottom: 2 }}>{description}</Text>
      <Text strong>${price}</Text>
    </Card>
  );
};

export default ProductCard;
