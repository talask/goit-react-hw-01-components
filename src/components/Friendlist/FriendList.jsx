import PropTypes from 'prop-types';
import { ItemFriends } from './FriendList.styled';
import { ListFriends } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <ListFriends>
            { friends.map(({id, isOnline, avatar, name}) => {
                return (
                    <ItemFriends key={id} sost={isOnline}>
                        <span className="status">{isOnline}</span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </ItemFriends>
                )
            })}

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


