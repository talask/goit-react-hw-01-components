import PropTypes from 'prop-types';
import { MarkupFriendlist } from './MarkupFriendlist';
import { ListFriends } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <ListFriends>
            <MarkupFriendlist friends={ friends } />
        </ListFriends>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array
     }
 


