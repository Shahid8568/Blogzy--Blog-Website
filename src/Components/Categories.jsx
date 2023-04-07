import React from 'react'

const Categories = () => {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <h1>Sports</h1>
      <p>Life is a Sport,Make It Count</p>
      <img  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <p id='pt'>Travel far Enough you meet  Yourself</p>
        <img src="https://i.pinimg.com/originals/20/cb/f3/20cbf31ecf279ccab1a3264a2cec80c6.jpg" className="d-block w-100" id="travel" alt="..."/>
    </div>
    <div className="carousel-item">
    <h1>Technology</h1>
        <p>Technology is a useful servant but a dangerous Master</p>
        <img src="https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?b=1&k=20&m=1206796363&s=612x612&w=0&h=P-Ijv-53HJyQkKKebB7JcQDwbvZXhz38PoDd_NF_gnk=" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Categories
