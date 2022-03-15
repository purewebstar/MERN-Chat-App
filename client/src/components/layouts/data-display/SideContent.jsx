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
import AddBoxIcon from '@mui/icons-material/AddBox';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, useTheme, alpha } from '@mui/material/styles';
import ChatList from './ChatList';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius, 
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '60%',
    [theme.breakpoints.up('lg')]: {
    width: 'auto',
    },
},
}));

const SideContent = ({component}) => {

    return (
        <>
        <Box
        sx={{
         
        }}
        >
            {
              /**\
               *  
               */
            }
          <Box sx={{
           p:3,
           display: 'flex',
           justifyContent: 'space-between',

          }}> 
            <Typography variant="h4" color="warning" sx={{mt:1, fontWeight: 600, color: 'warning.light'}}>Chats</Typography>
            <IconButton>
                <AddBoxIcon color="secondary" sx={{fontSize: 35}} />
            </IconButton>
          </Box>
          {
              /**
               *  search
               */
          }
          <Box
          sx={{
           mb:0,
          }}
          >
            <Search
            sx={{  
                
            }}
            >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                color="text.primary"
                />
            </Search>
          </Box>
          {
              /**
               * chat list
               */
          }
          <Box
          sx={{
           mb:4,
           p:2,
          }}
          >
            <Typography
            variant="h6"
            sx={{
            fontWeight: 500, mb:1, color: 'warning.light'
            }}
            >
                DIRECT MESSAGE
            </Typography>
            <ChatList />
          </Box>
        </Box>
        </>
    );
};

SideContent.propTypes = {

};

export default SideContent;