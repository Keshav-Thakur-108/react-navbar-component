import React, {useState} from 'react'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavItemLink} from './Navbar.elements'
import {FaBars, FaTimes} from 'react-icons/fa'



const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon/>
                    SAIL
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                <NavMenu click={click}>
                <NavItem>
                    <NavItemLink to='/'>
                        Home
                    </NavItemLink>
                </NavItem>
                <NavItem>
                    <NavItemLink to='/'>
                        About Us
                    </NavItemLink>
                </NavItem>
                </NavMenu>
            </NavbarContainer>
            
        </Nav>
    )
}

export default Navbar
