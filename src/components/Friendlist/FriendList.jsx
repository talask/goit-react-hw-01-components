import PropTypes from 'prop-types';
import { FrendListItem } from './FrendListItem';
import { ListFriends } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <ListFriends>
            { friends.map(({id, isOnline, avatar, name}) => 
                <FrendListItem id={id} isOnline={isOnline} avatar={avatar} name={name} />
            )
            }
            
        </ListFriends>
    )
}

FriendList.propTypes = {
    
    friends:  {
        id: PropTypes.number, 
        isOnline: PropTypes.bool, 
        avatar: PropTypes.string, 
        name: PropTypes.string,
    }
    
}


