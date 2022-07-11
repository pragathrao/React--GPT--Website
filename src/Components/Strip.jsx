import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);  
  color: white ;
  padding: 5rem 5rem;
  margin: 12rem 10rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap ;

  p{
    font-size: 1.2rem;
    color: #0E0E0E;
    font-weight: 500;
    margin-bottom: 0.5rem ;

  }

  h3{
    color: #000000;
    font-size: 2.3rem;
  }

  button{
    color: white;
    background-color: #0E0E0E;
    border: none;
    border-radius: 100rem;
    padding: 2rem 4rem;
    font-weight: 600;
    cursor: pointer;

  }
 
`

function Strip() {
  return (
    <Div>
      <div className="data">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <button>Get Started</button>
    </Div>
  )
}

export default Strip