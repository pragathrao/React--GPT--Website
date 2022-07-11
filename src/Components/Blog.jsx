import React from 'react'
import styled from 'styled-components'
import Blog1 from "../Assets/blog01.png"
import Blog2 from "../Assets/blog02.png"
import Blog3 from "../Assets/blog03.png"
import Blog4 from "../Assets/blog04.png"
import Blog5 from "../Assets/blog05.png"


const Div = styled.div`
    padding: 0 10rem;
    color: white;


    h2{
        font-size: 6.2rem;
        padding: 3rem 0;
        margin: 6rem 0 ;
        
    }
    
    .blog{
        display: flex;
         flex-wrap: wrap;
        flex-direction: row; 
        gap: 3rem;
    
        .card{
            flex:1 ;
            
            h3{
                font-size: 2.51rem!important;
            }
        }
        
        img{
            height: 60%;
            width: 100%;
            object-fit: cover;
        }

        .cards{
            background: #042C54;
            display: flex;
            flex-direction: column;

            p{
                font-size: 1.1rem ;
            }

            h3{
                font-size: 1.9rem;
                padding: 1rem 0 ;
            }


            .p{
                margin-top: auto;
                padding: 0 0 2rem 2rem ;
            }

            .data{
                padding: 2rem;
            }
        }

        .section{
            display: grid;
            grid-template-columns:repeat(2,1fr);
            gap: 3rem;
            flex: 1 ;
        }

    }

    
`


const data = [
    {
        img: Blog2,
        date: "Sep 26, 2021",
        title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
        img: Blog3,
        date: "Sep 26, 2021",
        title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
        img: Blog4,
        date: "Sep 26, 2021",
        title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
        img: Blog5,
        date: "Sep 26, 2021",
        title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
]

function Blog() {
    return (
        <Div>
            <h2 className='h1'>A lot is happening, <div>
                We are blogging about it.
            </div>
            </h2>
            <div className="blog">
                <div className="cards card">
                    <img src={Blog1} alt="" />
                    <div className="data">
                        <p>Sep 26, 2021</p>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                    </div>
                </div>
                <div className="section">
                    {data.map((data) => {
                        return (
                            <div className="cards">
                                <img src={data.img} alt="" />
                                <div className="data">
                                    <p>{data.date}</p>
                                    <h3>{data.title}</h3>
                                </div>
                                <p className='p'>Read Full Article</p>
                            </div>

                        )
                    })}
                </div>
            </div>
        </Div>
    )
}

export default Blog