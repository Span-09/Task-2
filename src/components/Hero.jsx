import "../styles/Hero.css";
import banner from "../assets/images/hero-banner.png";
import main from "../assets/images/hero-main.png";
import contact from "../assets/images/hero-contact.png";
import React, { useRef, useState } from "react";
import ModalWindow from "./ModalWindow.jsx";
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
  const [showModal, setShowModal] = useState(false); 
  const modalRef = useRef(null);
  const currentImages = tabs[activeTab].images; 

  const handleOpenModal = () => {
    setShowModal(true);
    setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.scrollToTop();
      }
    }, 0); // Wait for modal to render
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-top">
          <div className="hero-title-container">
            <h2 className="hero-title">나눔의행복(특약) 소개</h2>
          </div>
          <div className="hero-banner-container"><img src={banner} alt="Banner" className="hero-banner-img" /></div>
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
            <div className="frame-image">
            {currentImages.map((img, idx) => (
              <div key={idx} className={`image${idx + 1}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      <div>
        {showModal && (
          <ModalWindow ref={modalRef} isOpen={showModal} onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
};
export default Hero;