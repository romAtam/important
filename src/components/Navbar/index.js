import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import LogImage from "../../images/browlogo.png"
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    Logo
} from './NavbarElements'
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
    }};
        useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
    <Nav scrollNav = {scrollNav}>
        <NavbarContainer>
           <NavLogo to='/' onClick={toggleHome}><Logo src={LogImage} alt="LOGO"/></NavLogo>
           <MobileIcon onClick={toggle}>
            <FaBars />
           </MobileIcon>
           <NavMenu>
            <NavItem>
                <NavLinks to='offers' smooth={true} duration={500} spy={true} exact='true' offse={-80}>contact</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offse={-80}>services</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='home' smooth={true} duration={500} spy={true} exact='true' offse={-80}>treatment</NavLinks>
            </NavItem>
            <NavItem>
       
                <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offse={-80}>shop</NavLinks>
            </NavItem>
           </NavMenu>
           <NavBtn>
            <NavBtnLink to='/signin'>our team</NavBtnLink>
           </NavBtn>
        </NavbarContainer>
    </Nav>
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
