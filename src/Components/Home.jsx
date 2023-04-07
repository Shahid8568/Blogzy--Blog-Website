import React from 'react'
import BlogsCont from './BlogsCont'
import Categories from './Categories'

const Home = ({blogs,setBlogs}) => {
  return (
    <div>
        <Categories/>
        <BlogsCont blogs={blogs} setBlogs={setBlogs}/>
    </div>
  )
}

export default Home