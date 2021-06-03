import React, { useEffect } from "react";
import { useState, useDispatch, useSelector } from "react-redux";
import { layThongTinPhimAction } from "../../redux/actions/FilmActions";
import Footer from "../Footer/Footer";
import "../css/FilmDetail.css";
import sampleImage from "../../assets/img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png";
import likeIcon from "../../assets/img/like.png";
import commentIcon from "../../assets/img/comment.png";
import star from "../../assets/img/film_thumbnail/star1.png";
import halfStar from "../../assets/img/film_thumbnail/star1.2.png";
import bogia from "../../assets/img/film_thumbnail/bo-gia-p-16127713123806_215x318.png";
import image1 from "../../assets/img/film_thumbnail/bo-gia-p-16127713123806_215x318.png";

export default function FilmDetail(props) {
  //props.history, props.location, props.match: khi component laod ra từ thẻ <Route?
  const { chiTietPhim } = useSelector((state) => state.FilmReducer);
  console.log(chiTietPhim);
  // Khai báo dispatcher
  const dispatch = useDispatch();
  //lấy tham số từ url id
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(layThongTinPhimAction(id));
  }, []);

  return (
    <div id="film-info" className="text-white">
      <div className="container">
        <div id="film-thumbnail" className="row align-items-center">
          <div className="col-3">
            {/* Không thể import hình ảnh khi dùng routing */}
            <img className="rounded" src={bogia} alt="" />
          </div>
          <div className="col-7">
            <p>09.04.2021</p>
            <p>
              {/* <span className="C-type mr-2">C16</span> */}
              <span className="film-title">
                <h2>Bàn Tay Diệt Quỷ - Evil Expeller</h2>
              </span>
            </p>
            <p className="mb-3">129 phút - 0 IMDb - 2D/Digital</p>

            <a className="buyNow w-25 text-uppercase rounded " href="">
              Mua vé
            </a>
          </div>
          <div className="col-2 film-rating text-center">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill" />
                </div>
                <div className="mask half">
                  <div className="fill" />
                </div>
                <div className="inside-circle">8.6</div>
              </div>
            </div>

            <div>
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="star" src={star} alt="" />
              <img className="half-star" src={halfStar} alt="" />
            </div>
            <div>43 người đánh giá</div>
          </div>
        </div>
        <div id="film-detail">
          <div>
            {/* Nav pills */}
            <ul
              className="nav nav-pills justify-content-center "
              role="tablist"
            >
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#info">
                  Thông tin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#reviews">
                  Đánh giá
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div id="info" className="container tab-pane active">
                <div className="row">
                  <div className="col-6 left-info">
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                  </div>
                  <div className="col-6 right-info">
                    <p className="mb-2">Nội dung</p>
                    <p>
                      Sau khi bản thân bỗng nhiên sở hữu “Bàn tay diệt quỷ”, võ
                      sĩ MMA Yong Hu (Park Seo Joon thủ vai) đã dấn thân vào
                      hành trình trừ tà, trục quỷ đối đầu với Giám Mục Bóng Tối
                      (Woo Do Hwan) – tên quỷ Satan đột lốt người. Từ đó sự thật
                      về cái chết của cha Yong Hu cũng dần được hé lộ cũng như
                      nguyên nhân anh trở thành “người được chọn”.
                    </p>
                  </div>
                </div>
              </div>
              <div id="reviews" className="container tab-pane fade">
                <div className="row">
                  <div className="col-6 left-info">
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                    <div>
                      <span className="content-title">Ngày công chiếu</span>
                      <span className="content-info">09.04.2021</span>
                    </div>
                  </div>
                  <div className="col-6 right-info">
                    <p className="mb-2">Nội dung</p>
                    <p>
                      Sau khi bản thân bỗng nhiên sở hữu “Bàn tay diệt quỷ”, võ
                      sĩ MMA Yong Hu (Park Seo Joon thủ vai) đã dấn thân vào
                      hành trình trừ tà, trục quỷ đối đầu với Giám Mục Bóng Tối
                      (Woo Do Hwan) – tên quỷ Satan đột lốt người. Từ đó sự thật
                      về cái chết của cha Yong Hu cũng dần được hé lộ cũng như
                      nguyên nhân anh trở thành “người được chọn”.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="film-news">
          <h2 className="text-center mb-5">Tin liên quan</h2>
          <div className="row">
            <div className="col-sm-4 news">
              <a href>
                <img
                  src={sampleImage}
                  alt
                  className="img-fluid rounded mb-3 "
                />
              </a>
              <h5 className="title">
                <a>
                  Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                  chiếu
                </a>
              </h5>
              <p className="p-text">
                Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ
                phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao
                “bạc tỷ” của
              </p>
              <div className="icon">
                <a href className="icon-like">
                  <img src={likeIcon} alt />
                  <span className="number">2</span>
                </a>
                <a href className="icon-comment">
                  <img src={commentIcon} alt />
                  <span className="number">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
