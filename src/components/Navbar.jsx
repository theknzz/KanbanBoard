import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    background-color: #216869;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    
`

const Logo = styled.h1`
    color: #9CC5A1;
    text-shadow: 2px 2px #1F2421;
`

const Navbar = (props) => {
    return (
        <Container>
            <Logo>Kanban Board</Logo>
        </Container>
    );
}

export default Navbar
