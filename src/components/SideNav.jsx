import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

class SideNav extends React.Component {
  render() {
    const sideList = (
      <List style={{ width: 250 }}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Send mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
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
