import React from 'react';
import { Typography, Row, Col } from 'antd';

const BrandsShowcase = () => {
    const brands = [
        { name: "Nike", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.1/nike.svg" },
        { name: "Adidas", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.1/adidas.svg" },
        { name: "Puma", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.1/puma.svg" },
        { name: "New Balance", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.1/newbalance.svg" },
        { name: "Reebok", logo: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.1/reebok.svg" },
    ];

    const containerStyle = {
        position: 'relative',
        width: '100%',
        padding: '60px 0',
        overflow: 'hidden',
        background: 'linear-gradient(to right, #f5f5f5, #e0e0e0)',
    };

    const backgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.1/simpleicons.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05,
        zIndex: 0,
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1,
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 20px',
    };

    const titleStyle = {
        textAlign: 'center', margin: '0 0 50px 0', fontFamily: 'Outfit', color: '#1C4352', textTransform: "uppercase", fontWeight: "700"
    };

    const brandCircleStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: '50%',
        width: 120,
        height: 120,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease',
    };

    const brandLogoStyle = {
        width: '60%',
        height: '60%',
        filter: 'invert(30%)',
        transition: 'transform 0.3s ease',
    };

    return (
        <div style={containerStyle}>
            <div style={backgroundStyle}></div>
            <div style={contentStyle}>
                <Typography.Title level={1} style={titleStyle}>
                    BRANDS
                </Typography.Title>
                <Row justify="center" gutter={[24, 24]}>
                    {brands.map((brand, index) => (
                        <Col key={index}>
                            <div
                                style={{
                                    ...brandCircleStyle,
                                    width: window.innerWidth >= 992
                                        ? 160
                                        : window.innerWidth >= 768
                                            ? 140
                                            : 120,
                                    height: window.innerWidth >= 992
                                        ? 160
                                        : window.innerWidth >= 768
                                            ? 140
                                            : 120,
                                }}
                                onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    '0 6px 12px rgba(0, 0, 0, 0.15)')
                                }
                                onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    '0 4px 8px rgba(0, 0, 0, 0.1)')
                                }
                            >
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    style={brandLogoStyle}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default BrandsShowcase;
