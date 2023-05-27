import styled from 'styled-components';


export const ListFriends = styled.ul`
    width: 300px;
    margin: 0 auto;
    margin-top: 70px;
    list-style: none;
    color: #111111;
`;

export const ItemFriends = styled.li`
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 10px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    box-shadow: 1px 2px #eeeeee;
    margin-bottom: 10px;

    span {
        /* display: block; */
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${({sost}) => sost ? 'green' : 'gray'};
    }

    img {
        width: 50px;
    }

    p {
        font-size: 24px;
        font-weight: bold;
    }
`;