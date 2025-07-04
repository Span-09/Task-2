import React from "react";
import "../styles/Footer.css";
import logo1 from "../assets/images/Footer_images/footer_img1.png";
import logo2 from "../assets/images/Footer_images/footer_img2.png";
import logo3 from "../assets/images/Footer_images/footer_img3.png";
import logo4 from "../assets/images/Footer_images/footer_img4.png";
import logo5 from "../assets/images/Footer_images/footer_img5.png";
import logo6 from "../assets/images/Footer_images/footer_img6.png";
import logo7 from "../assets/images/logo.png";
const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-contacts">
        대표전화 02-3395-7180 | 다이렉트 1588-8282 | 해외문의 82-2-316-7000 | 무료상담 080-236-7000 | 
        맘편한전화 1641(누르고) 한화손해보험
      </div>
      <div className="footer-links">
        <a href="/Shopping/Footer/product/product_disclosure_information.php">상품공시</a>
        <a href="/Shopping/Footer/price/price_disclosure.php">가격공시</a>
        <a href="/Shopping/Footer/privacy_policy/privacy_policy.php">개인정보처리방침</a>
        <a href="/Shopping/Footer/insurance_finance/financial_product_protection_register.php">보험금융상품등록부</a>
        <a href="/Shopping/Footer/service/terms_of_service.php">서비스이용약관</a>
      </div>
    </div>
    <div className="footer-middle">
      <div className="footer-company-info">
        한화손해보험 주식회사 대표이사 나채범 | 사업자등록번호 116-81-46445 | 
        서울시 영등포구 여의대로 56 (여의도동 23-5)<br />
        한화손해보험 관악사업소 : 사업소장 정태영 | 관악사업소 주소 : 서울시 관악구 남부순환로 1796, 10층(삼호빌딩)
      </div>
      <div className="footer-certifications">
        <img src={logo1} alt="cert1" />
        <img src={logo2} alt="cert2" />
        <img src={logo3} alt="cert3" />
        <img src={logo4} alt="cert4" />
        <img src={logo5} alt="cert5" />
        <img src={logo6} alt="cert6" />
        <img src={logo7} alt="한화손해보험 관악사업소" className="footer-logo" />
      </div>
    </div>
    <div className="footer-bottom">
      HANHWA GENERAL INSURANCE CO., LTD. ALL RIGHTS RESERVED.
    </div>
  </footer>
);

export default Footer;
