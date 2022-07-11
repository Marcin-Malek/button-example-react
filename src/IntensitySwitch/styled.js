import styled from "styled-components";

export const Label = styled.span`
    font-size: 15px;
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
    border-radius: 5px;
    color: ${({ active }) => active ? "white" : "gray"};
    border: ${({ active }) => active && "2px solid"};
    align-items: flex-start;
    justify-content: flex-end;
    transition: 0.2s;

    & svg {
        align-self: center;
        width: 90px;
        height: 90px;
    }

    & path {
        fill: currentColor;
    }
`;