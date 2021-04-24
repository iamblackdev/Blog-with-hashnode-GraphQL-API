import './styles.css'
import { Link } from 'react-router-dom'
import Button from '../../component/button/button'


const UserCard = ({datas}) => {
  return (
      <div className="user-card">
        <p className="user-text">User</p>
        <div className="user-details">
        
          <div className="user-details-header">
            <div className="user-image">
              <img src={datas.data.user.photo} alt="Photo" />
            </div>
            <div className="username">
              {datas && <h3>{datas.data.user.name}</h3>}
              <p>@{datas.data.user.username}</p>
            </div>
            <div className="follow">
              <a target="_blank" href={`https://hashnode.com/@${datas.data.user.username}`}>
                <Button text="follow" />
              </a>
            </div>
          
          </div>

          <p className="bio">{datas.data.user.tagline}</p>
          <p className="follow-div">{datas.data.user.numFollowers} followers  {datas.data.user.numFollowing} following</p>
          {datas.data.user.location && <p className="location"><i className="fa fa-location-arrow"></i> {datas.data.user.location}</p>}
          {datas.data.user.socialMedia.website && <a target="_blank" href={datas.data.user.socialMedia.website} className="link"><i className="fa fa-link"></i> {datas.data.user.socialMedia.website}</a>}
        
          <div className="check-post">
            <Link to={`/${datas.data.user.username}`}>
              <Button text="Check Posts" />
            </Link>
          </div>

        </div>
      </div>
  );
}
 
export default UserCard;