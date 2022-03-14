/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PhonelinkSetupRoundedIcon from '@mui/icons-material/PhonelinkSetupRounded';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const Bottombar = ({}) => {
    const[active, setActive] = React.useState(0);

    const handleActive = (e)=>{
        let id = e.target.id;
        setActive(id)
    }
    //
    React.useEffect(()=>{

    },[]);

    return (
        <>
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, display: {sm: 'block', md: 'none'} }} >
          <Box
          sx={{
            display:'flex',
            justifyContent: 'space-between',
            maxWidth: `100%`,
            m: 1
          }}
          >
            <IconButton onClick={handleActive}>
                <ChatRoundedIcon color={active==0?`secondary`:`warning`} sx={{ fontSize: 25 }} id={0}/>
            </IconButton>
            <IconButton onClick={handleActive}>
                <ContactsRoundedIcon color={active==1?`secondary`:`warning`} sx={{ fontSize: 25 }} id={1}/>
            </IconButton> 
            <IconButton  onClick={handleActive}>
                <AccountCircleRoundedIcon color={active==2?`secondary`:`warning`} sx={{ fontSize: 25 }} id={2}/>
            </IconButton>
            <IconButton onClick={handleActive}>
                <NotificationsRoundedIcon color={active==3?`secondary`:`warning`} sx={{ fontSize: 25 }} id={3}/>
            </IconButton> 
            <IconButton onClick={handleActive}>
                <PhonelinkSetupRoundedIcon color={active==4?`secondary`:`warning`}  sx={{ fontSize: 25 }} id={4} />
            </IconButton>
            <IconButton>
               <Avatar alt="A" src="/static/images/avatar/1.jpg" sx={{width: 30, height:30}} />
            </IconButton>
          </Box>
        </AppBar>
      </>
    );
};

Bottombar.propTypes = {

};

export default Bottombar;