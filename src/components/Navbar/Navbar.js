import React, {useState, useEffect} from 'react'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavItemLink, Button, NavItemBtn, NavBtnLink} from './Navbar.elements'
import {FaBars, FaTimes} from 'react-icons/fa'



const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960)
        setButton(false)
        else setButton(true)
    }

    useEffect(() => {
        showButton()
    }, []) 

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick = {closeMobileMenu}>
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
                <NavItemBtn>
                    {button ? (
                    <NavBtnLink>
                        <Button primary>
                            Contact Us
                        </Button>
                    </NavBtnLink>
                    ): (
                        <NavBtnLink>
                            <Button primary bigFont>
                                Contact Us
                            </Button>
                        </NavBtnLink>
                    )} 
                </NavItemBtn>
                </NavMenu>
                
            </NavbarContainer>
            
        </Nav>
    )
}

export default Navbar
