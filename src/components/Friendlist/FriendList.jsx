import PropTypes from 'prop-types';
import { friendToList } from './friendToList'

export const Friendlist = (friends) => {
    return (
        <ul className="friend-list">
            {friendToList(friends)}
        </ul>
    )
}


Friendlist.propTypes = {
    friends:  PropTypes.object
}