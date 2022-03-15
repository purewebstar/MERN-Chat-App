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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import OnlinePredictionRoundedIcon from '@mui/icons-material/OnlinePredictionRounded';
import PhonelinkSetupRoundedIcon from '@mui/icons-material/PhonelinkSetupRounded';
import Avatar from '@mui/material/Avatar';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ForumIcon from '@mui/icons-material/Forum';
import SideContent from '../data-display/SideContent';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';

const drawerWidth = 75;

const sideDrawerWidth=300;

const Sidebar = props => {
  const[active, setActive] = React.useState(0);
  const[mode, setMode] = React.useState(false);

  const handleActive = (e)=>{
    setActive(e.target.id);
  }

  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  //
  React.useEffect(()=>{
    const handleResize = () =>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  const drawer = (
    <div style={{backgroundColor: `#2E2E2E`, height:`100%`}}>
      <Toolbar />
      <Divider />
      <List sx={{}}>
        <ListItem button>
          <ListItemIcon onClick={handleActive}>
            <ForumIcon color={active==0?`secondary`:`warning`} sx={{fontSize: 26, mb:3}} id={0}/>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon onClick={handleActive}>
            <GroupRoundedIcon color={active==1?`secondary`:`warning`} sx={{fontSize: 26, mb:3}}  id={1}/>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon onClick={handleActive}>
             <OnlinePredictionRoundedIcon color={active==2?`secondary`:`warning`} sx={{fontSize: 26, mb:3}}  id={2}/>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon onClick={handleActive}>
            <NotificationsRoundedIcon color={active==3?`secondary`:`warning`} sx={{fontSize: 26, mb:3}}  id={3}/>
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon onClick={handleActive}>
            <PhonelinkSetupRoundedIcon color={active==4?`secondary`:`warning`} sx={{fontSize: 26, mb:5}}  id={4}/>
          </ListItemIcon>
        </ListItem>
        <Divider />
      </List> 
      <List sx={{}}>
      <ListItem button >
        <ListItemIcon>
        {
          (!mode)?
          <>
          <WbSunnyRoundedIcon color="warning" sx={{fontSize: 26, mb:2, mt:3}}/>
          </>
          :
          <>
          <DarkModeRoundedIcon color="warning" sx={{fontSize: 26, mb:2, mt:3}} />
          </>
        }
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Avatar alt="A" src="/static/images/avatar/1.jpg" sx={{width: 30, height:30}} />
        </ListItemIcon>
      </ListItem>
      </List>
    </div>
  );

  return (
  <>
  <Box sx={{ display: { sm: 'none', md: 'flex' } }}>
    <Box
    component="nav" 
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': { width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
    
    <Box
    component="main"
    sx={{
    backgroundColor: `primary.dark`,
    height: (windowSize.height),
    borderColor: `#e0e0e0`, 
    display: { sm: 'none', md: 'block' },
    '& .MuiDrawer-paper': { width: sideDrawerWidth },
    }}
    >
    {
    /**
     *  SIDE CONTENT will load On click 
     */
    }
    <SideContent 
     activeLink={active}
    />
    </Box>
  </Box>
  <Box
    component="main"
    sx={{
    backgroundColor: `primary.dark`,
    height: (windowSize.height),
    borderColor: `#e0e0e0`, 
    display: { sm: 'block', md: 'none' },
    '& .MuiDrawer-paper': { width: `100%` },
    }}
    >
    {
    /**
     *  SIDE CONTENT will load On click 
     */
    }
    <SideContent 
    activeLink={active}
    />
    </Box>
  </>
  );
};

Sidebar.propTypes = {

};

export default Sidebar;

