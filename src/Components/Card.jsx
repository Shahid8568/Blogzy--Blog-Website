import React from 'react'
import {Link} from "react-router-dom"

const Card = ({author,date,title,desc,img,id,category,blogs,setBlogs}) => {
  const  deletePost = (id)=>{
    const newBlogs = blogs.filter((e)=> e.id !== id);
    setBlogs(newBlogs);
    }
  return (
    <div>
      <div className="card">
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <span className='category'>* {category}</span>
                <span className='author'>Author : {author}</span>
                <span className='date'>{date}</span>
                <h5 className="card-title">{title.slice(0,35)}</h5>
                <p className="card-text">{desc.slice(0,330)}...</p>
                <Link to={`Singleblog/${id}`} style={{textDecoration:"none",color:"black"}} >
                  <button className="btn btn-primary btn-sm">Read</button>
                </Link>
                <button className='btn btn-danger btn-sm delete' style={{marginLeft:"51%"}} onClick={()=>deletePost(id)}>Delete</button>
              </div>
            </div>
    </div>
  )
}

export default Card
