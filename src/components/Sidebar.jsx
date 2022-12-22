import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'

import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ModeNightIcon from '@mui/icons-material/ModeNight';


const SideBar = ({mode, setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs: "none", sm: "block"}}}>
      <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#pages'>
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#groups'>
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#marketplace'>
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#friends'>
              <ListItemIcon>
                <Diversity3Icon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#settings'>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#profile'>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#profile'>
              <ListItemIcon>
                <ModeNightIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}/>      
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default SideBar