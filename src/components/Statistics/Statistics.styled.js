import styled from 'styled-components';

export const SectionStatistic = styled.section`
    width: 550px;
    margin: 0 auto;
    margin-top:50px;
    font-family: Verdana, Arial, sans-serif;
    font-size: 14px;
    color: #111111;
    text-align: center;
    padding: 50px;
    background-color: #efefef;
    border-radius: 5px;
    letter-spacing: 1.4;
`;

export const TitleH2 = styled.h2`
    margin: 0 auto;
    padding: 30px;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 1.6;
    background-color: #ffffff ;
`;

export const ListStatistics = styled.ul`
    display: flex;
    list-style: none;
    
    margin: 0 auto;
    
    background-color: #efffff ;
    border-radius: 5px;
    padding: 0;
`;

export const ItemStatistics = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${ ({color}) => color };
    width: ${ ({count}) => 100/count }%;
    color: #ffffff; 
    height: 70px;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    
`;

export const PercentageStatistics = styled.span`
    font-size: 20px;
`;