import { ItemStatistics, PercentageStatistics } from './Statistics.styled';
import { whichColor } from './wichColor';

export const MarkupStatistics = ({stats}) => {
    let countArr = stats.length;
    
    return ( stats.map(({ id, label, percentage }) =>  {
        let color = whichColor(label);
        return (
            <ItemStatistics 
                key={id} 
                color={color} 
                count={countArr}
            >
                <span className='label'> {label} </span>
                <PercentageStatistics> {percentage}%</PercentageStatistics>
            </ItemStatistics>
        )
})
    )
}
