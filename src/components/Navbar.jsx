import * as React from 'react';
import { AppBar, Toolbar, styled, alpha, Typography, InputBase, Badge, Box, Avatar, Menu, MenuItem } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';





export default function Navbar() {

  const [open, setOpen] = React.useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  });

  const SearchBar = styled("div")(({theme})=>({
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
      }
  }));

  const Icons = styled(Box)(({theme})=>({
    display:"none",
    alignItems: "center",
    gap: "20px",
    //si el breakpoint es mayor a sm
    [theme.breakpoints.up("sm")]:{
      display:"flex",
    }
  }));

  const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
      display:"none",
    }
  }));

  
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Nicko</Typography>
        <BoltIcon sx={{display:{xs:"block", sm:"none"}}}/>

        <SearchBar><InputBase placeholder='Search...'></InputBase></SearchBar>

        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications/>
          </Badge>
          <Avatar 
            sx={{width:30, height:30}} 
            alt="Travis Howard"
            src="https://i.imgur.com/b6KMbDR.png"
            onClick={e=>setOpen(true)}
          ></Avatar>
        </Icons>

        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{width:30, height:30}} alt="Travis Howard" src="https://i.imgur.com/b6KMbDR.png"></Avatar>
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}