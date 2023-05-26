import { TitleStatistic } from './TitleStatistic';
import { MarkupStatistics } from './MarkupStatistics';

export const Statistics = ({title, stats}) => {
    return (
        <section className='statistics'>
            <TitleStatistic title={title} />
            
            <ul className='stat-list'> 
                <MarkupStatistics stats={stats} />
            </ul>
            
        </section>
    );
};



