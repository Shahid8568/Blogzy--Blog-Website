import React from 'react';
import { useParams } from 'react-router-dom';


const Singleblog = ({blogs,setBlogs}) => {

  const {id} = useParams();

  return (
    <div className='m-5 text-light singleBlog'> 
    <div className='mx-4 my-3'>
      <img id='singleImg' style={{width:"100%",height:"75vh",border:"1px solid white",borderRadius:"10px"}} src={blogs[id]?.img} alt="" /> 
      <div className="A_D d-flex mt-4 text-danger" style={{justifyContent:"space-between",fontSize:"22px"}} >
      <span className=''>Author : {blogs[id].author}</span>
      <span>Date : {blogs[id].date}</span>
      </div>
      <h2 className='mt-5 mb-4' style={{textDecoration:"underline",textDecorationColor:"gray"}}>{blogs[id].title} : </h2> 
      <p style={{lineHeight:"2",fontWeight:"500",fontFamily:"sans-serif",fontSize:"20px",}}>{blogs[id].desc}</p>
      
    </div>
    </div>
 
  )
}

export default Singleblog
