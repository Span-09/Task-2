import React, { useState, useEffect } from "react";
import "../styles/ConsultationBar.css";

const KAKAO_LINK = "https://pf.kakao.com/_your_kakao_id";
const PHONE_NUMBER = "tel:0233957180";
const EMAIL_ADDRESS = "mailto:tobego@naver.com";

const ConsultationBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Arrow Button */}
      {!open && (
        <button
          className="consultation-fab right"
          onClick={() => setOpen(true)}
          aria-label="Open consultation bar"
        >
          <span className="chevron-icon">&lt;</span>
        </button>
      )}

      {/* Slide-in Consultation Bar */}
      <div className={`consultation-bar right${open ? " open" : ""}`}>
        <button
          className="consultation-close"
          onClick={() => setOpen(false)}
          aria-label="Close consultation bar"
        >
          ×
        </button>
        <div className="consultation-section">
          <a
            href={KAKAO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="consultation-link"
          >
            <div className="consultation-kakao">
              <div className="kakao-badge">TALK</div>
            </div>
            <div className="consultation-label">
              KakaoTalk<br />consultation
            </div>
          </a>
        </div>
        <div className="consultation-section">
          <a href={PHONE_NUMBER} className="consultation-link">
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="#222"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L8.21 12.21a16 16 0 0 0 7.58 7.58l1.94-1.94a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1V20a1 1 0 0 1-1 1z" />
            </svg>
            <div className="consultation-label">
              Phone<br />consultation
            </div>
          </a>
        </div>
        <div className="consultation-section">
          <a href={EMAIL_ADDRESS} className="consultation-link">
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="#222"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6 12 13 2 6" />
            </svg>
            <div className="consultation-label">
              Email<br />consultation
            </div>
          </a>
        </div>
        <div className="consultation-divider"></div>
        <div className="consultation-yeseco">
          <span className="yeseco-yellow">YES</span>
          <span className="yeseco-orange">+ECO</span>
        </div>
        <div className="consultation-shortcut">Shortcut</div>
      </div>
    </>
  );
};

export default ConsultationBar;
