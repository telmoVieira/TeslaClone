import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <Container>
            <a>
                <img src="/img/logo.svg" alt="" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <li><a href="#">Existing Iventory</a></li>
                <li><a href="#">Used Iventory</a></li>
                <li><a href="#">Trade</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Existing Iventory</a></li>
                <li><a href="#">Existing Iventory</a></li>
                <li><a href="#">Existing Iventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-size: 20px;

    a {
        font-widht: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
        display: none;
    }

`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-widht: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`