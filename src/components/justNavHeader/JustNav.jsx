import React, { useContext } from 'react';
import { ProfileHeader } from '../../components/users/ProfileHeader';
import './JustNav.css';
import { TokenContext } from '../..';
import { LoginButton } from '../users/LoginButton';

function JustNav() {
  const [token] = useContext(TokenContext);

  return (
    <div>
      <header>
        <nav id="navBar">
          <a href={`http://localhost:3000/`} className="logo">
            <i className="fas fa-globe-africa"></i>EMUVI
          </a>
          <div className="search_box">
            <input type="search" placeholder="Encontrar algo..." />
            <span className="fa fa-search"></span>
          </div>

          {token ? (
            <>
              <ProfileHeader />
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
