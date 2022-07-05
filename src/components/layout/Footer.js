import { FooterDescription, FooterBox, FooterH3, SocialNetwork, 
    Icon, SocialNet } from "../styles/Footer.styles"

const Footer = () => {
    return (
        <FooterBox>
            <FooterH3><i className='fa fa-tree'/> Wood Home</FooterH3>
            <FooterDescription>
                Ecommerce created during Wizeline’s Academy React Bootcamp. Follow us!
            </FooterDescription>
            <SocialNetwork>
                <SocialNet><Icon className="fa fa-facebook" /></SocialNet>
                <SocialNet><Icon className="fa fa-twitter" /></SocialNet>
                <SocialNet><Icon className="fa fa-linkedin-square" /></SocialNet>
            </SocialNetwork>
        </FooterBox>
    )
}

export default Footer