import { Link } from "react-router-dom";
import styledComponents from "styled-components";

const CardCarousel = styledComponents(Link)`
    position:relative
    display: inline-block;
    overflow:hidden;
    justify-content: center;
    align-items: center;
    height: 22rem;
    width: 100%;
    color: black;
    margin: 1rem 1rem;
    font-size: 4em;
    @media (max-width: 1200px) {
        max-width: 100%;
    }
`
const CardSimpleCarousel = styledComponents.div`
    position:relative
    display: inline-block;
    overflow:hidden;
    justify-content: center;
    align-items: center;
    height: 22rem;
    width: 100%;
    color: black;
    margin: 1rem 1rem;
    font-size: 4em;
    @media (max-width: 1200px) {
        max-width: 100%;
    }
`
const Image = styledComponents.img`
    object-fit: cover;
    width:100%;
    height:100%;
    @media (min-width: 1000px) {
        overflow:auto;
    }
`
const Caption = styledComponents.div`
    right: 15%;
    bottom: 1.25rem;
    left:15%;
    padding-top:1.25rem;
    padding-bottom: 1.25rem;
    color: black;
    text-align: center;
    font-size: 1.8rem;
`
const H1Heading = styledComponents.h1`
    text-align: center;
    padding:2rem 0;
    padding-bottom: 3rem;
    font-size: 3.5rem;
    color:black;
`
const H1Span = styledComponents.span`
    background: #6d3c11;
    color:#f5f5f5;
    display: inline-block;
    padding:.5rem 3rem;
    clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%);
`

export { CardCarousel, Image, Caption, H1Heading, H1Span,CardSimpleCarousel};