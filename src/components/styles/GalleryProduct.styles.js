import styledComponents from "styled-components";

const DivWrapper = styledComponents.div`
    width: 40%;
    padding: 3rem 3rem 5rem 2rem;
    margin: 0 0 20% 0;
    float: left;
    font-size: 1.5rem;
    @media (max-width: 1100px) {
        width: 100%;
        padding: 1rem;
        margin: 0 0 10% 0;
    }
`
const ImageGallery = styledComponents.img`
    object-fit: cover;
    width:100%;
    height:100%;
    @media (min-width: 1000px) {
        overflow:auto;
    }
`
const ProductDivRight = styledComponents.div`
    padding:1.5rem;
`
const ProductName = styledComponents.h1`
    font-size: 3rem;
    margin-bottom: 1.5rem
    letter-spacing: 1px;
    opacity: 0.9;
    text-align:left;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`
const ProductPrice = styledComponents.span`
    font-weight: 700;
    font-size: 2rem;
    opacity: 0.9;
    font-weight: 500;
`
const ProductCategory = styledComponents.span`
    font-weight: 700;
    font-size: 1rem;
    opacity: 0.9;
    font-weight: 500;
    opacity:0.8;
    display: flex;
    padding-bottom: 1rem;
`
const SpecificationsList = styledComponents.li`
    font-size:1rem;
    text-align: justify;
`
const InputQuantity = styledComponents.input`
    cursor:pointer;
    height: 30%;
    width: 8rem;
    font-size: 1.5rem;
    color: black;
    padding: 0 1rem;
    border: 3px solid #6d3c11;
    border-radius: 6px;
    margin-left: 3.5rem;
    &:focus{
        border: 4px solid #6d3c11;
    }
`
const AddToCartButton = styledComponents.button`
    font: 1rem;
    cursor: pointer;
    background-color: #8e582c;
    border: 3px solid #8e582c;
    color: white;
    padding: 0.4rem 1.2rem;
    margin-left: 1.5rem;
    border-radius: 6px;
    &:hover{
        background: #6d3c11;
        color: #fff;
    }
`
const DescriptionProduct = styledComponents.p`
    font-size:1rem;
    text-align: justify;
    width: 88%;
    padding: 2rem 2.5rem 2.5rem 2.5rem;
`
const SpecificationWrapper = styledComponents.div`
    font-size:1rem;
    text-align: justify;
    width: 90%;
`
const MessageNotFound = styledComponents.div`
    font-size:2rem;
    padding: 10rem 4rem 4rem 4rem;
    text-align: center;
    font-weight: bold;
`
const WrapperButton = styledComponents.div`
    padding-bottom:4rem;
`

export { DivWrapper,ImageGallery,ProductDivRight,ProductName,ProductPrice, InputQuantity,
AddToCartButton,DescriptionProduct, ProductCategory, SpecificationsList,
SpecificationWrapper,MessageNotFound, WrapperButton }