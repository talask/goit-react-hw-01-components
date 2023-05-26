export function itemsToTd(items) {
    return items.map(({id, type, ammount, currency}) => {
        return (
            <tr key={id}>
                <td>{type}</td>
                <td>{ammount}</td>
                <td>{currency}</td>
          </tr>
        )
    } ) 
}