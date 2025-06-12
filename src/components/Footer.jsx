
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3 className="footer-title">บริการลูกค้า</h3>
          <ul className="footer-list">
            <li>ติดต่อเรา</li>
            <li>คำถามที่พบบ่อย</li>
            <li><Link to="/book">จองออนไลน์</Link></li>
            <li>ช่องทางชำระเงิน</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">เกี่ยวกับทีพี แลนด์ ฟาร์ม</h3>
          <ul className="footer-list">
            <li>ข้อมูลบริษัททีพี แลนด์ ฟาร์ม</li>
            <li>เข้าสู่ระบบ/ลงทะเบียน</li>
            <li>แนะนำแหล่งท่องเที่ยว</li>
            <li>บทความท่องเที่ยว</li>
            <li>ร่วมงานกับเรา</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">ช่องทางสื่อสังคมของทางเรา</h3>
          <ul className="footer-social-list">
            <li>
              <span className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </span>
              Facebook
            </li>
            <li>
              <span className="social-icon">
                <i className="fab fa-instagram"></i>
              </span>
              Instagram
            </li>
            <li>
              <span className="social-icon"><i className="fab fa-tiktok"></i></span>
              Tiktok
            </li>
            <li>
              <span className="social-icon"><i className="fab fa-youtube"></i></span>
              Youtube
            </li>
            <li>
              <span className="social-icon"><i className="fab fa-line"></i></span> Line
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">แผนที่ฟาร์ม</h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3789.0185279711054!2d100.70711109999999!3d18.254972199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDE1JzE3LjkiTiAxMDDCsDQyJzI1LjYiRQ!5e0!3m2!1sth!2sth!4v1746707651577!5m2!1sth!2sth"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-brand">บริษัท ทีพีแลนด์ ฟาร์ม จำกัด</p>
        <p>สงวนลิขสิทธิ์ © 2568 TP Land Farm.com แต่เพียงผู้เดียว</p>
        <p>ติดต่อสอบถาม: 00-000-0000</p>
        <p>TP LAND FARM CO., LTD.</p>
        <p>Copyright © 2025</p>
      </div>
    </footer>
  )
}

export default Footer
