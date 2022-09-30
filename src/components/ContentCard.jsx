import React from 'react'

function ContentCard(props) {
  return (
    <div className="card w-92 shadow-2xl shadow-black  ">
  <div id={`carouselExampleControls${props.id}`} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={props.image2}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={props.image3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target={`#carouselExampleControls${props.id}`} data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls${props.id}`} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <div className="card-body bg-custom-b1">
    <div className='flex justify-center'>
    <h5 className="card-title text-custom-w1">{props.title}</h5>
    </div>
    <p className="card-text text-custom-w1">Some quick example text to build on the card title and make up the bulk of the card's content.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus error! Ipsum corporis quis dolore aperiam iste quas eaque maxime, neque, blanditiis explicabo provident incidunt ab vel quisquam veniam error.
    </p>
    <div className='flex justify-center'>
    <button className='text-custom-w1 border-2 rounded flex px-2 mx-2 h-10 pt-1 hover:border-custom-r1'>Rent A Car</button>
    </div>
  </div>
</div>
  )
}

export default ContentCard