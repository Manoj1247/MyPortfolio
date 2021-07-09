import { Menu } from "antd";
import { Anchor } from "antd";
import avatar from "../../assets/images/IMG_8422.JPG";
import { Link, BrowserRouter as Router } from "react-router-dom";
import AppHero from "../Home/AppHero";
import AppAbout from "../Home/About";
import AppContact from "../Home/Contact";

function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <img src={avatar} alt="Avatar" className="avatar" />
          <i class="fas fa-person"></i>
          <a href="http://www.google.com">Manoj Kalaganti</a>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/Home" className="Link" exact>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/About" className="Link">
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/Contact" className="Link">
              Contact
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/Resume" className="Link">
              Resume
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
export default AppHeader;
