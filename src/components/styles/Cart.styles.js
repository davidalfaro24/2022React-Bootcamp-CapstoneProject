import { Link } from "react-router-dom"
import styledComponent from "styled-components"

const Header = styledComponent.div`
    margin: auto;
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Heading = styledComponent.h3`
    font-size: 20px;
	font-weight: 700;
	color: #2F3841;
`
const ContainerCartGrid = styledComponent.div`
    display: grid;
    grid-gap: 1rem;
`
const SectionItems = styledComponent.section`
    padding: 2rem 15%;
`
const ItemsToBuy = styledComponent.li`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    &:not(:last-child) {
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 5px dotted hsla(225,25,50,1);
    }
    @media (max-width: 1030px) {
        display:block;
    }
`
const TableHeader = styledComponent.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    background-color:green;
    &:not(:last-child) {
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 5px dotted hsla(225,25,50,1);
    }
`
const ItemsToBuyName = styledComponent.h2`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 2rem 0.9rem;
`
const ItemsToBuyPrice = styledComponent.p`
    font-size:2rem;
    margin-right:2rem;
`
const ItemsImage = styledComponent.img`
    height: 150px;
`
const ContainerFlex = styledComponent.div`
    display:flex;
`
const ProductPrice = styledComponent.span`
    font-weight: 700;
    font-size: 1.5rem;
    opacity: 0.9;
    font-weight: 500;
    margin: 2rem 0.9rem;
`
const InputQuantity = styledComponent.input`
    cursor:pointer;
    height: 30%;
    width: 8rem;
    font-size: 1.5rem;
    color: black;
    padding: 0 1rem;
    border: 3px solid #6d3c11;
    border-radius: 6px;
    margin: 2rem 0.9rem;
    &:focus{
        border: 4px solid #6d3c11;
    }
`
const ItemH3 = styledComponent.span`
    font-size:1.5rem;
    margin: 2rem 0.9rem;
`
const RemoveButton = styledComponent.button`
    font: 0.8rem;
    height: 2rem;
    cursor: pointer;
    background-color: #8e582c;
    border: 3px solid #8e582c;
    color: white;
    margin-left: 1.5rem;
    margin-top:2rem;
    border-radius: 6px;
    &:hover{
        background: #6d3c11;
        color: #fff;
    }
`
const HR = styledComponent.hr``
const TotalOrderWrap = styledComponent.div`
    display: flex;
    justify-content: right;
    font-size: 18px;
    background-color: #f5f5f5;
    @media (max-width: 1030px) {
        display:block;
    }
`
const CheckOutButton = styledComponent(Link)`
    font: 0.8rem;
    height: 3rem;
    cursor: pointer;
    background-color: #8e582c;
    border: 3px solid #8e582c;
    color: white;
    margin-left: 1.5rem;
    margin-top:0.5rem;
    border-radius: 6px;
    margin-right: 1rem;
    padding-top: 0.5rem;
    &:hover{
        background: #6d3c11;
        color: #fff;
    }
`

export { Header,Heading,ContainerCartGrid, SectionItems, ItemsToBuy, ItemsToBuyName, ItemH3,
    ItemsToBuyPrice, ItemsImage, ContainerFlex,ProductPrice,InputQuantity,RemoveButton,HR,
    TotalOrderWrap,CheckOutButton,TableHeader}  