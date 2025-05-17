import React from "react";
import { Row, Col } from "antd";
import "antd/dist/reset.css";

import sampleImg from "../assets/sample.jpeg";

const images = [sampleImg, sampleImg, sampleImg, sampleImg];

const ImageGrid = () => {
  return (
    <div style={{ background: "#E2BF9B", padding: 16 }}>
      <Row
        gutter={[16, 16]}
        justify="center"
        style={{
          maxWidth: 1400,
          margin: "50px auto",
          alignItems: "stretch",
        }}
      >
        {/* Left side column */}
        <Col xs={24} md={16}>
          <div style={{ display: "flex", flexDirection: "column", height: "50%" }}>
            {/* Top wide image with 19:9 ratio using padding-top trick */}
            <div
              style={{
                width: "100%",
                position: "relative",
                paddingTop: `${(9 / 19) * 100}%`, // 47.37%
                marginBottom: 16,
              }}
            >
              <img
                src={images[0]}
                alt="image1"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 0,
                  display: "block",
                }}
              />
            </div>

            {/* Bottom two side-by-side images with fixed height (this is flexible for diffrent screen) */} 
            <div style={{ display: "flex", gap: 16, height: "100%" }}>
              <div style={{ flex: 1 }}>
                <img
                  src={images[1]}
                  alt="image2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 0,
                    display: "block",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <img
                  src={images[2]}
                  alt="image3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 0,
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </Col>

        {/* Right side tall image with 9:16 ratio using padding-top trick */}
        <Col xs={24} md={8}>
          <div style={{ width: "100%", position: "relative", paddingTop: `${(16 / 8) * 100}%` }}>
            <img
              src={images[3]}
              alt="image4"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 0,
                display: "block",
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ImageGrid;
