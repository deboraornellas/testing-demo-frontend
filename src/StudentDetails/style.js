import styled from "styled-components";

export const Header = styled.div`
    text-align: center;
    align-items: center;
    font-size: 2em;
    font-family: "Gloria Hallelujah", cursive;
    color: white;
    padding: 0.5em;
    height: 2em;
    border: 0px;
    margin: 0px;
    background-color: DarkOliveGreen;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: fit-content;
    min-width: 40%;
    max-width: 70%;
    margin: 10px auto;
    padding: 20px;
    border: 4px black dashed;
    min-height: 80%;
    background-color: white;
    font-family: "Roboto", sans-serif;
`;

export const TitleStyle = styled.h2`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-family: "Gloria Hallelujah", cursive;
    color: DarkOliveGreen;
`;
export const MainTitleStyle = styled.h1`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-family: "Gloria Hallelujah", cursive;
    color: DarkOliveGreen;
`;

export const ParagraphStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto", sans-serif;
    color: palevioletred;
`;

export const WordStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    heigth: fit-content;
    margin: 10px auto;
    padding: auto;
    background-color: lightgray;
    justify-content: center;
`;
