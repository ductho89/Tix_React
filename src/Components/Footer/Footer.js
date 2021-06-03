import React from "react";
import cgv from "../../assets/img/cgv.png";
import bhd from "../../assets/img/bhd.png";
import galaxycine from "../../assets/img/galaxycine.png";
import cinestar from "../../assets/img/cinestar.png";
import lotte from "../../assets/img/404b8c4b80d77732e7426cdb7e24be20.png";
import megags from "../../assets/img/megags.png";
import bt from "../../assets/img/bt.jpg";
import dongda from "../../assets/img/dongdacinema.png";
import touch from "../../assets/img/TOUCH.png";
import cnx from "../../assets/img/cnx.jpg";
import starlight from "../../assets/img/STARLIGHT.png";
import dcine from "../../assets/img/dcine.png";
import zalopay from "../../assets/img/zalopay_icon.png";
import payoo from "../../assets/img/payoo.jpg";
import vcb from "../../assets/img/VCB.png";
import arb from "../../assets/img/AGRIBANK.png";
import vtb from "../../assets/img/VIETTINBANK.png";
import ivb from "../../assets/img/IVB.png";
import go from "../../assets/img/123go.png";
import laban from "../../assets/img/laban.png";
import apple from "../../assets/img/apple-logo.png";
import android from "../../assets/img/android-logo.png";
import facebook from "../../assets/img/facebook-logo.png";
import zalo from "../../assets/img/zalo-logo.png";
import zion from "../../assets/img/zion-logo.jpg";
import bocongthuong from "../../assets/img/d1e6bd560daa9e20131ea8a0f62e87f8.png";

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
                    <img src={cgv} className="img-fluid" alt />
                  </a>
                  <a href="icon">
                    <img src={bhd} alt />
                  </a>
                  <a href="icon">
                    <img src={galaxycine} alt />
                  </a>
                  <a href="icon">
                    <img src={cinestar} alt />
                  </a>
                  <a href="icon">
                    <img src={lotte} alt />
                  </a>
                </div>
                <div className="col-sm-12">
                  <a href="icon">
                    <img src={megags} alt />
                  </a>
                  <a href="icon">
                    <img src={bt} alt />
                  </a>
                  <a href="icon">
                    <img src={dongda} alt />
                  </a>
                  <a href="icon">
                    <img src={touch} alt />
                  </a>
                  <a href="icon">
                    <img src={cnx} alt />
                  </a>
                </div>
                <div className="col-sm-12">
                  <a href="icon">
                    <img src={starlight} alt />
                  </a>
                  <a href="icon">
                    <img src={dcine} alt />
                  </a>
                  <a href="icon">
                    <img src={zalopay} alt />
                  </a>
                  <a href="icon">
                    <img src={payoo} alt />
                  </a>
                  <a href="icon">
                    <img src={vcb} alt />
                  </a>
                </div>
                <div className="col-sm-12">
                  <a href="icon">
                    <img src={arb} alt />
                  </a>
                  <a href="icon">
                    <img src={vtb} alt />
                  </a>
                  <a href="icon">
                    <img src={ivb} alt />
                  </a>
                  <a href="icon">
                    <img src={go} alt />
                  </a>
                  <a href="icon">
                    <img src={laban} alt />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mobile__social">
              <div className="row">
                <div className="col-sm-6">
                  <p className="tix__title">MOBILE APP</p>
                  <a className="mobile__logo" href>
                    <img src={apple} alt />
                  </a>
                  <a className="mobile__logo" href>
                    <img src={android} alt />
                  </a>
                </div>
                <div className="col-sm-6">
                  <p className="tix__title">SOCIAL</p>
                  <a className="mobile__logo" href>
                    <img src={facebook} alt />
                  </a>
                  <a className="mobile__logo" href>
                    <img src={zalo} alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="row footer__address">
          <div className="col-sm-1">
            <img src={zion} alt />
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
              <img src={bocongthuong} alt />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
