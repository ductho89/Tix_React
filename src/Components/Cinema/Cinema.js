import React from 'react'

export default function Cinema(props) {
  return (
  <div className="container cumRap mx-auto mt-3 ">
    <div className="bg" />
    <div className="cumRap__content">
      <div id="logo_cinemas">
        <ul>
          <li className="active mt-3">
            <a href><img src="./img/bhd1.png" className="img-fluid" alt /></a>
          </li>
          <li>
            <a href><img src="./img/star.png" className="img-fluid" alt /></a>
          </li>
          <li>
            <a href><img src="./img/ddc.png" className="img-fluid" alt /></a>
          </li>
          <li>
            <a href><img src="./img/mega.png" className="img-fluid" alt /></a>
          </li>
          <li>
            <a href><img src="./img/d_cine.jpg" className="img-fluid" alt /></a>
          </li>
          <li>
            <a href><img src="./img/lotte.png" className="img-fluid" alt /></a>
          </li>
        </ul>
      </div>
      <div id="listCinemas">
        <div className="listCinemas__item">
          <img src="./img/bhd2.png" alt="bhd2" className="img-fluid" />
          <div className="info">
            <span className="BHD__color">BHD Star <span className="tenRap"> - Bitexco</span></span>
            <span className="info__movie">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
            <span className="chiTiet"><a href>[chi tiết]</a></span>
          </div>
        </div>
        <div className="listCinemas__item">
          <img src="./img/star2.png" alt="bhd2" className="img-fluid" />
          <div className="info">
            <span className="BHD__color">BHD Star
              <span className="tenRap"> - Vincom Thảo Điền</span></span>
            <span className="info__movie">L5-Megamall, 159 XL Hà Nội, Q.2</span>
            <span className="chiTiet"><a href>[chi tiết]</a></span>
          </div>
        </div>
        <div className="listCinemas__item">
          <img src="./img/ddc2.png" alt="bhd2" className="img-fluid" />
          <div className="info">
            <span className="BHD__color">BHD Star <span className="tenRap"> - Vincom 3/2</span></span>
            <span className="info__movie">L5-Vincom 3/2, 3C Đường 3/2, Q.10</span>
            <span className="chiTiet"><a href>[chi tiết]</a></span>
          </div>
        </div>
        <div className="listCinemas__item">
          <img src="./img/mega2.png" alt="bhd2" className="img-fluid" />
          <div className="info">
            <span className="BHD__color">BHD Star <span className="tenRap"> - Phạm Hùng</span></span>
            <span className="info__movie">L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh</span>
            <span className="chiTiet"><a href>[chi tiết]</a></span>
          </div>
        </div>
        <div className="listCinemas__item">
          <img src="./img/d_cine2.png" alt="bhd2" className="img-fluid" />
          <div className="info">
            <span className="BHD__color">BHD Star
              <span className="tenRap"> - Vincom Quang Trung</span></span>
            <span className="info__movie">B1-Vincom QT, 190 Quang Trung, Gò Vấp</span>
            <span className="chiTiet"><a href>[chi tiết]</a></span>
          </div>
        </div>
        <div className="listCinemas__item">
          <img src="./img/lotte2.png" alt="bhd2" className="img-fluid" />
          <div className="info">
            <span className="BHD__color">BHD Star
              <span className="tenRap"> - Vincom Lê Văn Việt</span></span>
            <span className="info__movie">L4-Vincom Plaza, 50 Lê Văn Việt, Q.9</span>
            <span className="chiTiet"><a href>[chi tiết]</a></span>
          </div>
        </div>
      </div>
      {/* Thời điểm em làm phần này không có nội dung */}
      <div id="khongSuatChieu">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          al ab fuga laudantium, eveniet iste, blanditiis suscipit pariatur?
          Unde incidunt neque harum laboriosam enim soluta exercitationem
          maxime!
        </p>
      </div>
    </div>
  </div>
  )
}
