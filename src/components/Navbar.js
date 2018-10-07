import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/AccountCircle';
import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    isMobile: false,
    mobileMenuOpen: false
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize() {
    console.log('hey! resizing over here');
    this.setState({ isMobile: window.innerWidth <= 500 });
  }
  openMenu() {
    this.setState({ mobileMenuOpen: true });
  }
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
              </figure>
            </Link>
          </div>

          {this.state.isMobile ? (
            <IconButton onClick={this.openMenu}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div className="navbar-start">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/items">
                Items
              </Link>
            </div>
          )}

          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton onClick={this.props.onAccountClick}>
                <AccountIcon />
              </IconButton>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
