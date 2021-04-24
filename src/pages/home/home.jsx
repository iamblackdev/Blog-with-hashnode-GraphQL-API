import { useState } from 'react';
import Search from '../../component/searchInput/searchInput'
import './styles.css'
import useFetch from '../../custom hooks/useFetch';
import UserCard from '../../component/userCard/useCard';
import PostCard from '../../component/postCards/postCards';
const Home = ({changeHeader}) => {




  let [username, setUsername] = useState('blackdev')
  let [filter, setFilter] = useState('COMMUNITY')
  let { datas, isPending, error, spin } = useFetch(username, 'blog-preview-ckntuqw2y06p4bts18jh17xgz', filter)

  
  changeHeader('Blog')



  return (
    
    <div className="home">   
      <div className="search-bar" >
        <Search error={error} spin={spin} search={(e, value) => {
          e.preventDefault();
          setUsername(value)
        }} />
      </div>
      { isPending &&
        <div className="user-latest-post">
          <UserCard datas={datas} />

        <div className="stories-feed">
          <h1 className="stories-feed-heading">Stories feed</h1>
          <div className="stories-feed-filter">
             <select
            value={filter}
            onChange={(e)=> setFilter(e.target.value)}
            >
              <option value="COMMUNITY">Community</option>
              <option value="BEST">Best</option>
              <option value="NEW">New</option>
              <option value="FEATURED">Featured</option>
            </select>
          </div>
        </div>
        
        

          <div className="newsFeed">
          
            {
              datas.data.storiesFeed.sort((a, b) => (new Date(a.dateAdded) > new Date(b.dateAdded)) ? -1 : 1)
              .map((feed, index) => (
                <PostCard key={index} post={feed} params="blog" />
              ))
            }
          
          </div>
        </div>
      }
    </div>
   );
}
 
export default Home;