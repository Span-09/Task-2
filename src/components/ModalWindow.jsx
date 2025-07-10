import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import "../styles/ModalWindow.css";

const ModalWindow = forwardRef(({ isOpen, onClose }, ref) => {
    const modalContentRef = useRef(null);

    // Expose scrollToTop to parent
    useImperativeHandle(ref, () => ({
        scrollToTop: () => {
            if (modalContentRef.current) {
                modalContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }));

    useEffect(() => {
        if (isOpen && modalContentRef.current) {
            modalContentRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("상담 신청이 접수되었습니다.");
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalContentRef}>
                <div className="close-button-div">
                    <button onClick={onClose} className="close-button">×</button>
                </div>
                <div className="container">
                    <div className="title-container">
                        <div className="title-box">
                            <h3 className="header-text">(단체) 나놈의행복 가입 신청</h3>
                        </div>
                    </div>
                    <div className="subtitle-container">
                        <h5 className="subtitle-text">한화손해보험 관악사업소 귀중</h5>
                    </div>
                    <div className="modal-desc-body">
                        <div className="modal-desc">
                            <div className="modal-text">
                                <p className="modal-description">
                                    다음서대의 미래를 위한 투자, 나눔의행복에 가입해주셔서 감사합니다.
                                    <br />
                                    아래의 내용을 입력해  주기면, 담당자가 신속하게 가입항담을 진행해드리겠습니다
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="form-main">
                        <form className="form-container" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <label>
                                    단체명 <br />
                                    <input type="text" placeholder="단체명을 입력해주세요" className="input-container" required autoFocus/>
                                </label>
                            </div>
                            <div className="form-row form-row-2col">
                                <label>
                                    단체장명 <br />
                                    <input type="text" placeholder="단체장명를 입력해주세요" className="input-container" required/>
                                </label>
                                <label>
                                    대표 연락체 <br />
                                    <input type="text" placeholder="대표 연락체를 입력해주세요" className="input-container" required/>
                                </label>
                            </div>
                            <div className="form-row">
                                <label>
                                    주소 <br />
                                    <input type="text" placeholder="주소를 입력해주세요" className="input-container" required/>
                                </label>
                            </div>
                            <div className="form-row form-row-2col">
                                <label>
                                    담당자명 <br />
                                    <input type="text" placeholder="담당자명을 입력해주세요" className="input-container" required/>
                                </label>
                                <label>
                                    담당자명 연락처 <br />
                                    <input type="text" placeholder="담당자명 연락처를 입력해주세요" className="input-container" required/>
                                </label>
                            </div>
                            <div className="form-row">
                                <label>
                                    사업자등록증<br />
                                    <input type="file" className="input-container" required/>
                                </label>
                            </div>
                            <div className="form-footer">
                                <div className="form-footer-text">
                                    <p>접수내용 확인후, 전문상담사가 나놈의행복 가입을 안내드립니다.</p>
                                    <input type="checkbox" className="check" /><span className="text">접수된 정보가 상담을 위해 제공되는 것에 동의합니다.</span> <span className="require">(필수)</span>
                                </div>
                                <div className="form-footer-button">
                                    <button type="submit">상담 시청하기</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ModalWindow;