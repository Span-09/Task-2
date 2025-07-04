import React, { useState, useRef, useEffect } from "react";
import "../styles/Hero.css";
import banner from "../assets/images/hero-banner.png";
import contactIcon from "../assets/images/contact.png";

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    ceo: "",
    contact: "",
    address: "",
    manager: "",
    managerContact: "",
    regnum: "",
    agree: false,
  });

  const modalRef = useRef(null);

  useEffect(() => {
    if (modalOpen && modalRef.current) {
      modalRef.current.scrollTop = 0; // for modal content scroll
      modalRef.current.scrollIntoView({ behavior: "auto", block: "center" }); // scrolls screen to modal
    }
  }, [modalOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      alert("단체명을 입력해주세요.");
      return;
    }
    if (!form.agree) {
      alert("개인정보 동의가 필요합니다.");
      return;
    }
    alert(`상담 신청이 완료되었습니다. (단체명: ${form.name})`);
    setModalOpen(false);
    setForm({
      name: "",
      ceo: "",
      contact: "",
      address: "",
      manager: "",
      managerContact: "",
      regnum: "",
      agree: false,
    });
  };

  return (
    <div className="hero-root">
      <div className="hero-section-center">
        <div className="hero-section-box">
          <div className="hero-section-title">나눔의행복(특약) 소개</div>
          <div className="hero-banner-box">
            <img src={banner} alt="기부특약형 상품 안내서" className="hero-banner-img" />
          </div>
        </div>
      </div>
      <div className="hero-desc">
        <b>「나눔의 행복」</b>은 사망보험금을 지정된 기부단체에만 지급할 수 있도록 설계된 새로운 형태의 기부 특약형 보험입니다.
      </div>

      <div className="hero-info-box">
        <div className="hero-info-section">
          <div className="hero-info-title"><span className="hero-info-icon">🏠</span> <span className="orange">상품 구조 요약</span></div>
          <ul>
            <li><b className="orange">지급 대상 :</b> 피보험자 사망 시, 보험금 전액이 지정 기부단체로 지급</li>
            <li><b className="orange">유가족 혜택 :</b>
              <ul>
                <li>보험금의 20%를 위로금으로 지급</li>
                <li>나머지 80%는 유가족 세제 혜택 가능</li>
                <li>고인의 이름으로 기부재단 감사패 및 추모패 증정</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="hero-info-section">
          <div className="hero-info-title"><span className="hero-info-icon">🏠</span> <span className="orange">이 상품이 특별한 이유</span></div>
          <ul>
            <li>유가족에게 실질적 위로금과 세제 혜택을 제공합니다.</li>
            <li>기부금(사망보험금)은 금융회사를 통해 투명성있게 전달됩니다.</li>
            <li>기부자(계약자)의 선택이 다양한 계층에게 도움이 됩니다.</li>
          </ul>
        </div>
        <div className="hero-info-section">
          <div className="hero-info-title"><span className="hero-info-icon">🏠</span> <span className="orange">ESG경영 및 브랜드 연계 혜택</span></div>
          <ul>
            <li><b>사회공헌 마케팅 :</b> ESG 시대에 부합하는 신뢰 이미지 형성</li>
            <li>기부를 통해 고객과의 감성적 연결 및 브랜드 신뢰도 상승</li>
          </ul>
        </div>
        <div className="hero-info-section">
          <div className="hero-info-title"><span className="hero-info-icon">🏠</span> <span className="orange">설계사(FP) 기부 참여 형태</span></div>
          <ul>
            <li>모집인(설계사FP) 보험 가입 수수료의 일부(30%)를 지정기부단체에 물품 & 서비스 항목으로 참여합니다.</li>
          </ul>
        </div>
      </div>

      <div className="hero-bottom-text">
        <div className="hero-bottom-desc">
          이 구조들을 통해 기부자, 유가족 지원, 브랜드 홍보, 사회 공헌이 하나로 이루어집니다.<br />
          <b>「나눔의 행복」</b>은 고인의 마지막 뜻이 사회에 전달되고, 그 따뜻함이 또 다른 생명을 살립니다.<br />
          그 선택이 유가족에게 위로가 되고, 세상에 영원히 남는 선물이 됩니다.
        </div>
        <div className="hero-quote-box">
          <span className="hero-quote">
            “당신의 마지막 선택이, 누군가의 시작이 됩니다.”
          </span>
        </div>
        <div className="hero-bottom-final">
          <b>「나눔의 행복」</b>과 함께 따뜻한 세상을 만들 수 있도록 동참해주세요.
        </div>
      </div>

      {/* Contact Box */}
      <div className="hero-contact-box">
        <div className="hero-contact-left">
          <img src={contactIcon} alt="Contact Icon" className="hero-contact-icon" />
        </div>
        <div className="hero-contact-center">
          <div className="hero-contact-title">한화손해보험 관악사업소</div>
          <div className="hero-contact-person">담당자 : 정태영 소장</div>
          <div className="hero-contact-info">
            <span className="hero-contact-highlight">연락처 02-3395-7180 / 이메일 tobego@naver.com</span>
          </div>
        </div>
        <div className="hero-contact-right">
          <button className="hero-contact-btn" onClick={() => setModalOpen(true)}>
            <p><b>「나눔의 행복」</b> 가입신청 </p><span className="hero-contact-arrow">›</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-window" ref={modalRef}>
            <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
            <div className="modal-title"><b>(단체) 나눔의행복 가입 신청</b></div>
            <div className="modal-subtitle">한화손해보험 관악사업소 귀중</div>
            <div className="modal-desc">
              <span className="modal-desc-bar"></span>
              다음세대의 미래를 위한 투자, '나눔의행복'에 가입해주셔서 감사합니다.<br />
              아래의 내용을 입력해 주시면, 담당자가 신속하게 가입상담을 진행해드리겠습니다.
            </div>
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-row">
                <label className="modal-label">단체명</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="단체명을 입력해주세요."
                  className="modal-input"
                  required
                />
              </div>
              <div className="modal-row">
                <div className="modal-col">
                  <label className="modal-label">단체장명</label>
                  <input
                    name="ceo"
                    value={form.ceo}
                    onChange={handleChange}
                    placeholder="단체장명을 입력해주세요."
                    className="modal-input"
                  />
                </div>
                <div className="modal-col">
                  <label className="modal-label">대표 연락처</label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="대표 연락처를 입력해주세요."
                    className="modal-input"
                  />
                </div>
              </div>
              <div className="modal-row">
                <label className="modal-label">주소</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="주소를 입력해주세요."
                  className="modal-input"
                />
              </div>
              <div className="modal-row">
                <div className="modal-col">
                  <label className="modal-label">담당자명</label>
                  <input
                    name="manager"
                    value={form.manager}
                    onChange={handleChange}
                    placeholder="담당자명을 입력해주세요."
                    className="modal-input"
                  />
                </div>
                <div className="modal-col">
                  <label className="modal-label">담당자 연락처</label>
                  <input
                    name="managerContact"
                    value={form.managerContact}
                    onChange={handleChange}
                    placeholder="담당자 연락처를 입력해주세요."
                    className="modal-input"
                  />
                </div>
              </div>
              <div className="modal-row">
                <label className="modal-label">사업자등록증</label>
                <input
                  name="regnum"
                  value={form.regnum}
                  onChange={handleChange}
                  placeholder="첨부"
                  className="modal-input"
                />
              </div>
              <div className="modal-info">
                접수내용 확인後, 전문상담사가 나눔의행복 가입을 안내드립니다.
              </div>
              <div className="modal-row modal-row-agree">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  id="agree"
                  required
                />
                <label htmlFor="agree" className="modal-agree-label">
                  접수된 정보가 상담을 위해 제공되는 것에 동의합니다. <span style={{ color: "#ff6600" }}>(필수)</span>
                </label>
              </div>
              <button type="submit" className="modal-submit-btn">상담 신청하기</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
