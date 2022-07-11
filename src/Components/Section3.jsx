import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    color: white ;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    column-gap: 2rem;
    row-gap: 4rem;
    padding: 0 10rem;
    margin: 20rem 0 ;

    h2{
        font-size: 2.5rem;
    }

    .div{
            width: 4rem;
            height: 0.3rem;
            background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);  
        }

    .features{
        display: flex;
        flex-direction: column;
        grid-gap: 4rem;
        padding: 0 4rem ;
        align-items: flex-start;
        padding: 0 30% ;
        
        h3{
            font-size: 1.8rem;
     
        }
    }

    .Info{
        display: flex;
        flex-direction: column;
        gap: 3.5rem ;
   

        p{
            font-size: 1.4rem;
            color: #81AFDD ;
        }
    }

    @media only screen and (max-width: 600px) {

        padding: 0 5rem;

        .Info{
            grid-column: 1/-1 ;
        }
    }

    
`

const Features = ["Improving end distrusts instantly", "Become the tended active", "Message or am nothing", "Really boy law county"]

const Info = ["From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.", "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.", "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.", "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."]

function Section3() {
    return (
        <Div>
            <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
            <div className="features">
                {Features.map((features) => {
                    return (
                        <div className='cont'>
                            <div className='div'></div>
                            <h3>{features}</h3>
                        </div>
                    )
                })}
            </div>
            <div className="Info">
                {Info.map((info) => {
                    return (
                        <p>{info}</p>
                    )
                })}
            </div>
        </Div>
    )
}

export default Section3