import React, { useState, useEffect, use } from "react";
import "../styles/ConsultationBar.css";
import kakao from "../assets/images/kakao.svg";
import call from "../assets/images/Call.svg";
import mail from "../assets/images/email.svg"; 
import yesco from "../assets/images/yesco.png"; 
import arrow from "../assets/images/Vector.svg"// Ensure you have the correct path to your Yesco image

const KAKAO_LINK = "https://pf.kakao.com/_your_kakao_id";
const PHONE_NUMBER = "tel:0233957180";
const EMAIL_ADDRESS = "mailto:tobego@naver.com";

const ConsultationBar = () => {
  const [open, setOpen] = useState(false);
  const barRef = React.useRef(null);

  useEffect(() => {
    const el = document.querySelector('.consultation-bar');
    if (el) {
      if (open) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (barRef.current && !barRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <>
      <div className="floating-container">
        <div className="floating">
          <div className="floating-grp">
            <div className="float-container">
              <div className={`floating-icon-container${open ? ' hide' : ''}`}
                onClick={() => setOpen(true)}
                aria-label="Open consultation bar">
                <img src={arrow} alt="Arrow"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`consultation-bar${open ? ' show' : ''} show`}
        ref={barRef}
      >
        <div className="consultation-content">
          <div className="consultation">
            <div className="consulation-icon-bar">
              <div className="kakao-grp">
                <div className="kakao">
                  <div className="kakao-icon-container">
                    <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
                      <img src={kakao} alt="Kakao icon" className="kakao-icon"/>
                    </a>
                  </div>
                  <div className="kakao-text">
                    <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
                      카카오톡 상담
                    </a>
                  </div>
                </div>
              </div>
              <div className="phone-grp">
                <div className="phone">
                  <div className="phone-icon-container">
                    <a href={PHONE_NUMBER} target="_blank" rel="noopener noreferrer">
                      <img src={call} alt="Phone icon" className="phone-icon"/>
                    </a>
                  </div>
                  <div className="phone-text">
                    <a href={PHONE_NUMBER} target="_blank" rel="noopener noreferrer">
                      전화 상담
                    </a>
                  </div>
                </div>
              </div>
              <div className="mail-grp">
                <div className="mail">
                  <div className="mail-icon-container">
                    <a href={EMAIL_ADDRESS} target="_blank" rel="noopener noreferrer">
                      <img src={mail} alt="Phone icon" className="mail-icon"/>
                    </a>
                  </div>
                  <div className="phone-text">
                    <a href={PHONE_NUMBER} target="_blank" rel="noopener noreferrer">
                      메일 상담
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="yes-grp">
              <div className="yes">
                <div className="yes-icon-container">
                  <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
                    <img src={yesco} alt="Kakao icon" className="yes-icon"/>
                  </a>
                </div>
                <div className="yes-title">
                  <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
                    바로가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationBar;
