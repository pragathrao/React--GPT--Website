import React from 'react'
import Google from "../Assets/google.png"
import DropBox from "../Assets/dropbox.png"
import Slack from "../Assets/slack.png"
import Shopify from "../Assets/shopify.png"
import Atlassian from "../Assets/atlassian.png"
import styled from 'styled-components'


const companies = [Google, Slack, Atlassian, DropBox, Shopify]

const Div = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    margin-top: 4rem ;
`


function Companies() {
    return (
        <Div>
            {companies.map((images) => {
                return (
                    <img src={images} alt="" />
                )
            })}
        </Div>
    )
}

export default Companies