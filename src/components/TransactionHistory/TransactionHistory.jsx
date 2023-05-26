import PropTypes from 'prop-types';
import { itemsToTd } from './itemsToTd';

export const TransactionHistory = ({items}) => {
    return (
        <table 
            className="transaction-history"
        >
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {itemsToTd(items)}
            </tbody>
        </table>
    )
    }
    
TransactionHistory.propTypes = {
        items: PropTypes.object
    }