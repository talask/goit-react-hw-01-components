import { DivProfile, Description, Photo, TitleName, ListStats, ItemStats,SpanQualityStats } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <DivProfile>
        <Description>
            <Photo
                src={avatar}
                alt="User avatar"
                className="avatar" 
            >
            </Photo>
            <TitleName>{username}</TitleName>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </Description>

        <ListStats>
            <ItemStats>
                <span className="label">Followers</span>
                <SpanQualityStats>{stats.followers}</SpanQualityStats>
            </ItemStats>
            <ItemStats>
                <span className="label">Views</span>
                <SpanQualityStats>{stats.views}</SpanQualityStats>
            </ItemStats>
            <ItemStats>
                <span className="label">Likes</span>
                <SpanQualityStats>{stats.likes}</SpanQualityStats>
            </ItemStats>
        </ListStats>
    </DivProfile>
    
    )
}

