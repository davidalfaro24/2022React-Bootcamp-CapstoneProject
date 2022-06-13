import styledComponents, { keyframes } from "styled-components";

const Spinner = keyframes`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
`
const LoadingState = styledComponents.div`
    display: inline-block;
    width: 7rem;
    height: 5rem;
    margin: 4rem 7rem;
    &:after{
        content: ' ';
        display: block;
        width: 4rem;
        height: 4rem;
        margin: 0.5rem;
        border-radius: 50%;
        border: 6px solid teal;
        border-color: teal transparent teal transparent;
        animation: ${Spinner} 1.2s linear infinite;
    }
`
export { LoadingState }