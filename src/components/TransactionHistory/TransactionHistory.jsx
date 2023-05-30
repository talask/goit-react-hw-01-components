import PropTypes from 'prop-types';
import { TransactionHistoryTr } from './TransactionHistoryTr';
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
                        <TransactionHistoryTr 
                            id={id}
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    )
                    } )
                }
                
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
    
