import React from "react";
import Footer from "../Footer/Footer";

export default function FilmDetail() {
  return (
    <div className="bg-secondary container" height={400}>
      <div className="row" id="film-thumbnail">
        <div className="col-3">
          {/* Không thể import hình ảnh khi dùng routing */}
          <img src="https://picsum.photos/250/300" alt="" />
        </div>
        <div className="col-7">
          <p>09.04.2021</p>
          <p>Bàn Tay Diệt Quỷ - Evil Expeller</p>
          <p>129 phút - 0 IMDb - 2D/Digital</p>
        </div>
        <div className="col-2">
          <h1>8.8</h1>
          <div>
            <img src="https://picsum.photos/20" alt="" />
            <img src="https://picsum.photos/20" alt="" />
            <img src="https://picsum.photos/20" alt="" />
            <img src="https://picsum.photos/20" alt="" />
          </div>
          <div>43 người đánh giá</div>
        </div>
      </div>
      <div id="film-detail">
        {/* Nav pills */}
        <ul className="nav nav-pills justify-content-center align-items-center mb-5">
          <li id="current-films" className="nav-item">
            <a className="nav-link active" data-toggle="pill" href="#film-info">
              Thông tin
            </a>
          </li>
          <li id="future-films" className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#film-review">
              Đánh giá
            </a>
          </li>
        </ul>
        <div className="row">
          <div className="col-6 left-info">
            <div>
              <span className="content-title">Ngày công chiếu</span>
              <span className="content-info">09.04.2021</span>
            </div>
            <div>
              <span className="w-25 d-inline-block">Đạo diễn</span>
              <span className="w-50 d-inline-block">Kim Joo-Hwan</span>
            </div>
            <div>
              <span className="w-25 d-inline-block">Diễn viên</span>
              <span className="w-50 d-inline-block">
                Choi Woo Sik, Ahn Sung Ki, Park Seo Joon, Woo Do Hwan
              </span>
            </div>
            <div>
              <span className="w-25 d-inline-block">Thể loại</span>
              <span className="w-50 d-inline-block">Hành Động, Horor</span>
            </div>
            <div>
              <span className="w-25 d-inline-block">Định dạng</span>
              <span className="w-50 d-inline-block">2D/Digital</span>
            </div>
            <div>
              <span className="w-25 d-inline-block">Quốc gia SX</span>
              <span className="w-50 d-inline-block">Hàn Quốcs</span>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <div className="row" id="film-news">
        News
      </div>
    </div>
  );
}
