import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiAbstract042} from 'react-icons/gi'

export const Nav = styled.div`
height: 80px;
background-color: #2f2626;
display:flex;
align-items:center;
justify-content: center;
position:sticky;
top:0;
`

export const NavbarContainer = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items: center;
padding-left: 50px;
padding-right: 50px;
color: white
`

export const NavLogo = styled(Link)`
color: white;
text-decoration: none;
cursor: pointer;
justify-self: flex-start;
display: flex;
font-size: 2rem;
align-items: center
`
export const NavIcon = styled(GiAbstract042)`
margin-right: 0.5rem
`