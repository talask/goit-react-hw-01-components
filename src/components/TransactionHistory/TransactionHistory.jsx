import { MarkupTransactionHistory } from './MarkupTransactionHistory';
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
                <MarkupTransactionHistory items={items} />
            </tbody>
        </TableTransactionHistory>
    )
    }
    
