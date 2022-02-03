import React from 'react';
import { LoginButton } from '../../components/users/Login';
import { LogoutButton } from '../../components/users/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileHeader } from '../../components/users/ProfileHeader';
import './JustNav.css';

function JustNav() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <header>
        <nav id="navBar">
          <a href="http://localhost:3000/" className="logo">
            <i className="fas fa-globe-africa"></i>EMUVI
          </a>
          <div className="search_box">
            <input type="search" placeholder="Encontrar algo..." />
            <span className="fa fa-search"></span>
          </div>

          {isAuthenticated ? (
            <>
              <ProfileHeader />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </nav>
      </header>
    </div>
  );
}

export default JustNav;
