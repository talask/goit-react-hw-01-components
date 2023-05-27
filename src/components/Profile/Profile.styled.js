import styled from 'styled-components';

export const DivProfile = styled.div`
    width: 550px;
    margin: 0 auto;
    font-family: Verdana, Arial, sans-serif;
    font-size: 14px;
    color: #111111;
    text-align: center;
    padding: 50px;
    background-color: #efefef;
    border-radius: 5px;
    letter-spacing: 1.4;
`;

export const Description = styled.div`
    width: 350px;
    font-size: 16px;
    margin: 0 auto;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 10px;
`;

export const Photo = styled.img`
    width: 250px;
    border-radius: 50%;
    box-shadow: inset 0.5px 0.5px #eeeeee,
                0.5px 0.5px #eeeeee;
`;

export const TitleName = styled.p`
    font-weight: bold;
`;

export const ListStats = styled.ul`
    display: flex;
    list-style: none;
    width: 350px;
    margin: 0 auto;
    padding: 10px;
    background-color: #efffff ;
    border-radius: 5px;
`;

export const ItemStats = styled.li`
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     flex-basis: calc(100%/3);
     height: 50px;
     border-left: 1px solid #eeeeee;
     border-right: 1px solid #eeeeee;
`;

export const SpanQualityStats = styled.span`
    font-weight: bold;
`;
