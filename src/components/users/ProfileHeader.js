import {
  Avatar,
  Divider,
  Icon,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenContext } from '../..';
import { OptionLogoutButton } from './OptionLogoutButton';
import { OptionProfile } from './OptionProfile';

export const ProfileHeader = () => {
  const [token] = useContext(TokenContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    token && (
      <div>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <Tooltip title='Nombre del Usuario'>
            <IconButton
              onClick={handleClick}
              size='small'
              sx={{ ml: 20 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 56, height: 56 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem component={Link} to='profile'>
            Mi Perfil
          </MenuItem>
          <MenuItem>Nuevo Producto</MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>{<OptionLogoutButton />}</ListItemIcon>
          </MenuItem>
        </Menu>
      </div>
    )
  );
};
