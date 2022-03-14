/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PhonelinkSetupRoundedIcon from '@mui/icons-material/PhonelinkSetupRounded';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 80;

const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChatRoundedIcon sx={{fontSize: 35, mb:3}}/>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactsRoundedIcon sx={{fontSize: 35, mb:3}}/>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
             <AccountCircleRoundedIcon sx={{fontSize: 35, mb:3}}/>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <NotificationsRoundedIcon sx={{fontSize: 35, mb:3}}/>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PhonelinkSetupRoundedIcon sx={{fontSize: 35, mb:3}}/>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Avatar alt="A" src="/static/images/avatar/1.jpg" sx={{width: 40, height:40}} />
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <>
    <Box sx={{ display: 'flex' }}>
      <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' }, bgcolor: `#000000`,
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
      </Box>
    </Box>
    </>
    );
};

Sidebar.propTypes = {
 window: PropTypes.func,
};

export default Sidebar;

