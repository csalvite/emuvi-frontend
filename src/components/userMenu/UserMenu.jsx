import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { UserInfo } from '../privateUser/UserInfo';
import { MyProducts } from '../myProducts/MyProducts';
import { FavoriteProducts } from '../privateUser/FavoriteProducts';
import Ratings from '../privateUser/Ratings';
import { UserSendOffers } from '../offers/UserSendOffers';
import { UserReceivedOffers } from '../offers/UserReceivedOffers';

export default function UserMenu({privateUser}) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOpenMenuOption = (e) => {
      if (e.target.contains === 'userInfo') {
          console.log('Click en userInfo');
      }
      console.log(e.target.contains);
  }

  return (
      <>
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Perfil de Usuario
            </ListSubheader>
        }
        style={{display: 'flex', flexDirection: 'column'}}
        onClick={handleOpenMenuOption}
        >
        <ListItemButton id='userInfo'>
            <ListItemIcon>
                <i className="fa-solid fa-user"></i>
            </ListItemIcon>
            <ListItemText primary="Editar Perfil" />
        </ListItemButton>
        <ListItemButton id='userProducts'>
            <ListItemIcon>
                <i className="fa-solid fa-shop"></i>
            </ListItemIcon>
            <ListItemText primary="Mis Productos" />
        </ListItemButton>
        <ListItemButton id='userRatings'>
            <ListItemIcon>
                <i className="fa-solid fa-star"></i>
            </ListItemIcon>
            <ListItemText primary="Mis Valoraciones" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <i className="fa-solid fa-basket-shopping"></i>
            </ListItemIcon>
            <ListItemText primary="Propuestas de Compra" />
            {open ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i> }
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton id='userOffers' sx={{ pl: 4 }}>
                <ListItemIcon>
                    <i className="fa-solid fa-handshake"></i>
                </ListItemIcon>
                <ListItemText primary="Ofertas Enviadas" />
            </ListItemButton>
            <ListItemButton id='userSells' sx={{ pl: 4 }}>
                <ListItemIcon>
                    <i className="fa-solid fa-truck"></i>
                </ListItemIcon>
                <ListItemText primary="Ofertas Recibidas" />
            </ListItemButton>
            </List>
        </Collapse>
        <ListItemButton id='userFavorites'>
            <ListItemIcon>
                <i className="fa-solid fa-heart"></i>
            </ListItemIcon>
            <ListItemText primary="Favoritos" />
        </ListItemButton>
        </List>

      <UserInfo privateUser={privateUser} id='edit' show={true} />
      <MyProducts privateUser={privateUser} />
      <FavoriteProducts privateUser={privateUser} />
      <Ratings privateUser={privateUser} />
      <UserSendOffers idUser={privateUser.id} />
      <UserReceivedOffers idUser={privateUser.id} />

      </>
  );
}