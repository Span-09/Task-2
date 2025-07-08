import "../styles/Hero.css";
import banner from "../assets/images/hero-banner.png";
import main from "../assets/images/hero-main.png";
import contact from "../assets/images/hero-contact.png";
import React, { useState } from "react";
const tabs = [
  {
    label: "관공서 공무원 기부",
    images: [
      "/관공서_공무원기부/관공서_공무원기부_img1.png",
      "/관공서_공무원기부/관공서_공무원기부_img2.png",
      "/관공서_공무원기부/관공서_공무원기부_img3.png",
      "/관공서_공무원기부/관공서_공무원기부_img4.png",
    ],
  },
  {
    label: "관공서 국민 기부",
    images: [
      "/관공서_국민_기부/관공서_국민_기부_img1.png",
      "/관공서_국민_기부/관공서_국민_기부_img2.png",
      "/관공서_국민_기부/관공서_국민_기부_img3.png",
      "/관공서_국민_기부/관공서_국민_기부_img4.png",
    ],
  },
  {
    label: "종교단체 기부보험",
    images: [
      "/종교단체_기부보험/종교단체_기부보험_img1.png",
      "/종교단체_기부보험/종교단체_기부보험_img2.png",
      "/종교단체_기부보험/종교단체_기부보험_img3.png",
      "/종교단체_기부보험/종교단체_기부보험_img4.png",
    ],
  },
  {
    label: "종교단체와 종교인 기부보험",
    images: [
      "/종교단체와_종교인_기부보험/종교단체와_종교인_기부보험_img1.png",
      "/종교단체와_종교인_기부보험/종교단체와_종교인_기부보험_img2.png",
      "/종교단체와_종교인_기부보험/종교단체와_종교인_기부보험_img3.png",
      "/종교단체와_종교인_기부보험/종교단체와_종교인_기부보험_img4.png",
    ],
  },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentImages = tabs[activeTab].images;

  const modalRef = React.useRef(null);
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };
  const handleCloseModal = () => setIsModalOpen(false);
  const success = (e) => {
    e.preventDefault();
    alert("상담 신청이 완료되었습니다. 담당자가 신속하게 연락드리겠습니다.");
    handleCloseModal();
  };
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-top">
          <div className="hero-title-container">
            <h2 className="hero-title">나눔의행복(특약) 소개</h2>
            <img src={banner} alt="Banner" className="hero-banner-img" />
          </div>
          <div className="hero-main-content">
            <img src={main} alt="Main content" className="hero-main-img" />
          </div>
        </div>
        <div className="hero-action">
          <div className="hero-action-part1">
            <div className="hero-contact">
              <img src={contact} alt="Contact information" className="hero-contact-img" />
            </div>
            <div className="hero-action-button" onClick={handleOpenModal} style={{ cursor: "pointer" }}>
              <h3 className="hero-action-text">「나눔의 행복」 <span id="가입신청">가입신청 </span> <span id="arrow">{'>'}</span></h3>
            </div>
          </div>
          <div className="hero-action-part2">
            <div className="tab">
              {tabs.map((tab, idx) => (
                <div
                  key={tab.label}
                  className={idx === activeTab ? "frame active" : "frame1"}
                  onClick={() => setActiveTab(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <h4 className={idx === activeTab ? "frame-text" : "frame-text1"}>{tab.label}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="frame-image">
            {currentImages.map((img, idx) => (
              <div key={idx} className={`image${idx + 1}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal Window */}
      {isModalOpen && (
        <div className="hero-modal-overlay" onClick={handleCloseModal}>
          <div className="hero-modal" ref={modalRef} onClick={e => e.stopPropagation()}>
            <button className="hero-modal-close" onClick={handleCloseModal}>&times;</button>
            <h2 className="hero-modal-title">(단체) 나눔의행복 가입 신청</h2>
            <div className="hero-modal-subtitle">한화손해보험 관악사업소 귀중</div>
            <div className="hero-modal-desc">
              <div className="hero-modal-desc-bar"></div>
              <div className="hero-modal-desc-text">
                다음세대의 미래를 위한 투자, 나눔의행복에 가입해주셔서 감사합니다.<br />
                아래의 내용을 입력해 주시면, 담당자가 신속하게 가입상담을 진행해드리겠습니다.
              </div>
            </div>
            <form className="hero-modal-form">
              <div className="hero-modal-row">
                <div className="hero-modal-field">
                  <label>단체명</label>
                  <input type="text" placeholder="단체명을 입력해주세요." required autoFocus/>
                </div>
              </div>
              <div className="hero-modal-row">
                <div className="hero-modal-field">
                  <label>단체장명</label>
                  <input type="text" placeholder="단체장명을 입력해주세요." required />
                </div>
                <div className="hero-modal-field">
                  <label>대표 연락처</label>
                  <input type="text" placeholder="대표 연락처를 입력해주세요." required/>
                </div>
              </div>
              <div className="hero-modal-row">
                <div className="hero-modal-field" style={{width:'100%'}}>
                  <label>주소</label>
                  <input type="text" placeholder="주소를 입력해주세요." required/>
                </div>
              </div>
              <div className="hero-modal-row">
                <div className="hero-modal-field">
                  <label>담당자명</label>
                  <input type="text" placeholder="담당자명을 입력해주세요." required/>
                </div>
                <div className="hero-modal-field">
                  <b><label>담당자 연락처</label></b>
                  <input type="text" placeholder="담당자 연락처를 입력해주세요." required/>
                </div>
              </div>
              <div className="hero-modal-row">
                <div className="hero-modal-field" style={{width:'100%'}}>
                  <label>사업자등록증</label>
                  <div className="hero-file-input-wrap">
                    <label htmlFor="businessFile" className="hero-file-label">첨부</label>
                    <input id="businessFile" type="file" className="hero-modal-file" required />
                  </div>
                </div>
              </div>
              <div className="hero-modal-row hero-modal-row-info">
                <span>접수내용 확인후, 전문상담사가 나눔의행복 가입을 안내드립니다.</span>
              </div>
              <div className="hero-modal-row hero-modal-row-checkbox">
                <label className="hero-modal-checkbox-label">
                  <input type="checkbox" className="hero-modal-checkbox" required/>
                  접수된 정보가 상담을 위해 제공되는 것에 동의합니다. <span className="hero-modal-required">(필수)</span>
                </label>
              </div>
              <button type="submit" className="hero-modal-submit" onClick={success}>상담 신청하기</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default Hero;
