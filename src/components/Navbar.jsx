import React, { useState } from "react";
import { Menu, Dropdown, Space, Grid, Drawer, Button } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
  DownOutlined,
  EnvironmentOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const { useBreakpoint } = Grid;

const styles = {
  fontFamily: "'Outfit', sans-serif",
  topBar: {
    backgroundColor: "#05363D",
    color: "#E2BF9B",
    padding: "10px 20px",
    fontSize: "13px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomBar: {
    backgroundColor: "#255466",
    padding: "0px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  menuItem: {
    color: "#E2BF9B",
    fontWeight: "bold",
    marginRight: "25px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
  },
  iconLink: {
    color: "#E2BF9B",
    fontSize: "18px",
    textDecoration: "none",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },
  logo: {
    height: "50px",
    marginRight: "10px",
  },
  hamburger: {
    fontSize: "24px",
    color: "#E2BF9B",
    cursor: "pointer",
  },
};

const Navbar = () => {
  const screens = useBreakpoint();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const countryMenu = (
    <Menu
      items={[
        { key: "1", label: "India" },
        { key: "2", label: "USA" },
        { key: "3", label: "UK" },
      ]}
    />
  );

  const menuLinks = [
    { name: "Men", link: "/men" },
    { name: "Woman", link: "/woman" },
    { name: "Kids", link: "/kids" },
    { name: "Footwear", link: "/footwear" },
    { name: "Collections", link: "/collections" },
    { name: "Accessories", link: "/accessories" },
  ];

  return (
    <div style={{ fontFamily: styles.fontFamily, width:"100%", zIndex:10}}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <Space size="large">
          <Dropdown overlay={countryMenu}>
            <a style={{ color: "#E2BF9B", textDecoration: "none" }}>
              <EnvironmentOutlined /> INDIA <DownOutlined />
            </a>
          </Dropdown>
          <Link to="/track-order" style={styles.menuItem}>TRACK ORDER</Link>
          <Link to="/contact" style={styles.menuItem}>CONTACT US</Link>
        </Space>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        {/* Left: Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="logo" style={styles.logo} />
        </div>

        {/* Middle: Menu */}
        {!screens.md ? (
          <MenuOutlined style={styles.hamburger} onClick={() => setDrawerVisible(true)} />
        ) : (
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {menuLinks.map(({ name, link }) => (
              <Link key={name} to={link} style={styles.menuItem}>{name}</Link>
            ))}
            <Dropdown overlay={<Menu items={[{ key: "1", label: "More Item 1" }]} />}>
              <span style={{ ...styles.menuItem, display: "flex", alignItems: "center" }}>
                More <DownOutlined style={{ fontSize: "10px", marginLeft: 5 }} />
              </span>
            </Dropdown>
          </div>
        )}

        {/* Right: Icons */}
        <div style={styles.icons}>
          <Link to="/search" style={styles.iconLink}><SearchOutlined /></Link>
          <Link to="/account" style={styles.iconLink}><UserOutlined /></Link>
          <Link to="/wishlist" style={styles.iconLink}><HeartOutlined /></Link>
          <Link to="/cart" style={styles.iconLink}><ShoppingOutlined /></Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{ backgroundColor: "#255466", padding: 0 }}
        headerStyle={{ backgroundColor: "#1C4352", color: "#E2BF9B" }}
      >
        <Menu
          mode="vertical"
          style={{ backgroundColor: "#255466", color: "#E2BF9B", border: "none" }}
        >
          {menuLinks.map(({ name, link }) => (
            <Menu.Item key={name} style={{ backgroundColor: "#255466" }}>
              <Link to={link} style={styles.menuItem} onClick={() => setDrawerVisible(false)}>
                {name}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
