import '@/styles/components/Footer.scss'
import { FaFacebookSquare } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul className='footer-row'>
          <h2>Card Quizzes</h2>
          <li>Giấy ĐKKD: abcd.xyzk - Ngày cấp: **/**/****</li>
          <li>Cơ quan cấp: Phòng Đăng ký kinh doanh Sở Kế hoạch</li>
          <li>Địa chỉ 1: abcdefgh</li>
          <li>Địa chỉ 2: abcdefgh</li>
        </ul>

        <ul className='footer-row'>
          <h3>SẢN PHẨM</h3>
          <li><a>Dịch vụ sau bán hàng</a></li>
          <li><a>Phụ tùng - phụ kiện</a></li>
          <li><a>Chăm sóc khách hàng</a></li>
          <li><a>Đặt hẹn dịch vụ</a></li>
          <li><a>Dịch vụ sau bán hàng</a></li>
          <li><a>Phụ tùng - phụ kiện</a></li>
          <li><a>Chăm sóc khách hàng</a></li>
          <li><a>Đặt hẹn dịch vụ</a></li>
        </ul>

        <ul className='footer-row'>
          <ul>
            <h3>DỊCH VỤ</h3>
            <li><a>Dịch vụ sau bán hàng</a></li>
            <li><a>Phụ tùng - phụ kiện</a></li>
            <li><a>Chăm sóc khách hàng</a></li>
            <li><a>Đặt hẹn dịch vụ</a></li>
          </ul>
          <ul>
            <h3>CHÍNH SÁCH</h3>
            <li><a>Chính sách Thanh toán</a></li>
            <li><a>Chính sách Bảo mật</a></li>
            <li><a>Chính sách Giao nhận - Vận chuyển</a></li>
          </ul>
        </ul>

        <ul className='footer-row'>
          <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
          <li> <a href="tel:0938807207">Hotline Kinh doanh: 0938.807.207</a></li>
          <li> <a href="tel:0938809058">Hotline Dịch vụ: 0938.809.058</a></li>
          <li> <a href="mailto:mazdaconghoa2014@gmail.com">Email: mazdaconghoa2014@gmail.com</a></li>
          <li className='footer-icon'>
            <a href="https://www.facebook.com/MazdaTruongChinh/" target="_blank">
              <FaFacebookSquare className='facebook' />
            </a>
            <a href="https://www.youtube.com/channel/UCJ1-r69F98y4wOa4Z392tlg" target="_blank">
              <FaYoutubeSquare className='youtube' />
            </a>
            <a><FaCheckSquare className='kiemduyet' /></a>
          </li>
        </ul>
      </div>
    </footer>
  )
}