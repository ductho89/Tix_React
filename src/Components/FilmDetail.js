import React from "react";
import Footer from "../Components/Footer";

export default function FilmDetail() {
  return (
    <div className="bg-secondary container" height={400}>
      <div className="row">
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
      <div className="row"></div>
      <div className="row">News</div>
    </div>
  );
}
