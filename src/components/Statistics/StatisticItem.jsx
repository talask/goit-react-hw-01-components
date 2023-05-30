import PropTypes from 'prop-types';
import { ItemStatistics, PercentageStatistics } from './Statistics.styled';


export const StatisticItem = ({ id, label, percentage, color, countArr }) => {
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
}

StatisticItem.propTypes = {
   
      id: PropTypes.string,
      label: PropTypes.string, 
      percentage: PropTypes.number,
      
}