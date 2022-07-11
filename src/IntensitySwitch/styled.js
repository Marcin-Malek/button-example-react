import styled from "styled-components";

export const Label = styled.span`
    font-size: 15px;
`;

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    background-color: black;
    border-radius: 5px;
    color: ${({active}) => active ? "white" : "gray"};
    outline: ${({active}) => active && "1px solid"};
    align-items: flex-start;
    justify-content: center;

    & path {
        fill: currentColor;
    }
`;