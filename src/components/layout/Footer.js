/* eslint-disable max-len */
import styledComponents from "styled-components"


const Footer = () => {
    return (
        <FooterBox>
            <FooterH3><i className='fa fa-tree'/> Wood Home</FooterH3>
            <FooterDescription>Ecommerce created during Wizeline’s Academy React Bootcamp. Follow us!</FooterDescription>
            <SocialNetwork>
                <SocialNet><Icon className="fa fa-facebook" /></SocialNet>
                <SocialNet><Icon className="fa fa-twitter" /></SocialNet>
                <SocialNet><Icon className="fa fa-linkedin-square" /></SocialNet>
            </SocialNetwork>
        </FooterBox>

    )
}

const FooterBox = styledComponents.div`
    background:#8e582c;
    height: auto;
    width: 100%;
    padding-top: 2rem;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`
const FooterH3 = styledComponents.h3`
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
`
const SocialNetwork = styledComponents.ul`
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 1rem 0 3rem 0;
    
`
const SocialNet = styledComponents.li`
    margin: 0 10px
    text-decoration:none;
    color:white;
`
const Icon = styledComponents.i`
    font-size:2rem;
    transition:color .4s ease;
    padding:0 2rem;
`

const FooterDescription = styledComponents.h4`
    max-width: 500px;
    margin:10px auto;
    line-height: 2rem;
    font-size:1rem;
`

export default Footer