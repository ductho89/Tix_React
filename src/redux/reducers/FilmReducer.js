const stateDefault = {
  mangPhim: [
    {
      maPhim: 1314,
      tenPhim: "Gà Trống Nuôi Vợ",
      biDanh: "ga-trong-nuoi-vo",
      trailer: "https://youtu.be/IY7ktRwopPw",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/ga-trong-nuoi-vo_gp01.png",
      moTa: "ghntfhfghfghfghfghfg",
      maNhom: "GP01",
      ngayKhoiChieu: "2021-04-09T11:38:17.29",
      danhGia: 10,
    },
  ],
  chiTietPhim: {},
};
export const FilmReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SET_MANG_PHIM":
      {
        state.mangPhim = action.mangPhim;
        return { ...state, mangPhim: action.mangPhim };
      }
      break;
    case "SET_CHI_TIET_PHIM":
      {
        state.chiTietPhim = action.chiTietPhim;
        return { ...state };
        // chỉ set chi tiết phim này một lần thôi, để bấm vào phim nào là xem phim đó
      }
      break;
    default:
      return { ...state };
  }
};
