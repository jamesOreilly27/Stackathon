import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../components'
import { Link } from 'react-router-dom'

const Wrapper = styled.header`
    width: 100vw;
    position: fixed;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #FAFAFA;
    background-color: #0A0A0A;
`

const Header = () => (
        <Wrapper>
            <Container>
                <Link to='/' className="title">  
                    Crypto Book-E
                </Link>
                <div className="navbar">
                    <Navlink name="Login" />
                    <Navlink name="Sign-Up" />
                </div>
            </Container>
        </Wrapper>
)

export default Header
