import React from 'react'
import styled from 'styled-components'
import Logo from "../Assets/logo.svg"

const Div = styled.div`
    background-color: #031B34;
    margin-top: 20rem;
    padding: 0 10rem;
    
    p{
        color: white ;
        text-align: center;
        padding: 3rem;
        font-size: 1.2rem;
    }

    .bottom-section{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
        color: white;
        margin-top: 4rem;
        gap: 2rem ;

        figure{
            img{
                margin-bottom: 2rem;
            }
        }

        li{
            font-size: 1.2rem;

            &:nth-child(1){
                font-size: 1.4rem;
                font-weight: 600;
            }
        }

        .menu{
        
            ul{
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                align-items: center ;
            }
           


        }
    }

    .upper-section{
        padding:  11rem 24rem;
        text-align: center;

        button{
            background: transparent;
            font-size: 1.8rem;
            color: white;
            margin-top: 6rem;
            padding: 2rem 4rem;
            border: 1px solid white ;

        }
    }

    h2{
        font-size: 6.2rem;
    }

    @media only screen and (max-width: 600px) {

        .upper-section{

            padding: 7rem 4rem ;

            h2{
                font-size: 4.2rem;
            }
        }


    }
`

function Footer() {
    return (
        <Div>
            <div className="upper-section">
                <h2 className='h1'>Do you want to step in to the future before others</h2>
                <button>Request Early Access</button>
            </div>
                <div className="bottom-section">
                    <figure>
                        <img src={Logo} alt="" />
                        <figcaption>New Delhi, India </figcaption>
                    </figure>
                    <div className="menu-1 menu">
                        <ul>
                            <li>Links</li>
                            <li>Overons</li>
                            <li>Social Media</li>
                            <li>Counters</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="menu-2 menu">
                        <ul>
                            <li>Company</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className="menu-3 menu">
                        <ul>
                            <li>Get In Touch</li>
                            <li>New Delhi, India</li>
                            <li>20435242</li>
                            <li>info@lol.com</li>
                        </ul>
                    </div>
                </div>
                    <p>© 2021 GPT-3. All rights reserved.</p>
        </Div>
    )
}

export default Footer