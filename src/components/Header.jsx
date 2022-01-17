import React from 'react';
import { LoginButton } from '../page/auth/Login';
import { LogoutButton } from '../page/auth/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import './Header.css';
import { Profile } from '../page/Profile';

function Header1() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav>
      <a href="#" class="logo">
        <i class="fas fa-globe-africa"></i>EMUVI<span></span>
      </a>
      <div class="search_box">
        <input type="search" placeholder="Encontrar algo..." />
        <span class="fas fa-search"></span>
      </div>
      {isAuthenticated ? 
        <>
          <Profile />
          <LogoutButton />
        </> : 
        <LoginButton />
      }
    </nav>
  );
}

export default Header1;
