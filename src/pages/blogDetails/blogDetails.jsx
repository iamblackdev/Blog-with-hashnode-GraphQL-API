import './styles.css'

import useFetch from '../../custom hooks/useFetch'
import { useParams } from "react-router-dom"
import Spin from '../../component/spin/spin'
import PostDate from '../../component/date/date'
import { useEffect } from 'react'



const Blog = ({changeHeader}) => {


  let { slug, user } = useParams()

  let { datas, isPending, spin, error } = useFetch(user, slug, 'COMMUNITY')


  
  useEffect(() => {
    if (isPending) {
      let link = document.querySelectorAll('.embed-card')
      link.forEach(e => {

        const videoId = getId(e.href);

        function getId(url) {
          const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          const match = url.match(regExp);
      
          return (match && match[2].length === 11)
            ? match[2]
            : null;
        }
        const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
          + videoId + '" frameborder="0" allowfullscreen></iframe>';
        
        e.innerHTML = iframeMarkup
        
      
      })
    }
  }, [isPending])


  return (
    
    <div className="blog-content-wrapper">
      {  spin && <div className="spin-wrapper"><Spin height="100px" width="100px"/> </div> }
      { error && <div className="error-message">{error}</div> }
      { isPending &&
        <div className="blog-content">
        {changeHeader(`${datas.data.post.title}`)}
        {datas.data.post.coverImage && <img src={datas.data.post.coverImage }/>}
        <div className="writer-details">
          <div className="writer-photo">
            <img src={`${datas.data.post.author.photo}`} alt="photo"/>
          </div>
          <div className="writer-name">
            <h2 className="name">{datas.data.post.author.name}</h2>
            <p className="published-on"><span>Published on:</span> <PostDate dateAdded={datas.data.post.dateAdded}/> </p>
            
            <div className="writer-social">
              {datas.data.post.author.socialMedia.github && <a target="_blank" href={`${datas.data.post.author.socialMedia.github}`}><i className="fa fa-github"></i></a>}
              {datas.data.post.author.socialMedia.twitter && <a target="_blank" href={`${datas.data.post.author.socialMedia.twitter}`}><i className="fa fa-twitter"></i></a> }        
            </div>

          </div>
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: datas.data.post.content }} />
        
        </div>
      }
    
    </div>
   );
}
 
export default Blog;