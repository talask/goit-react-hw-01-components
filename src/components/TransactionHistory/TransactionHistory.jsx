import PropTypes from 'prop-types';
import { MarkupTransactionHistory } from './MarkupTransactionHistory';

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
                <MarkupTransactionHistory items={items} />
            </tbody>
        </table>
    )
    }
    
TransactionHistory.propTypes = {
        items: PropTypes.array,
    }