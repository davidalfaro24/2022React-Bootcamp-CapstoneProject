import { Link } from "react-router-dom";
import styledComponents from "styled-components";

const ContainerGrid = styledComponents.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
    gap:1.5rem;
    padding-bottom: 4rem;
    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }
    
`
const GridBox = styledComponents.div`
    border-radius: .5rem;
    background:#fff;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);;
    outline:.1rem solid rgba(0,0,0,.1);
    outline-offset: -1rem;
    text-align: center;
    &:hover {
        outline:.2rem solid black;
        outline-offset: 0rem;
    }
`
const Image = styledComponents.img`
    margin:1rem 0;
    height:15rem;
`
const DivButtonCentral = styledComponents.div`
    display: block;
    align-items: center;
    justify-content: center; 
    background-position: center;
    background-size: cover;
`
const AllProductsPage = styledComponents(Link)`
    font-size: 1.3rem;
    width:13rem;
    background-position: center;
    background-size: cover;
    padding-bottom: 1rem;
    margin-left:45%;
    background-color: #8e582c;
    color: white;
    &:hover{
        background: #6d3c11;
        color: #fff;
    }
    @media (max-width: 400px) {
        margin-left:30%;
        font-size: 1rem;
        width:10rem;
    }
    @media (min-width: 1450px) {
        margin-left:45%;
    }
`


export {ContainerGrid, GridBox, Image,AllProductsPage, DivButtonCentral}