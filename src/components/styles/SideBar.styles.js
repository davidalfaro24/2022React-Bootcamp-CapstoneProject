import styledComponents from "styled-components";

const DivWrapper = styledComponents.div`
    width: 20%;
    padding: 1rem 3rem 1rem 1rem;
    margin: 0 0 50% 0;
    float: left;
    font-size: 1.5rem;
    @media (max-width: 1100px) {
        width: 100%;
        padding: 1rem;
        margin: 0 0 10% 0;
    }
`
const FilterBy = styledComponents.h6`
    font-size: 1.5rem;
    border-bottom: 3px solid #E0E0E0;
    padding-top: 2rem;
    margin-bottom: 2.5rem;
    @media (max-width: 1100px) {
        text-align:center;
    }
`
const RemoveFilterBTN = styledComponents.button`
    position: relative;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    width: 8rem;
    background: #33691E;
    color: #fff;
    border-radius: .5rem;
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
    border:none;
    outline:.4rem solid rgba(0,0,0,.1);
    outline-offset: -0.2rem;
    &:hover {
        background: #33691E;
        color: #fff;
    }
`
const ContainerFilter = styledComponents.label`
    position: relative;
    margin-bottom: 1.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${props => props.theme === true ? '#fff' : 'black'};
    width:100%;
    border-radius: .5rem;
    background: ${props => props.theme === true ? '#6d3c11' : '#fff'};
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
    outline:.4rem solid rgba(0,0,0,.1);
    outline-offset: -0.2rem;
    text-align: center;
    &:hover {
        background: #33691E;
        color: #fff;
    }
`
const CheckBoxFilter = styledComponents.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    display: block;
    &:checked{
        background-color: #2196F3;
    }
`
const CheckMark = styledComponents.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
`
const PaginationContainer = styledComponents.div`
    display: inline-block;
    padding-left: 10%;
    font-size: 1.5rem;
    padding-bottom: 2rem;
    @media (max-width: 700px) {
        padding-left: 10%;
    }
    @media (max-width: 400px) {
        font-size:1rem;
        padding-left: 10%;
    }
`
const PaginationLink = styledComponents.button`
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border: 1px solid #ddd;
`
const PaginationLinkActive = styledComponents.button`
    background-color:#6d3c11;
    color: #fff;
    float: left;
    padding: 8px 16px;
    border: 1px solid #ddd;
`
const TextAlignItems = styledComponents.div`
    text-align:center;
`

export { DivWrapper, FilterBy, CheckBoxFilter, ContainerFilter, PaginationLinkActive,
        CheckMark, RemoveFilterBTN, PaginationContainer, PaginationLink, TextAlignItems }