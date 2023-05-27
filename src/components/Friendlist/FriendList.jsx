import { MarkupFriends } from './MarkupFriends';
import { ListFriends } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <ListFriends>
            <MarkupFriends friends={friends} />
        </ListFriends>
    )
}


