//import PropTypes from 'prop-types';
import { friendToList } from './friendToList'

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friendToList({friends})}
        </ul>
    )
}


