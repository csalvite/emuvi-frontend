import styled from 'styled-components';
import { useState } from 'react';
import './Sidebar.css';
import { Avatar, Rating } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

const Button = styled.button`
  background-color: black;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

&::before, &::after{
    content: '';
    background-color: white;
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

&::before {
  top: ${(props) =>  (props.clicked ? "1.5" : "1rem")};
  transform: ${(props) =>  (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}

&::after {
  top: ${(props) =>  (props.clicked ? "1.2" : "1.5rem")};
  transform: ${(props) =>  (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}

`;

const SidebarContainer = styled.div`
    background-color: black;
    width: 3.5rem;
    height: 80vh;
    margin-top: 1rem;
    border-radius: 0 30px 30px 0;
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;
`;


const SlickBar = styled.ul`
    color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;

    padding: 2rem 0;

    position: absolute;
    top: 4rem;
    left: 0;

    transition: all 0.5s ease;
    border-radius: 0 30px 30px 0;
    width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
`;

const Text = styled.span`
    width: ${(props) => (props.clicked ? "100%" : "0")};
    overflow: hidden;
    margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
    transition: all 0.3s ease;
`;

const Profile = styled.div`
    width: ${(props) => (props.clicked ? "14rem" : "3rem")};
    height: 3rem;
    padding: 0.5rem 0;
    /* padding: ${(props) => (props.clicked ? "0.5rem 0;" : "0")}; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    overflow: hidden;
    margin-left: ${(props) => (props.clicked ? "11rem" : "0")};

    background-color: black;
    color: white;

    transition: all 0.3s ease;
`;

const Details = styled.div`
    color: white;
`;

export const Sidebar = ({privateUser}) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClicked, setProfileClicked] = useState(false);
    const handleProfileClick = () => setProfileClicked(!profileClicked);

    return (
        <>
            <SidebarContainer>
            <Button clicked={click} onClick={() => handleClick()}></Button>
                
                <SlickBar clicked={click}>
                    <Link className='item-link' to='/profile'>
                        <i className="fa-solid fa-user item-image" title='Información de Usuario'></i>
                        <Text clicked={click}>Editar Usuario</Text>
                    </Link>
                    <Link className='item-link' to='/profile/myproducts'>
                        <i className="fa-solid fa-shop item-image" title='Mis Productos'></i>
                        <Text clicked={click}>Mis Productos</Text>
                    </Link>
                    <Link className='item-link' to='/profile/ratings'>
                        <i className="fa-solid fa-star item-image" title='Valoraciones'></i>
                        <Text clicked={click}>Valoraciones</Text>
                    </Link>
                    <Link className='item-link' to='/profile/sendoffers'>
                        <i className="fa-solid fa-handshake item-image" title='Ofertas Enviadas'></i>
                        <Text clicked={click}>Ofertas Enviadas</Text>
                    </Link>
                    <Link className='item-link' to='/profile/receivedoffers'>
                        <i className="fa-solid fa-truck item-image" title='Ofertas Recibidas'></i>
                        <Text clicked={click}>Ofertas Recibidas</Text>
                    </Link>
                    <Link  className='item-link' to='/profile/favorites'>
                        <i className="fa-solid fa-heart item-image" title='Productos Favoritos'></i>
                        <Text clicked={click}>Favoritos</Text>
                    </Link>
                </SlickBar>

                <Profile clicked={profileClicked}>
                    <Avatar
                        onClick={() => handleProfileClick()}
                        alt={privateUser.username}
                        src={
                        `${REACT_APP_LOCALHOST}/avatar/${privateUser.avatar}`
                        }
                        sx={{ width: "2.5rem", height: "2.5rem" }}
                    />

                    <Details clicked={profileClicked}>
                        <h4>{privateUser.name} {privateUser.lastname}</h4>
                        {privateUser.mediaVotes ? 
                            <Rating
                                name='size-medium'
                                value={privateUser.mediaVotes}
                                size='medium'
                                readOnly
                            /> 
                        : 
                            <p>Sin valoraciones</p>
                        }
                    </Details>
                </Profile>

            </SidebarContainer>

            <Outlet />
        </>
    )
}