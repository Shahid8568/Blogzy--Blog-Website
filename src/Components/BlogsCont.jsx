import React from 'react'
import Card from './Card'

const BlogsCont = ({blogs,setBlogs}) => {
  if(blogs.length === 0) return <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"9vh",marginTop:"5%"}}><h2 style={{color:"white"}}>No Blogs to display</h2></div>
  return (
    <div className='d-flex' style={{ margin: "3%" }}>
      <div className="row" style={{ gap: "0 6rem" }}>
          {
            blogs.map((e)=>{
              return <div key={e.id} className="col-md-3 mx-2 my-3">
              <Card blogs={blogs} setBlogs={setBlogs} author={e.author} date={e.date} category={e.category} title={e.title} desc={e.desc} img={e.img} id={e.id}/>
            </div>
            })
          }
        </div>
      </div>
  )
}

export default BlogsCont
