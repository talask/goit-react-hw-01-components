import PropTypes from 'prop-types';
import { StatisticsToList } from './StatisticsToList';

export const Statistics = (title, data) => {
    return (
        <section className='statistics'>
            { title
                ? <h2 className='title'>{title}</h2>
                : ''
            }
            <ul className='stat-list'>
                { StatisticsToList(data) }
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    data: PropTypes.object,
    title: PropTypes.string,
}

