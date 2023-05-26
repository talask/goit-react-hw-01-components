
import { StatisticsToList } from './StatisticsToList';

export const Statistics = ({title, stats}) => {
    return (
        <section className='statistics'>
            { title
                ? <h2 className='title'>{title}</h2>
                : ''
            }
            
            <ul className='stat-list'>
               
                { StatisticsToList({stats}) }
            </ul>
        </section>
    );
};



