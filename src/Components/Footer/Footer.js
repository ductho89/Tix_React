import React from "react";

export default function Footer(props) {
  return (
    <footer id="tixFooter">
      <div className="container">
        <div className="tix__content">
          <div className="row">
            <div className="col-sm-4 FAQ__Brand">
              <p className="tix__title">TIX</p>
              <div className="row">
                <div className="col-sm-6">
                  <a href="#">FAQ</a>
                  <a href="#">Brand Guidelines</a>
                </div>
                <div className="col-sm-6">
                  <a href="#">Thỏa thuận sử dụng</a>
                  <a href="#">Chính sách bảo mật</a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 partner">
              <p className="tix__title">Đối tác</p>
              <div className="footer__logo">
                <div className="col-sm-12">
                  <a href="icon">
                    <img src="./img/cgv.png" className="img-fluid" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/bhd.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/galaxycine.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/cinestar.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/404b8c4b80d77732e7426cdb7e24be20.png" alt />
                  </a>
                </div>
                <div className="col-sm-12">
                  <a href="icon">
                    <img src="./img/megags.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/bt.jpg" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/dongdacinema.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/TOUCH.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/cnx.jpg" alt />
                  </a>
                </div>
                <div className="col-sm-12">
                  <a href="icon">
                    <img src="./img/STARLIGHT.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/dcine.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/zalopay_icon.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/payoo.jpg" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/VCB.png" alt />
                  </a>
                </div>
                <div className="col-sm-12">
                  <a href="icon">
                    <img src="./img/AGRIBANK.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/VIETTINBANK.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/IVB.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/123go.png" alt />
                  </a>
                  <a href="icon">
                    <img src="./img/laban.png" alt />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mobile__social">
              <div className="row">
                <div className="col-sm-6">
                  <p className="tix__title">MOBILE APP</p>
                  <a className="mobile__logo" href>
                    <img src="./img/apple-logo.png" alt />
                  </a>
                  <a className="mobile__logo" href>
                    <img src="./img/android-logo.png" alt />
                  </a>
                </div>
                <div className="col-sm-6">
                  <p className="tix__title">SOCIAL</p>
                  <a className="mobile__logo" href>
                    <img src="./img/facebook-logo.png" alt />
                  </a>
                  <a className="mobile__logo" href>
                    <img src="./img/zalo-logo.png" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="row footer__address">
          <div className="col-sm-1">
            <img src="./img/zion-logo.jpg" alt />
          </div>
          <div className="col-sm-9">
            <h5>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h5>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            <p>
              Email: <span className="email">support@tix.vn</span>
            </p>
          </div>
          <div className="col-sm-2 label">
            <a href>
              <img src="./img/d1e6bd560daa9e20131ea8a0f62e87f8.png" alt />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
