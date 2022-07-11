import styled from "styled-components";

export const Label = styled.span`
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: white;
`;

export const Button = styled.button`
    display: flex;
    cursor: pointer;
    width: 130px;
    height: 130px;
    padding: 5px 10px;
    margin: 5px 0;
    flex-direction: column;
    background-color: black;
    border-radius: 10px;
    color: ${({ active }) => active ? "white" : "gray"};
    border: ${({ active }) => active && "2px solid"};
    align-items: flex-start;
    justify-content: flex-end;
    transition: 0.2s;

    & svg {
        align-self: center;
        width: 80px;
        height: 80px;
    }

    & path {
        fill: currentColor;
    }
`;