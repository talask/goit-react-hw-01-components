
import { MarkupFriends } from './MarkupFriends'

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            <MarkupFriends friends={friends} />
        </ul>
    )
}


