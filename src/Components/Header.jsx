import React from 'react'
import styled from 'styled-components'
import Logo from "../Assets/logo.svg"

const Div = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    padding: 0 10rem;
    height: 7rem;

    p{
        font-size:1.8rem;
        cursor: pointer;
    }

    img{
        width: 5%;
    }
    .navbar{
        display: flex;
        gap: 2rem;
        flex: 1;
    }

    .buttons{
        display: flex;
        flex: 0 0 15%;
        gap: 1rem;
        align-items: center;
    }

    li{
        font-size: 1.4rem;
    }

    
@media only screen and (max-width: 600px) {
 .navbar{
    display: none ;
 }

 .buttons{
    display: none ;
 }
}


`

export const Button = styled.button`
    padding: ${(props) => props.p1} ${(props) => props.p2};
    background-color: #FF4820;
    border: none;
    color: white;
    font-size: ${(props) => props.font };
    cursor: pointer;
`

function Header() {
    return (
        <Div>
            <img src={Logo} alt="" />
            <ul className='navbar'>
                <li>Home</li>
                <li>What is GPT3?</li>
                <li>Open Ai </li>
                <li>Case studies</li>
                <li>Library</li>
            </ul>
            <div className="buttons">
                <p>Sign in </p>
                <Button p1="1rem" p2="2rem" font="1.8rem">Sign Up</Button>
            </div>
        </Div>
    )
}

export default Header