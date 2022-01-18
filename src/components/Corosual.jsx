
import React from "react";

import "./corosual.css"
const Corosual =()=>{
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  style={{height:"25rem",
    width:"99.5vw"}} src="https://thumbor.forbes.com/thumbor/711x474/http://specials-images.forbesimg.com/imageserve/750037840/960x0.jpg?fit=scale" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  style={{height:"25rem",
    width:"99.5vw"}} src="https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/NS-WKMAG0730-1595944356.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img   style={{height:"25rem",
    width:"99.5vw"}} src="https://api.time.com/wp-content/uploads/2018/04/listening-to-music-headphones.jpg?w=824&quality=70" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}
export{Corosual} 