import { TitleH2 } from './Statistics.styled';
export const TitleStatistic = ({title}) => { 
    return title
    ? <TitleH2>{title}</TitleH2>
    : ''
}