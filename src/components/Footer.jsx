import React, { useEffect, useState } from "react";
import "../styles/Footer.css";
import logo1 from "../assets/images/Footer_images/footer_img1.png";
import logo2 from "../assets/images/Footer_images/footer_img2.png";
import logo3 from "../assets/images/Footer_images/footer_img3.png";
import logo4 from "../assets/images/Footer_images/footer_img4.png";
import logo5 from "../assets/images/Footer_images/footer_img5.png";
import logo6 from "../assets/images/Footer_images/footer_img6.png";
import logo7 from "../assets/images/Footer_images/footer_logo.png";
const useIsMobile = (breakpoint = 700) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
};

const Footer = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <footer className="mobile-footer">
        <div className="mobile-footer-container">
          <div className="mobile-footer-contacts">  
              <div className="mobile-content">
                <div className="content1">한화다이렉트</div>
              </div>
              <div className="mobile-content">
                <div className="content1">상담신청</div>
              </div>
              <div className="mobile-content">
                <div className="content1">APP다운</div>
              </div>
              <div className="mobile-content">
                <div className="content1">PC버전</div>
              </div>
          </div>
          <div className="mobile-footer-subcontainer">
            <div className="mobile-button-container">
                <div className="button-container">
                  <div className="mobile-button">개인정보처리방침</div>
                </div>
                <div className="button-container">
                  <div className="mobile-button">신용정보활용체제</div>
                </div>
            </div>
            <div className="footer-phone-container">
              <div className="phone-contact">고객상담센터 <span className="number">02-3395-7180</span></div>
            </div>
          </div>
          <div className="copyright-container">
            <div className="contacts-list-container">
              <div className="contact-list">
                <div className="contact-value">한화손해보험 주식회사 대표이사 나채범</div>
              </div>
              <div className="line-terminate">|</div>
              <div className="contact-list">
                <div className="contact-value">사업자등록번호 116-81-46445</div>
              </div>
              <div className="line-terminate">|</div>
              <div className="contact-list">
                <div className="contact-value">서울시 관악구 남부순환로 1796, 10층(삼호빌딩)</div>
              </div>
            </div>
            <div className="copyright">
              <div className="copyright-value">HANWHA GENERAL INSURANCE CO.,LTD. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div> 
      </footer>
    );
  }
  // Desktop footer
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contacts">
          <div className="footer-contact-item1">
            <div className="footer-contact">대표전화</div>
            <div className="footer-contact-text">
              <div className="footer-contact-value">02-3395-7180</div>
            </div>
          </div>
        <div className="line1">|</div>
        <div className="footer-contact-item1">
            <div className="footer-contact">다이렉트</div>
            <div className="footer-contact-text">
              <div className="footer-contact-value">1588-8282</div>
            </div>
          </div>
        <div className="line1">|</div>
        <div className="footer-contact-item1">
            <div className="footer-contact">해외문의</div>
            <div className="footer-contact-text">
              <div className="footer-contact-value">82-2-316-7000</div>
            </div>
          </div>
        <div className="line1">|</div>
        <div className="footer-contact-item1">
            <div className="footer-contact">해외문의</div>
            <div className="footer-contact-text">
              <div className="footer-contact-value">82-2-316-7000</div>
            </div>
          </div>
        <div className="line1">|</div>
        <div className="footer-contact-item1">
            <div className="footer-contact">무료상담</div>
            <div className="footer-contact-text">
              <div className="footer-contact-value">080-236-7000</div>
            </div>
          </div>
        <div className="line1">|</div>
        <div className="footer-contact-item1">
            <div className="footer-contact">말로거는전화 1641(누르고)</div>
            <div className="footer-contact-text">
              <div className="footer-contact-value">한화손해보험</div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-item"><a href="/Shopping/Footer/product/product_disclosure_information.php">상품공시</a></div>
          <div className="footer-links-item"><a href="/Shopping/Footer/price/price_disclosure.php">가격공시</a></div>
          <div className="footer-links-item"><a href="/Shopping/Footer/privacy_policy/privacy_policy.php">개인정보처리방침</a></div>
          <div className="footer-links-item"><a href="/Shopping/Footer/insurance_finance/financial_product_protection_register.php">보험금융상품등록부</a></div>
          <div className="footer-links-item"><a href="/Shopping/Footer/service/terms_of_service.php">서비스이용약관</a></div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-company-info">
          <div className="sub-info"><a className="content">한화손해보험 주식회사 대표이사 나채범</a></div>
          <div className="line1">|</div>

   
          <div className="sub-info"><a className="content">사업자등록번호 116-81-46445</a></div>
          <div className="line1">|</div>


          <div className="sub-info"><a className="content">서울시 영등포구 여의대로 56 (여의도동 23-5)</a></div>
          <div className="line1">|</div>
        </div>
        <div className="footer-contact-info1">
          <div className="sub-info1"><a className="content1">한화손해보험 관악사업소 : 사업소장 정태영</a></div>
          <div className="line1">|</div>
          <div className="sub-info1"><a className="content1">관악사업소 주소 : 서울시 관악구 남부순환로 1796, 10층(삼호빌딩)</a></div>
        </div>
        <div className="footer-certifications">
          <div className="footer-certification-top">
            <div className="certificate-img"><img src={logo1} alt="Logo" /></div>
            <div className="certificate-img"><img src={logo2} alt="Logo" /></div>
            <div className="certificate-img"><img src={logo3} alt="Logo" /></div>
            <div className="certificate-img"><img src={logo4} alt="Logo" /></div>
            <div className="certificate-img"><img src={logo5} alt="Logo" /></div>
            <div className="certificate-img"><img src={logo6} alt="Logo" /></div>
          </div>
          <div className="footer-certificate-bottom">
            <div className="footer-logo-container">
              <img src={logo7} alt="Logo" className="footer-logo"/>
            </div>
            <div className="logo-text">관악사업소</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="content1">HANHWA GENERAL INSURANCE CO., LTD. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
};

export default Footer;
