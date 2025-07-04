import React, { useState } from "react";
import "../styles/DonationTabs.css";

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
      "/관공서_공무원기부/관공서_공무원기부_img1.png",
      "/관공서_공무원기부/관공서_공무원기부_img2.png",
      "/관공서_공무원기부/관공서_공무원기부_img3.png",
      "/관공서_공무원기부/관공서_공무원기부_img4.png",
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
      "/종교단체_기부보험/종교단체_기부보험_img1.png",
      "/종교단체_기부보험/종교단체_기부보험_img2.png",
      "/종교단체_기부보험/종교단체_기부보험_img3.png",
      "/종교단체_기부보험/종교단체_기부보험_img4.png",
    ],
  },
];

const DonationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (idx) => {
    setActiveTab(idx);
  };

  const images = tabs[activeTab].images;

  return (
    <div className="hero-and-tabs-container">
      <div className="donation-tabs-root">
        <div className="donation-tabs-container">
          <div className="donation-tabs-menu">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`donation-tab-btn${activeTab === idx ? " active" : ""}`}
                onClick={() => handleTabClick(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="donation-tabs-content">
            <div className="image-flex-column">
              {images.map((imgSrc, idx) => (
                <div key={idx} className="image-box">
                  <img
                    src={imgSrc}
                    alt={`Image ${idx + 1}`}
                    className="donation-tab-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationTabs;
