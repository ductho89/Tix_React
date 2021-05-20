import React from 'react'

export default function Carousel(props) {
  return (
    <div id="carousel-wrap" className="w-100">
  {/* Start Film Trailers */}
  <div id="film-trailer" className="carousel slide w-100" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#film-trailer" data-slide-to={0} className="active" />
      <li data-target="#film-trailer" data-slide-to={1} />
      <li data-target="#film-trailer" data-slide-to={2} />
      <li data-target="#film-trailer" data-slide-to={3} />
      <li data-target="#film-trailer" data-slide-to={4} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="./img/carousel/can-phong-ma-am-16115699578033.jpg" alt="First slide" />
        <div className="play-button">
          <a className="venobox" data-vbtype="video" href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth">
            <i className="fas fa-play text-center" />
          </a>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./img/carousel/di-nguyen-bi-an-16119103023007.png" alt="Second slide" />
        <div className="play-button">
          <a className="venobox" data-vbtype="video" href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth">
            <i className="fas fa-play text-center" />
          </a>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./img/carousel/em-la-cua-em-16106818552756.jpg" alt="Third slide" />
        <div className="play-button">
          <a className="venobox" data-vbtype="video" href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth">
            <i className="fas fa-play text-center" />
          </a>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./img/carousel/lua-deu-gap-lua-dao-16105107337344.jpg" alt="Third slide" />
        <div className="play-button">
          <a className="venobox" data-vbtype="video" href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth">
            <i className="fas fa-play text-center" />
          </a>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="./img/carousel/tho-san-quai-vat-16094165971645.jpg" alt="Third slide" />
        <div className="play-button">
          <a className="venobox" data-vbtype="video" href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth">
            <i className="fas fa-play text-center" />
          </a>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#film-trailer" role="button" data-slide="prev" aria-hidden="true">
      <img src="./img/carousel/png-clipart-arrow-computer-icons-encapsulated-postscript-next-button-angle-rectangle-thumbnail.png" className="left-arrow" />
      {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
      {/* <span class="sr-only">Previous</span> */}
    </a>
    <a className="carousel-control-next" href="#film-trailer" role="button" data-slide="next">
      <img src="./img/carousel/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png" className="right-arrow" />
    </a>
  </div>
  {/* End Film Trailers */}
  {/* Start Film Filter  */}
  <div id="filmFilter" className="d-flex shadow rounded mx-auto py-4 px-2" style={{maxWidth: 960}}>
    <div id="filmSelect" className="filmFilterItem dropdown w-25">
      <button className="btn dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Phim
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div id="locationSelect" className="filmFilterItem dropdown w-25">
      <button className="btn dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Rạp
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div id="dateSelect" className="filmFilterItem dropdown w-25">
      <button className="btn dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ngày xem
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <div id="timeSelect" className="filmFilterItem dropdown w-25">
      <button className="btn dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Suất chiếu
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    <button id="buyNow" className="btn bg-secondary text-white text-uppercase w-25 ml-2">
      Mua vé ngay
    </button>
  </div>
  {/* End Film Filter  */}
</div>

  )
}
