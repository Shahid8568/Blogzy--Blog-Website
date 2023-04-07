import React,{useState} from 'react'

const Wrtie = ({addBlog}) => {

  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("")
  const [img, setImg] = useState("")
  
  const submit = (e) =>{
    e.preventDefault();
    if(!title || !desc || !img || !author || !category || !date){
      alert("Something is remain Blank")
    }
    else{
      addBlog(category,title,desc,date,author,img);
      alert("Published Successfully !")
    }
  }

  const chooseImg = (e) =>{
    if(e.target.files.length !==0){
      setImg(URL.createObjectURL(e.target.files[0]))
    }
  }
 
  return (
    <div className='write container'>
      <img className='my-4' id='imgSrc' width="100%" height="100%" style={{width:"100%",height:"70vh",border:"1px solid white",borderRadius:"10px"}} 
      src={img} alt="" />
       

      <form onSubmit={submit}>


      <input type="file" id="file"  onChange={chooseImg} placeholder='Choose Image' className='form-control'/>

        <input className='form-control' type="text" id='category' value={category} onChange={(e)=> setCategory(e.target.value)} placeholder='Category :' />
        <input type="text"  placeholder="Author :" value={author} className='form-control' id='author' onChange={(e)=> setAuthor(e.target.value)}/>


        <input type="text" placeholder='Date : Date - Month - Year'  className='form-control' value={date} id="date" onChange={(e)=> setDate(e.target.value)}/>

      <input className='form-control' type="text" id='title' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Title :' /> 
      <button className="btn btn-success" style={{marginLeft:"38px"}}>Publish</button>
      <textarea  className='form-control' name="description" value={desc}  onChange={(e)=> setDesc(e.target.value)}  placeholder='Start Writing ...' id="desc" cols="30" rows="10"></textarea>

      </form>
    </div>
  )
}

export default Wrtie
