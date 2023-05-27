import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import { FriendList } from './Friendlist/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import { Statistics } from './Statistics/Statistics';
import user from'./user.json';
import friends from './friends.json';
import transactions from './transactions.json';
import data from './data.json';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
      />

      <Statistics 
        title="Upload stats" 
        stats={data} 
      />

      <FriendList 
        friends={friends} 
      />
      
      <TransactionHistory 
        items={transactions} 
      />
    </>
  )
}

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
}

FriendList.propTypes = {
  friends:  PropTypes.array,
}

TransactionHistory.propTypes = {
  items:  PropTypes.array,
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object, 
}
