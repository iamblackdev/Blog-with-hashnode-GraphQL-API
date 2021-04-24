import { Link } from 'react-router-dom'
import PostDate from '../date/date'
import './styles.css'



const PostCard = ({post, params}) => {
  return (
    <div className="post-card">
      <div className="blog-image">
        {post.coverImage && <img src={post.coverImage} alt="cover image" />}
      </div>
      <div className="blog-details">
        <p className="date"> <PostDate color="gray" dateAdded={post.dateAdded} /> </p>

        <h3 className="title">{post.title}</h3>
        <p className="brief">{ post.brief }</p>
        
        <div className="read-full">
          <Link to={`/${params}/${post.slug}`}>
            Read Full <i className="fa fa-long-arrow-right"></i>
          </Link>
          <div>
            <span> { post.replyCount }<i class="fa fa-comment"></i></span> |
            <span> { post.totalReactions}<i class="fa fa-thumbs-up"></i></span> 
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default PostCard;