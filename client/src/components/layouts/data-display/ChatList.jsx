/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red, blue, green, teal} from '@mui/material/colors';

const ChatList = ({}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };

    return (
        <>
        <List sx={{ width: '100%', maxWidth: 360 }}>
            <ListItemButton alignItems="flex-start"
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{bgcolor: blue[300], width: 30, height:30}} />
            </ListItemAvatar>
            <ListItemText
                 primary= {
                    <React.Fragment>
                    <Typography
                    component="span"
                    variant="h6"
                    color="warning.light"
                    sx={{fontWeight: 600}}
                    >
                    {`Joe Doen`}
                    </Typography>
                    </React.Fragment>
                    }
                    secondary={
                    <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="warning.light"
                        >
                       {"Wish I could come, but I'm out of town this…"}
                        </Typography>
                        
                    </React.Fragment>
                    }
            />
            </ListItemButton>
            <Divider variant="inset" component="li" />
            <ListItemButton alignItems="flex-start"
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 2)}
            >
            <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{bgcolor: teal[300], width: 30, height:30}} />
            </ListItemAvatar>
            <ListItemText
                primary= {
                <React.Fragment>
                <Typography
                component="span"
                variant="h6"
                color="warning.light"
                sx={{fontWeight: 600}}
                >
                {`Joe Doen`}
                </Typography>
                </React.Fragment>
                }
                secondary={
                <React.Fragment>
                    <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="warning.light"
                    >
                   {"Wish I could come, but I'm out of town this…"}
                    </Typography>
                    
                </React.Fragment>
                }
            />
            </ListItemButton>
            <Divider variant="inset" component="li" />
            <ListItemButton alignItems="flex-start"
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            >
            <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{bgcolor: red[300], width: 30, height:30}} />
            </ListItemAvatar>
            <ListItemText
                 primary= {
                    <React.Fragment>
                    <Typography
                    component="span"
                    variant="h6"
                    color="warning.light"
                    sx={{fontWeight: 600}}
                    >
                    {`Joe Doen`}
                    </Typography>
                    </React.Fragment>
                    }
                    secondary={
                    <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="warning.light"
                        >
                       {"Wish I could come, but I'm out of town this…"}
                        </Typography>
                        
                    </React.Fragment>
                    }
            />
            </ListItemButton>
        </List>
        </>
    );
};

ChatList.propTypes = {

}

export default ChatList;