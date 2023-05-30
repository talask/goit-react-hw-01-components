import PropTypes from 'prop-types';
import { TitleH2 } from './Statistics.styled';

import { whichColor } from './wichColor';
import { StatisticItem } from './StatisticItem'

import { SectionStatistic, ListStatistics } from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    let countArr = stats.length;
    return (
        <SectionStatistic>
           { title && <TitleH2>{title}</TitleH2> }

            <ListStatistics> 
                { stats.map(({ id, label, percentage }) =>  {
                    let color = whichColor(label);
                    return (
                        <StatisticItem 
                            id={id} 
                            label={label} 
                            percentage={percentage} 
                            countArr={countArr}
                            color={color}
                        />
                    )
                }) }
            </ListStatistics>
            
        </SectionStatistic>
    )
};

Statistics.propTypes = {
  stats: {
    id: PropTypes.string,
    label: PropTypes.string, 
    percentage: PropTypes.number,
  },
  title: PropTypes.string,
}

