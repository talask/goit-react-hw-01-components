import styled from 'styled-components';

export const TableTransactionHistory = styled.table`
    margin: 0 auto;
    margin-top: 70px;
    width: 550px;

    thead {
        background-color: lightblue;
    }

    thead > tr > th {
        padding: 20px;
        font-size: 24px;
        font-weight: normal;
    }

    td {
        padding: 10px 25px;
    }

    tbody tr:nth-child(even) {
        background-color: #efefef;
    }
`;