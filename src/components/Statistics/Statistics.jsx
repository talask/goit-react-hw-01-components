import { TitleStatistic } from './TitleStatistic';
import { MarkupStatistics } from './MarkupStatistics';

import { SectionStatistic, ListStatistics } from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
        <SectionStatistic>
            <TitleStatistic title={title} />
            
            <ListStatistics> 
                <MarkupStatistics stats={stats} />
            </ListStatistics>
            
        </SectionStatistic>
    );
};



