import React from "react";

export default function Films(props) {
  return (
    <div id="film-thumnails-wrap">
      {/* Nav pills */}
      <ul className="nav nav-pills justify-content-center align-items-center mb-5">
        <li id="current-films" className="nav-item">
          <a
            className="nav-link active"
            data-toggle="pill"
            href="#showing-films"
          >
            Đang Chiếu
          </a>
        </li>
        <li id="future-films" className="nav-item">
          <a className="nav-link" data-toggle="pill" href="#coming-films">
            Sắp Chiếu
          </a>
        </li>
      </ul>
      {/* Tab panes */}
      <div className="tab-content container-sm">
        {/* Showing films  */}
        <div className="tab-pane active" id="showing-films">
          <div
            id="film-thumbnails-1"
            className="carousel slide mx-auto"
            data-ride="carousel"
            data-interval="false"
          >
            <a
              className="carousel-control-prev"
              href="#film-thumbnails-1"
              role="button"
              data-slide="prev"
            >
              <i className="fas fa-chevron-left control-arrow left-arrow" />
              <img
                src="./img/carousel/png-clipart-arrow-computer-icons-encapsulated-postscript-next-button-angle-rectangle-thumbnail.png"
                className="control-arrow left-arrow"
              />
            </a>
            <div
              id="carousel-inner"
              className="carousel-inner container rounded"
            >
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  {/* ROW 1  */}
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href="#">
                            <img
                              className="rounded img-fluid"
                              src="https://picsum.photos/200/300"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">7</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age P-type btn text-white">P</span>
                            Tom &amp; Jerry
                          </div>
                          <div
                            className="length mt-2 d-inline-block align-bottom"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>100 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="img/film_thumbnail/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8.8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age C-type btn text-white">
                              C16
                            </span>
                            Lừa Đểu Gặp Lừa Đảo - The Con-Heartist (C16)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>128 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age C-type btn text-white">
                              C13
                            </span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tay-xa-thu-the-marksman-c16-16111970241171_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C16</span>
                            Tay Xạ Thủ - The Marksman (C16)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  {/* ROW 2  */}
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  {/* ROW 1  */}
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href="#">
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tom-jerry-16127706651597_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">7</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age P-type btn text-white">P</span>
                            Tom &amp; Jerry
                          </div>
                          <div
                            className="length mt-2 d-inline-block align-bottom"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>100 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="img/film_thumbnail/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8.8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age C-type btn text-white">
                              C16
                            </span>
                            Lừa Đểu Gặp Lừa Đảo - The Con-Heartist (C16)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>128 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age C-type btn text-white">
                              C13
                            </span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tay-xa-thu-the-marksman-c16-16111970241171_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C16</span>
                            Tay Xạ Thủ - The Marksman (C16)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  {/* ROW 2  */}
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="film-score text-center rounded">
                            <p className="text-white">8</p>
                            <p>
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                              <img
                                className="star"
                                src="./img/film_thumbnail/star1.png"
                                alt
                              />
                            </p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                        <div className="hover-info w-100">
                          <a
                            href="#"
                            className="btn buyNow w-100 text-uppercase"
                          >
                            Mua Vé
                          </a>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                </div>
              </div>
              {/* Start control arrows  */}
              {/* End control arrows  */}
            </div>
            <a
              className="carousel-control-next"
              href="#film-thumbnails-1"
              role="button"
              data-slide="next"
            >
              <img
                src="./img/carousel/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"
                className="control-arrow right-arrow"
              />
            </a>
          </div>
        </div>
        {/* Coming films  */}
        <div className="tab-pane fade" id="coming-films">
          <div
            id="film-thumbnails-2"
            className="carousel slide mx-auto"
            data-ride="carousel"
            data-interval="false"
          >
            <a
              className="carousel-control-prev"
              href="#film-thumbnails-2"
              role="button"
              data-slide="prev"
            >
              <i className="fas fa-chevron-left control-arrow left-arrow" />
              <img
                src="./img/carousel/png-clipart-arrow-computer-icons-encapsulated-postscript-next-button-angle-rectangle-thumbnail.png"
                className="control-arrow left-arrow"
              />
            </a>
            <div
              id="carousel-inner"
              className="carousel-inner container rounded"
            >
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  {/* ROW 1  */}
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href="#">
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/Coming-films/biet-doi-san-ma-chuyen-kiep-ghostbusters-afterlife-15759470166331_215x318.jpg"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">05/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age P-type btn text-white">P</span>
                            Biệt Đội Săn Ma Chuyển Kiếp - Ghostbusters Afterlife
                          </div>
                          <div
                            className="length mt-2 d-inline-block align-bottom"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>100 Phút</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/bo-gia-p-16127713123806_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">12/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age P-type btn text-white">P</span>
                            Bố Già (P)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>115 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age C-type btn text-white">
                              C13
                            </span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tay-xa-thu-the-marksman-c16-16111970241171_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C16</span>
                            Tay Xạ Thủ - The Marksman (C16)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  {/* ROW 2  */}
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  {/* ROW 1  */}
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href="#">
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tom-jerry-16127706651597_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age P-type btn text-white">P</span>
                            Tom &amp; Jerry
                          </div>
                          <div
                            className="length mt-2 d-inline-block align-bottom"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>100 Phút</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="img/film_thumbnail/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age C-type btn text-white">
                              C16
                            </span>
                            Lừa Đểu Gặp Lừa Đảo - The Con-Heartist (C16)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>128 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="age C-type btn text-white">
                              C13
                            </span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5 mb-4">
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tay-xa-thu-the-marksman-c16-16111970241171_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C16</span>
                            Tay Xạ Thủ - The Marksman (C16)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  {/* ROW 2  */}
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                  <div className="thumbnail-content col-md-3 col-sm-4 col-5">
                    {/* ******************************************** */}
                    <div className="film">
                      <div className="film-img">
                        <div className="default-film-content">
                          <a href>
                            <img
                              className="rounded img-fluid"
                              src="./img/film_thumbnail/tazza-than-bip-jack-chot-tazza-one-eyed-jack-c13-16127716280582_215x318.png"
                              alt
                            />
                          </a>
                          <span className="realease-day text-center rounded">
                            <p className="text-white">21/03</p>
                          </span>
                        </div>
                        <div className="hover-film-content rounded">
                          <a
                            className="venobox"
                            data-vbtype="video"
                            href="https://www.youtube.com/watch?v=6kfEcyVX960&ab_channel=EssentialTruth"
                          >
                            <i className="fas fa-play text-center" />
                          </a>
                        </div>
                      </div>
                      {/* **************************** */}
                      <div className="film-info">
                        <div className="default-info mt-3">
                          <div className="name">
                            <span className="C-type btn text-white">C13</span>
                            Tazza: Thần Bịp Jack Chột - Tazza: One Eyed Jack
                            (C13)
                          </div>
                          <div
                            className="length mt-2"
                            style={{ fontSize: "smaller" }}
                          >
                            <p>139 Phút</p>
                          </div>
                        </div>
                      </div>
                      {/* ***************************************** */}
                    </div>
                    {/* ******************************************** */}
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-next"
              href="#film-thumbnails-2"
              role="button"
              data-slide="next"
            >
              <img
                src="./img/carousel/arrow+right+chevron+chevronright+right+right+icon+icon-1320185732203239715.png"
                className="control-arrow right-arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
