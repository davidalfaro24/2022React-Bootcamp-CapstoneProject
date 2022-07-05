import { Link } from "react-router-dom";
import styledComponents  from "styled-components";

const FormCheckout = styledComponents.form`
    border-radius: 5px;
    background-color: #f5f5f5;
    padding: 2rem 10%;
    display: block;
`
const LabelTitle = styledComponents.label`
    font-size:1rem;
`
const Container = styledComponents.li`
    display: -webkit-box;
    background-color:#f5f5f5;
    font-size: 18px;
    padding: 0rem 5%;
    &:not(:last-child) {
        padding-bottom: 0.5rem;
        border-bottom: 5px dotted hsla(225,25,50,1);
    }
    @media (max-width: 1050px) {
        display:block;
    }
`
const InputCustomer = styledComponents.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`
const ContainerTotalAmount = styledComponents.div`
    display:inline-block;
    margin-bottom:1rem;
    @media (max-width: 1050px) {
        display:block;
    }
`
const ReturnToCart = styledComponents(Link)`
    font-size: 1.3rem;
    width:13rem;
    background-position: center;
    background-size: cover;
    margin: 0rem 2rem;
    padding: 1rem;
    background-color: #8e582c;
    color: white;
    border-radius:5px;
    &:hover{
        background: #6d3c11;
        color: #fff;
    }
    @media (max-width: 1000px) {
        font-size: 0.9rem;
        width:4rem;
        margin:0rem 0.5rem;
    }
`
export {FormCheckout,LabelTitle,Container,InputCustomer,ContainerTotalAmount,ReturnToCart}