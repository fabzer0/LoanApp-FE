import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, List, Responsive } from "semantic-ui-react";
import whiteLogo from "../landingPage/img/Logo.png";
import closeIcon from "../landingPage/img/hambuger-icon.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: whiteLogo,
      navLinksColor: "#ffffff",
      header: false
    };
    this.nav = React.createRef();
  }

  componentDidMount() {
    this.nav.current.style.backgroundColor = "#00E0E0";
  }

  handleMenuClick = () => {
    this.setState({ header: !this.state.header });
  };

  renderContent = () => {
    switch (this.props.isLoggedIn) {
      case null:
        return;
      case false:
        return (
          <div>
            <button
              style={{ color: this.state.navLinksColor }}
              className="button button-transparent"
            >
              <Link
                style={{
                  color: this.state.navLinksColor,
                  textDecoration: "none"
                }}
                to="/login"
              >
                Log In
              </Link>
            </button>
            <button className="button button-teal">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/register"
              >
                Get Funding
              </Link>
            </button>
          </div>
        );
      default:
        return (
          <button
            style={{ color: this.state.navLinksColor }}
            className="button button-transparent"
          >
            <a
              style={{
                color: this.state.navLinksColor,
                textDecoration: "none"
              }}
              href="http://localhost:5000/api/logout"
            >
              Logout
            </a>
          </button>
        );
    }
  };

  renderLinks = () => {
    switch (this.props.isLoggedIn) {
      case null:
        return;
      case false:
        return [
          <li>
            <a href="#how-it-works" style={{ color: this.state.navLinksColor }}>
              How it works?
            </a>
          </li>,
          <li>
            <a href="#why-Finlo" style={{ color: this.state.navLinksColor }}>
              Why Finlo?
            </a>
          </li>,
          <li>
            <a
              href="#need-more-help"
              style={{ color: this.state.navLinksColor }}
            >
              Contact
            </a>
          </li>
        ];
      default:
        return;
    }
  };

  render() {
    return (
      <div className="App-header" ref={this.nav}>
        <Responsive minWidth={768}>
          <div className="App-header--nav">
            <Link to={this.props.isLoggedIn ? "/dashboard" : "/login"}>
              <img
                src={this.state.logo}
                className="App-logo"
                alt="logo"
                onClick={this.handleClick}
              />
            </Link>
            <nav>
              <ul className="Header-nav">{this.renderLinks()}</ul>
            </nav>
            <div className="nav-buttons">{this.renderContent()}</div>
          </div>
        </Responsive>
        <Responsive maxWidth={767}>
          <Container className="responsiveHeader">
            <img src={this.state.logo} className="App-logo" alt="logo" />
            <div onClick={this.handleMenuClick}>
              <img
                style={{
                  height: "32px",
                  width: "32px"
                }}
                src={closeIcon}
                alt="close"
              />
            </div>
          </Container>
          {this.state.header && (
            <Container>
              <div
                style={{
                  margin: "1em"
                }}
              >
                <List link verticalAlign="center">
                  <List.Item
                    as="a"
                    className="responsive-nav"
                    href="#how-it-works"
                    style={{
                      color: this.state.navLinksColor,
                      padding: "1em"
                    }}
                    onClick={this.handleMenuClick}
                  >
                    How it works?
                  </List.Item>
                  <List.Item
                    as="a"
                    className="responsive-nav"
                    href="#why-Finlo"
                    style={{
                      color: this.state.navLinksColor,
                      padding: "1em"
                    }}
                    onClick={this.handleMenuClick}
                  >
                    Why Finlo?
                  </List.Item>
                  <List.Item
                    as="a"
                    className="responsive-nav"
                    href="#need-more-help"
                    style={{
                      color: this.state.navLinksColor,
                      padding: "1em"
                    }}
                    onClick={this.handleMenuClick}
                  >
                    Contact
                  </List.Item>
                  <List.Item onClick={this.handleMenuClick}>
                    <List.Content>
                      <button
                        style={{ color: this.state.navLinksColor }}
                        className="button button-transparent"
                      >
                        Log In
                      </button>
                    </List.Content>
                  </List.Item>
                  <List.Item onClick={this.handleMenuClick}>
                    <List.Content>
                      <button className="button button-teal">
                        Get Funding
                      </button>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </Container>
          )}
        </Responsive>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isLoggedIn } = state.authentication;
  return {
    isLoggedIn
  };
};

export default connect(mapStateToProps, null)(Header);
