import { useEffect, useState } from "react";

const useFetch = (username, slug, filter) => {



  let [datas, setDatas] = useState()
  let [isPending, setIsPending] = useState(false)
  let [error, setError] = useState('')
  let [spin, setSpin] = useState(false)


  const query = `{
    user(username: "${username}") {
    _id
    username
    name
    tagline
  	numFollowing
    numFollowers
    location
    photo
    socialMedia{
      website
    }
    publication {
      posts(page: 0) {
        slug
        title
        brief
        coverImage
        replyCount
        dateAdded
        totalReactions
      }
    }
  }
  post(slug:"${slug}", hostname:"") {
    title
    coverImage
    dateAdded
    content
    author{
      name
      photo
      socialMedia{
        github
        twitter
      }
    }
  }
  storiesFeed(type: ${filter}){
    slug
    coverImage
    brief
    dateAdded
    title
    replyCount
    totalReactions
  }
}`

  let fetchData = () => {
    
    fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ query })
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Data not fetched')
      }
    }).then(fetchedData => {
      if (fetchedData.data.user) {
        if (fetchedData.data.post) {
          setDatas(fetchedData)
          // localStorage.setItem('datas', JSON.stringify(fetchedData));
          setIsPending(true)
          setSpin(false)
          setError(null)
        } else {
          throw new Error('wrong blog title, Each word should be separated with a dash')
        }
      } else {
        throw new Error('oops🤭, wrong username. Please check for correct spelling')
      }
    }).catch(err => {
      if (err.message == 'Failed to fetch') {
        err.message = 'oops🤭 Failed to fetch. Check your internet connection'
        setError(err.message)
        setSpin(false)
      } else {
        setError(err.message)
        setSpin(false)
      }
      
    })
  
    
  };

  


  useEffect(() => {
    setIsPending(false)
    setSpin(true)
    // if ( (localStorage.getItem('datas')) !== null && (username == JSON.parse(localStorage.getItem('datas')).data.user.username) && (JSON.parse(localStorage.getItem('datas')).data.post !== null ) && (slug == JSON.parse(localStorage.getItem('datas')).data.post.slug)) {
    //   setDatas(JSON.parse(localStorage.getItem('datas')))
    //   setIsPending(true)
    //   setSpin(false)
    //   setError(null)
    // } else {
      fetchData()
    // }   
  }, [username, slug, filter])

  return {datas, isPending, error, spin}
}

export default useFetch