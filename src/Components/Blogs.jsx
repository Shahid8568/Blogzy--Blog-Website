import React from 'react'
import {NavLink} from "react-router-dom"
import Card from './Card'

const Blogs = ({blogs,setBlogs}) => {

  if(blogs.length === 0) return <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"63vh",marginTop:"5%"}}><h2 style={{color:"white"}}>No Blogs to display</h2></div>

  return (
    <>
    <header id='header-2' style={{boxShadow:"none",top:"72px"}}>
        <ul className='d-flex' style={{margin: "0 24%",justifyContent: "space-evenly",
    background: "black",padding:"12px",fontSize:"18px",}}>
            <NavLink className="blogsLI" to="/Sports">Sports</NavLink>
            <NavLink className="blogsLI" to="/Travel">Travel</NavLink>
            <NavLink className="blogsLI" to="/Technology">Technology</NavLink>
        </ul>
    </header> 
    <h1 className='mt-5' style={{color:"white",textDecoration:"underline",display:"block",margin:"10px 55px"}}>Blogs :-</h1>
     <div className='d-flex' style={{ margin: "1% 3%" }}>
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
     </>
  )
}

export default Blogs
