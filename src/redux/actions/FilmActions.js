//ACTION is a middleware
import axios from "axios";
//file này sẽ tổng hợp tất cả các actions của ứng dụng
export const layDanhSachPhimAction = (maNhom, soTrang, soPhanTuTrenTrang) => {
  //Xử lý dữ liệu trước khi đưa lên Reducer
  return async (dispatch) => {
    try {
      const result = await axios({
        // url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${maNhom}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`,
        method: "GET",
      });
      dispatch({
        type: "SET_MANG_PHIM",
        mangPhim: result.data,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: "SET_CHI_TIET_PHIM",
        chiTietPhim: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
