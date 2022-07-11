import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    background-color: rgb(5,44,85);
    padding: 5rem ;
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(20rem,1fr)); */
    gap: 5rem;
    margin: 12rem 10rem 15rem 10rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;


    .intro{

        display: flex ;
        justify-content: space-between;
        grid-column: 1/-1;
        flex-wrap: wrap;
        
        .intro__gpt{
            flex: 0 0 60%;
        
        }
            
            h2{
                color: white;
                margin-top: 1rem;
                font-size: 2rem ;
        }

            p{
                color: #81AFDD;
                font-size: 1.6rem;
            }
        }

    .point{
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-column: 1/-1;
        flex-wrap: wrap ;

            h3{
                font-size: 3.5rem;
           
            }

            p{
                color: #FF8A71 ;
                font-size: 2rem ;
            }

    }

    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)) ;
        column-gap: 3rem;
        margin-top: 2rem;
        grid-column: 1/-1 ;


        h4{
            font-size: 1.6rem;
            margin-bottom: 3rem;
            color: white;
            margin-top: 1rem;
        }

        p{
            color: #81AFDD;
            font-size: 1.4rem;
        }

    }

    .div{
            width: 4rem;
            height: 0.3rem;
            background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);  
            display: inline-block ;
        }

        @media only screen and (max-width: 600px) {

            margin: 5rem 5rem;
        }

`

const Info = [
    {
        title: "Chatbot",
        info: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
        title: "Knowledgebase",
        info: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments."
    },
    {
        title: "Education",
        info: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. "
    },
]

function Card() {
    return (
        <Div>
            <div className="intro">
                <div className="intro__gpt">
                    <div className='div'></div>
                    <h2>What is GPT 3</h2>
                </div>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className="point">
                <h3 className='h1'>The Possibilities are beyond
                    <div>
                        your Imaginatian
                    </div>
                </h3>
                <p>Explore the Library </p>
            </div>


            <div className="cards">
                {Info.map((map) => {
                    return (
                        <div>
                            <div className='div'></div>
                            <h4>{map.title}</h4>
                            <p>{map.info}</p>
                        </div>
                    )
                })}

            </div>

        </Div>
    )
}

export default Card