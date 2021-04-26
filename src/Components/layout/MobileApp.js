import React from 'react'

export default function MobileApp(props) {
  return (
<div className="app-wrap" style={{backgroundImage: 'url("./img/app/backapp.jpg")', backgroundRepeat: 'repeat'}}>
  <div className="row app-content mx-auto px-5" style={{maxWidth: 940, minHeight: 450}}>
    <div className="app-detail col-sm-6 col-xs-12 text-white">
      <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
      <p className="my-4 font-weight-light">
        Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
        đổi quà hấp dẫn.
      </p>
      <div className="app-link w-100">
        <a href="#" className="btn buyNow">App miễn phí - Tải về ngay!</a>
      </div>
      <p className="mt-3 font-weight-light">
        TIX có hai phiên bản
        <span><a className="download-link" href>iOS</a></span>
        &amp;
        <span><a className="download-link" href>Android</a></span>
      </p>
    </div>
    <div className="app-demo col-sm-6 col-xs-12 text-center d-inline-block" style={{height: 'auto'}}>
      <img src="./img/app/mobile.png" style={{maxHeight: 420, overflowX: 'hidden'}} alt />
      <img src="./img/app/slide12.jpg" style={{maxHeight: 400, borderRadius: 20}} alt />
    </div>
  </div>
</div>
  )
}
