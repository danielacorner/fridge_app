import { Link } from 'gatsby';
import logo from '../img/logo.png';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/AccountCircle';
import React, { Component } from 'react';
import BREAKPOINTS from '../../static/admin/BREAKPOINTS';
import styled from 'styled-components';
import SideNav from './SideNav';

const MenuItems = styled.div`
  display: grid;
  grid-auto-flow: column;
`;
const IconText = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: center;
`;

class Navbar extends Component {
  state = {
    isMobile: false,
    isMobileMenuOpen: false,
    scrollingDown: false,
    scrollPos: 0,
    scrollPosSinceScrollingUp: 0,
    scrollPosSinceScrollingDown: 0,
    navMarginTop: 0,
    scrolledPastNav: false
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleResize();
  };
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize.bind(this));
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  };

  handleScroll = () => {
    // a massive implementation of sticky / hidden nav while scrolling
    const scrollPos = document.body.getBoundingClientRect().top;
    const scrollingDown = scrollPos <= this.state.scrollPos;
    const scrollPosSinceScrollingDown = scrollingDown
      ? scrollPos
      : this.state.scrollPosSinceScrollingDown;
    const scrollPosSinceScrollingUp = !scrollingDown
      ? scrollPos
      : this.state.scrollPosSinceScrollingUp;
    const navMarginTop = !scrollingDown
      ? Math.min(-64 - scrollPosSinceScrollingDown + scrollPos, 0)
      : Math.max(scrollPos - scrollPosSinceScrollingUp, -64);
    const scrolledPastNav = navMarginTop <= -64;
    this.setState({
      scrollingDown,
      scrollPos,
      scrollPosSinceScrollingUp,
      scrollPosSinceScrollingDown,
      navMarginTop,
      scrolledPastNav
    });
  };
  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= BREAKPOINTS.mobile });
  };
  openMenu(bool) {
    this.setState({ isMobileMenuOpen: bool });
  }
  render() {
    const Container = styled.div`
      width: 100%;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: 1fr auto;
      ${this.state.isMobile &&
        `
        background: white;
        box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
        grid-template-columns: auto 1fr auto;
        position: fixed;
        top: 0px;
        margin-top: 0px;
        margin-top: ${this.state.navMarginTop}px;
        `};
    `;
    return (
      <nav className="navbar is-transparent">
        <Container>
          {this.state.isMobile && (
            <React.Fragment>
              <IconButton onClick={() => this.openMenu(true)}>
                <MenuIcon />
              </IconButton>
            </React.Fragment>
          )}
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img
                  src={logo}
                  alt="Fridge App"
                  style={{ height: 'auto', width: 'auto' }}
                />
              </figure>
            </Link>
          </div>

          {!this.state.isMobile && (
            <MenuItems>
              <Link className="navbar-item" to="/recipes">
                <IconText>
                  <img
                    src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/recipes-icon.png"
                    alt="Fridge"
                    style={{ height: 40, width: 'auto' }}
                  />
                  Recipes
                </IconText>
              </Link>
              <Link className="navbar-item" to="/products">
                <IconText>
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/shopping-41/70/groceries-512.png"
                    alt="Fridge"
                    style={{ height: 40, width: 'auto' }}
                  />
                  Ingredients
                </IconText>
              </Link>
              <Link className="navbar-item" to="/about">
                <IconText>
                  <img
                    src="https://lh3.googleusercontent.com/PquhjmNAwNX8A7GM1DIteRBX3nGLXtS52TL748pT2IfgoBf_apHanKKOT_tl9WPnB08=s180-rw"
                    alt="Fridge"
                    style={{ height: 40, width: 'auto' }}
                  />
                  My Fridge
                </IconText>
              </Link>
            </MenuItems>
          )}

          <div className="navbar-end">
            <IconButton onClick={this.props.onAccountClick}>
              <AccountIcon />
            </IconButton>
          </div>
        </Container>
        <SideNav
          isOpen={this.state.isMobileMenuOpen}
          toggleDrawer={bool => this.openMenu(bool)}
        />
      </nav>
    );
  }
}

export default Navbar;
