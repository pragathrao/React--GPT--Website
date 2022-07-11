import React from 'react'
import styled from 'styled-components'
import Possibility from "../Assets/possibility.png"

const Div = styled.div`

    padding: 0 10rem ;
    color: white ;
    display: flex;
    flex-wrap: wrap;
    align-items: end ;
    flex-direction: row;
    margin: 25rem 0 ;

    
    figure{
        flex: 0 0 50%;
        text-align: center;
        
        img{
            width: 65%;
        }
    }

    .data {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            flex: 1 ;
            padding: 4rem 4rem ;

            & > * {
                font-size: 1.6rem ;
            }

            h3{
                font-size: 3.5rem!important;
                
                
            }

            p{
                color: #81AFDD;
                
          }

          h4{
              color: #71E5FF;

          }
            h5{
                color: #FF8A71;
                margin-top: auto ;
                padding-top: 10rem ;
                
            }

        }

        @media only screen and (max-width: 600px) {

            figure{
                flex: 0 0 100% ;
            }


        }

        

    
`

function Girl() {
    return (
        <Div>
            <figure>
                <img src={Possibility} alt="" />
            </figure>
            <div className="data">
                <h4 className='color'>Request Early Access to Get Started</h4>
                <h3 className='h1 color'>The possibilities are beyond your imagination</h3>
                <p className='color'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h5 className='color'>Request Early Access to Get Started</h5>
            </div>

        </Div>
    )
}

export default Girl