import React from 'react'
import Card from './Card'
import {NavLink} from "react-router-dom"

const Technology = ({blogs}) => {
  const techData = blogs.filter((e)=> e.category === "Technology");
    return (
      <>
      <header id='header-2' style={{boxShadow:"none",top:"72px"}}>
        <ul className='d-flex' style={{margin: "0 24%",marginBottom:"12px",justifyContent: "space-evenly",
    background: "black",padding:"12px",fontSize:"18px",}}>
            <NavLink className="blogsLI" to="/Sports">Sports</NavLink>
            <NavLink className="blogsLI" to="/Travel">Travel</NavLink>
            <NavLink className="blogsLI" to="/Technology">Technology</NavLink>
        </ul>
    </header>
    <h1 className='mt-5' style={{color:"white",textDecoration:"underline",display:"block",margin:"10px 55px"}}>Tech Blogs :-</h1>
      
      <div className='d-flex' style={{ margin: "3%",marginTop:"1%" }}>
        <div className="row" style={{ gap: "0 6rem" }}>
            {
              techData.map((e)=>{
                  return <div key={e.id} className="col-md-3 mx-2 my-3">
                      <Card  author={e.author} date={e.date} category={e.category} title={e.title} desc={e.desc} img={e.img} id={e.id}/>
                    </div>
                  
              })
            }
          </div>
        </div>
      </>
  )
}

export default Technology
