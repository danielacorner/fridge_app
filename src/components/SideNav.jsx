import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Divider from '@material-ui/core/Divider';

const IconText = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  align-items: center;
`;
class SideNav extends React.Component {
  render() {
    const sideList = (
      <List style={{ width: 250 }}>
        <Link className="navbar-item" to="/recipes">
          <ListItem>
            <IconText>
              <img
                src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/recipes-icon.png"
                alt="Fridge"
                style={{ height: 40, width: 'auto' }}
              />
              <ListItemText primary="Recipes" />
            </IconText>
          </ListItem>
        </Link>
        <Divider style={{ marginTop: 1 }} />
        <Link className="navbar-item" to="/grocery-list">
          <ListItem>
            <IconText>
              <img
                src="https://cdn0.iconfinder.com/data/icons/shopping-41/70/groceries-512.png"
                alt="Fridge"
                style={{ height: 40, width: 'auto' }}
              />
              <ListItemText primary="Grocery List" />
            </IconText>
          </ListItem>
        </Link>
        <Divider />
        <Link className="navbar-item" to="/fridge">
          <ListItem>
            <IconText>
              <img
                src="https://lh3.googleusercontent.com/PquhjmNAwNX8A7GM1DIteRBX3nGLXtS52TL748pT2IfgoBf_apHanKKOT_tl9WPnB08=s180-rw"
                alt="Fridge"
                style={{ height: 40, width: 'auto' }}
              />
              <ListItemText primary="My Fridge" />
            </IconText>
          </ListItem>
        </Link>
      </List>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.isOpen}
          onClose={() => this.props.toggleDrawer(false)}
          onOpen={() => this.props.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.props.toggleDrawer(false)}
            onKeyDown={() => this.props.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default SideNav;
