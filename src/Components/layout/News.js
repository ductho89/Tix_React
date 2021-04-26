import React from 'react'

export default function News(props) {
  return (

<div id="tinTuc" className="bg container" >
  <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="dienAnh24h" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Điện ảnh 24h</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="review" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Review</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="khuyenMai" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Khuyễn Mãi</a>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="dienAnh24h">
      <div className="row dienAnh24h__news">
        <div className="col-sm-6 news__left">
          <a href><img src="./img/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16111317082644.jpg" alt className="img-fluid" /></a>
          <a href>
            <h4>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</h4>
          </a>
          <p>
            Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi
            sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang
            phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">2</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-6 news__right">
          <a href><img src="./img/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg" alt className="img-fluid" /></a>
          <a href>
            <h4>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</h4>
          </a>
          <p>
            Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi
            sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim mang
            phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">2</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row list__news">
        <div className="col-sm-4 news">
          <a href><img src="./img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png" alt className="img-fluid" /></a>
          <a className="title" href>
            <h4>
              Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
              chiếu
            </h4>
          </a>
          <p className="p__text">
            Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc
            bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi
            sao “bạc tỷ” của
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">2</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-4 news">
          <a href><img src="./img/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg" alt className="img-fluid" /></a>
          <a className="title" href>
            <h4>
              NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
              PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
            </h4>
          </a>
          <p className="p__text">
            Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính
            thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng
            VINAMAN với tổng giá trị giải thưởng lên đến 60 triệu đồng.
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">2</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-4 news__4">
          <div className="col-sm-12">
            <img src="./img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png" alt className="img-fluid" />
            <a href>
              <h4>
                [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                Antebellum: Bẫy Thực Tại Kinh Hoàng
              </h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png" alt className="img-fluid" />
            <a href>
              <h4>
                Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng
                đầu doanh thu tại Hàn Quốc mùa dịch
              </h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png" alt className="img-fluid" />
            <a href>
              <h4>
                Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                Christopher Nolan
              </h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png" alt className="img-fluid" />
            <a href>
              <h4>
                Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng
                vé' xứ Hàn
              </h4>
            </a>
          </div>
          <div className="clear-both" />
        </div>
      </div>
      <div className="xemThem text-center">
        <button>Xem Thêm</button>
      </div>
    </div>
    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="review">
      <div className="row dienAnh24h__news">
        <div className="col-sm-6 news__left">
          <a href><img src="./img/1.png" alt className="img-fluid" /></a>
          <a href>
            <h4>
              Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
            </h4>
          </a>
          <p>
            Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">2</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-6 news__right">
          <a href><img src="./img/2.png" alt className="img-fluid" /></a>
          <a href>
            <h4>Review: Dinh Thự Oan Khuất (Ghost Of War)</h4>
          </a>
          <p>
            Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
            Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">2</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row list__news">
        <div className="col-sm-4 news">
          <a href><img src="./img/3.png" alt className="img-fluid" /></a>
          <a className="title" href>
            <h4>
              ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
            </h4>
          </a>
          <p className="p__text">
            Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
            đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
            tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">2</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-4 news">
          <a href><img src="./img/4.png" alt className="img-fluid" /></a>
          <a className="title" href>
            <h4>American Sniper - Chính nghĩa hay phi nghĩa?</h4>
          </a>
          <p className="p__text">
            American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
            của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện
            phim chậm rãi đưa người xem qua từng thời khắc khác nhau của
            Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham
            chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">2</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-4 news__4">
          <div className="col-sm-12">
            <img src="./img/5.png" alt className="img-fluid" />
            <a href>
              <h4>Review: Spider-Man: Into The Spider-Vesre</h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/6.jpg" alt className="img-fluid" />
            <a href>
              <h4>
                COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
              </h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/7.jpg" alt className="img-fluid" />
            <a href>
              <h4>
                [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                giờ lầy lội và hài hước đến thế
              </h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/8.jpg" alt className="img-fluid" />
            <a href>
              <h4>
                [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                giờ lầy lội và hài hước đến thế
              </h4>
            </a>
          </div>
          <div className="clear-both" />
        </div>
      </div>
      <div className="xemThem text-center">
        <button>Xem Thêm</button>
      </div>
    </div>
    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="khuyenMai">
      <div className="row dienAnh24h__news">
        <div className="col-sm-6 news__left">
          <a href><img src="./img/9.jpg" alt className="img-fluid" /></a>
          <a href>
            <h4>BHD 59K/VÉ CẢ TUẦN !!!</h4>
          </a>
          <p>
            Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
            59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">1</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-6 news__right">
          <a href><img src="./img/10.jpg" alt className="img-fluid" /></a>
          <a href>
            <h4>TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h4>
          </a>
          <p>
            Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
            voucher thanh toán ZaloPay thả ga
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">1</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row list__news">
        <div className="col-sm-4 news">
          <a href><img src="./img/11.png" alt className="img-fluid" /></a>
          <a className="title" href>
            <h4>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX</h4>
          </a>
          <p className="p__text">
            ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc
            chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">4</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-4 news">
          <a href><img src="./img/11.png" alt className="img-fluid" /></a>
          <a className="title" href>
            <h4>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</h4>
          </a>
          <p className="p__text">
            Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
            59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
            Vé Phim trên ZaloPay.
          </p>
          <div className="icon__like__comment">
            <a href className="like">
              <img src="./img/like.png" alt />
              <span className="number">0</span>
            </a>
            <a href className="comment">
              <img src="./img/comment.png" alt />
              <span className="number">0</span>
            </a>
          </div>
        </div>
        <div className="col-sm-4 news__4">
          <div className="col-sm-12">
            <img src="./img/12.jpg" alt className="img-fluid" />
            <a href>
              <h4>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/13.png" alt className="img-fluid" />
            <a href>
              <h4>
                [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                Trai Yêu Quái
              </h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/14.jpg" alt className="img-fluid" />
            <a href>
              <h4>
                [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp
                Sư Mù: Ai Chết Giơ Tay
              </h4>
            </a>
          </div>
          <div className="clear-both" />
          <div className="col-sm-12">
            <img src="./img/15.jpg" alt className="img-fluid" />
            <a href>
              <h4>[Mega GS] Một đoá hoa thay ngàn lời yêu</h4>
            </a>
          </div>
          <div className="clear-both" />
        </div>
      </div>
      <div className="xemThem text-center">
        <button>Xem Thêm</button>
      </div>
    </div>
  </div>
</div>

  )
}
