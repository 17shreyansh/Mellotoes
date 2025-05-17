import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import B1 from "../assets/b1.png";

const Banner = () => {
  return (
    <div className="banner-container" style={{ padding: "20px 80px" }}>
      <style>
        {`
          @media (max-width: 768px) {
            .banner-container {
              padding: 20px !important;
            }

            .top-banner {
              flex-direction: column !important;
              gap: 0;
              position: relative;
            }

            .banner-image {
              display: none !important;
            }

            .overlay-text {
              position: static !important;
              transform: none !important;
              background-color: rgb(28, 67, 82) !important;
              color: white !important;
              width: 100% !important;
              padding: 20px !important;
              border-radius: 12px;
              text-align: center !important;
              max-width: 100% !important;
            }

            .overlay-text h2 {
              font-size: 28px !important;
              margin: 0 0 10px;
            }

            .overlay-text p {
              font-size: 14px !important;
              color: #e5e5e5 !important;
              line-height: 1.4 !important;
            }

            .explore-box {
              /* override PC styles */
              position: static !important;
              font-size: 16px !important;
              padding: 10px 0 !important;
              color: #1A1A1A;
              margin-top: 10px;
              display: inline-flex !important;
              align-items: center !important;
              gap: 8px !important;
              font-weight: 600;
              font-family: 'Montserrat', sans-serif;
              text-align: center;
              cursor: pointer;
            }

            .bottom-box {
              flex-direction: column !important;
              text-align: center !important;
              margin-top: 40px !important;
              padding: 20px !important;
            }

            .offer-text {
              padding: 10px !important;
            }

            .offer-text div {
              font-size: 20px !important;
            }

            .offer-text .discount {
              font-size: 24px !important;
              margin: 8px 0 !important;
            }

            .right-img {
              height: 200px !important;
              width: 100% !important;
              margin-left: 0 !important;
              margin-top: 20px;
            }
          }
        `}
      </style>

      {/* Top Banner Section */}
      <div
        className="top-banner"
        style={{
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={B1}
          alt="Banner"
          className="banner-image"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "12px",
          }}
        />

        {/* Overlay Content */}
        <div
          className="overlay-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "30px",
            transform: "translateY(-50%)",
            color: "white",
            maxWidth: "40%",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          <h2 style={{ fontSize: "65px", fontWeight: 700, margin: 0 }}>
            STEP INTO <span style={{ color: "#CBA977" }}>STYLE.</span>
            <br />
            WALK WITH <span style={{ color: "#CBA977" }}>CONFIDENCE.</span>
          </h2>
          <p
            style={{
              marginTop: "15px",
              fontSize: "14px",
              color: "#E5E5E5",
              lineHeight: "1.6",
            }}
          >
            Discover premium shoes that blend comfort, craftsmanship, and
            cutting-edge design — for every step you take.
          </p>
        </div>

        {/* EXPLORE NEW ARRIVALS */}
        <div
          className="explore-box"
          style={{
            position: "absolute",
            bottom: "20px",
            right: "0",
            color: "#1A1A1A",
            textAlign: "right",
            padding: "10px 16px",
            borderRadius: "12px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontSize: "30px",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          EXPLORE
          <br />
          NEW ARRIVALS <ArrowRightOutlined />
        </div>
      </div>

      {/* Bottom Offer Box */}
      <div
        className="bottom-box"
        style={{
          marginTop: "60px",
          backgroundColor: "#F3E2CD",
          borderRadius: "35px",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Offer Text */}
        <div
          className="offer-text"
          style={{ padding: "20px", textAlign: "left" }}
        >
          <div style={{ fontSize: "35px", fontWeight: 600 }}>
            FOOT WEAR
            <br /> COLLECTION
          </div>
          <div
            className="discount"
            style={{
              fontSize: "30px",
              fontWeight: 700,
              margin: "10px 0",
              color: "#1A3C40",
            }}
          >
            30% OFF
          </div>
          <div
            style={{
              backgroundColor: "#1A3C40",
              color: "white",
              padding: "8px 25px",
              borderRadius: "20px",
              display: "inline-block",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            SHOP NOW
          </div>
        </div>

        {/* Right Side Pattern Box */}
        <div
          className="right-img"
          style={{
            flex: 1,
            height: "350px",
            backgroundColor: "#fff",
            backgroundImage:
              "linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px",
            borderRadius: "10px",
            marginLeft: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
