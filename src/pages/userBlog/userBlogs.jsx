import './styles.css'

import { useParams } from "react-router-dom"
import useFetch from '../../custom hooks/useFetch'
import Spin from '../../component/spin/spin'
import PostCard from '../../component/postCards/postCards'


const User = ({changeHeader}) => {

  
  const { user } = useParams()
  

  let { datas, isPending, spin, error } = useFetch(user, 'blog-preview-ckntuqw2y06p4bts18jh17xgz', 'COMMUNITY')

  

  return (
    <div className="user">
      { spin && <div className="spin-wrapper"><Spin height="100px" width="100px"/> </div> }
      { error && <div className="error-message">{error}</div> }
      

      {isPending && 
        
        <div className="blog-posts">
        {changeHeader(`${datas.data.user.name} Blog Post's`)}
        
        { datas.data.user.publication.posts.length !== 0 ? 
            datas.data.user.publication.posts.map((post, index) => (
              <PostCard key={index} post={post} params={user} />
            ))
          :
          <h1>No blog Post by { datas.data.user.name }</h1>
        }  
          
        </div>

      }
      
      
    </div>
   );
}
 
export default User;