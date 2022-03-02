import {
  Avatar,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { TokenContext } from '../..';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import { OptionLogoutButton } from './OptionLogoutButton';

const { REACT_APP_LOCALHOST } = process.env;

export const ProfileHeader = () => {
  const [token] = useContext(TokenContext);
  const { privateUser } = usePrivateUser();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const menuOptions = [
    {
      text: 'Mi Perfil',
      path: '/profile',
    },
    {
      text: 'Nuevo Producto',
      path: '/newproduct',
    },
  ];

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
          <Tooltip title={privateUser.username}>
            <IconButton
              onClick={handleClick}
              size='small'
              sx={{ ml: 20 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              style={{ all: 'initial' }}
            >
              <Avatar
                alt=''
                src={
                  privateUser
                    ? `${REACT_APP_LOCALHOST}/avatar/${privateUser.avatar}`
                    : '/resources/images/cat_chibi.jpeg'
                }
                sx={{ width: 56, height: 56 }}
              />
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
          {menuOptions.map((item) => {
            return (
              <MenuItem key={item.text}>
                <Link href={item.path} underline='none'>
                  {item.text}
                </Link>
              </MenuItem>
            );
          })}
          <Divider />
          <MenuItem>
            <OptionLogoutButton />
          </MenuItem>
        </Menu>
      </div>
    )
  );
};
