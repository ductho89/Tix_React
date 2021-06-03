import React from "react";
import webLogo from "../../assets/img/carousel/web-logo.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="tixLogo">
        <a href="#" className="navbar-brand">
          <img style={{ width: 50 }} src={webLogo} alt="" />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Lịch chiếu{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Cụm rạp{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tin tức
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ứng dụng
            </a>
          </li>
        </ul>
        {/* *********************************************************** */}
        <div id="user-info">
          <div id="userLogin" className="d-inline">
            <i className="fas fa-user-circle" />
            <a href="#" className="text-dark ml-3">
              Đăng nhập
            </a>
            <span className="mx-2">|</span>
          </div>
          <div id="userLocation" className="dropdown show d-inline">
            <i className="fas fa-map-marker-alt" />
            <a
              href="#"
              className="btn dropdown-toggle"
              role="button"
              id="dropdownLocation"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hồ Chí Minh
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownLocation"
              style={{ zIndex: 9 }}
            >
              <a href className="dropdown-item">
                Hà Nội
              </a>
              <a href className="dropdown-item">
                Nha Trang
              </a>
              <a href className="dropdown-item">
                Vũng Tàu
              </a>
              <a href className="dropdown-item">
                Cần Thơ
              </a>
              <a href className="dropdown-item">
                Quảng Ninh
              </a>
              <a href className="dropdown-item">
                Bình Dương
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
