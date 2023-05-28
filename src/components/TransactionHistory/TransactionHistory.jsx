import PropTypes from 'prop-types';
import { TableTransactionHistory } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <TableTransactionHistory>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                { items.map(({id, type, amount, currency}) => {
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                } )}
                
            </tbody>
        </TableTransactionHistory>
    )
    }

    TransactionHistory.propTypes = {
        items: {
            id: PropTypes.string, 
            type: PropTypes.string, 
            amount: PropTypes.string, 
            currency: PropTypes.string,
        }
      }
    
