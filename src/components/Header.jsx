import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

import logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.svg";
import search from "../assets/images/gg_search.svg"; // Import close icon
import home from "../assets/images/home.svg";
import plus from "../assets/images/tdesign_plus.svg";
import minus from "../assets/images/ic_outline-minus.svg";
import mobileArrow from "../assets/images/arrow-down.svg";

const navLinks = [
  {
    label: "나눔의행복",
    submenu: [
      { label: "나눔의행복(특약) 소개", href: "#index.html" },
      { label: "참여기업", href: "/Shopping/DonatedInsurance/about_donor_insurance.php#proceduresGuide" },
      { label: "납품기업", href: "/Shopping/DonatedInsurance/about_donor_insurance.php#warningContainer" }
    ]
  },
  {
    label: "보험소개",
    submenu: [
      { label: "간편검색", href: "/Shopping/DonatedInsurance/insurance_introduction.php" },
      { label: "추천검색", href: "/Shopping/DonatedInsurance/insurance_suggested_search.php" }
    ]
  },
  {
    label: "관악사업소",
    submenu: [
      { label: "사업소장인사말", href: "/Shopping/GwanakBranch/greetings.php" },
      { label: "관악사업소 소개", href: "/Shopping/GwanakBranch/branch_introduction.php" },
      { label: "소속FP", href: "/Shopping/GwanakBranch/affiliated_fp.php" },
      { label: "인재채용", href: "/Shopping/GwanakBranch/recruitment.php" },
      { label: "찾아오는길", href: "/Shopping/GwanakBranch/company_address.php" }
    ]
  },
  {
    label: "커뮤니티",
    submenu: [
      { label: "공지사항", href: "/Shopping/Community/notice_board.php" },
      { label: "Q&A", href: "/Shopping/Community/qna_main_page.php" },
      { label: "FAQ", href: "/Shopping/Community/faq.php" },
      { label: "이벤트", href: "/Shopping/Community/events.php" }
    ]
  }
];

const Header = ({ zoom, setZoom }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedNav, setSelectedNav] = useState(""); // main nav
  const [selectedSubNav, setSelectedSubNav] = useState(""); // sub nav
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(""); // Track open dropdown
  const [breadcrumbVisible, setBreadcrumbVisible] = useState(true);
  // For mobile drawer: which main nav is open
  const [openMobileNav, setOpenMobileNav] = useState("");

  const MAX_ZOOM = 1.4;
  const MIN_ZOOM = 0.8;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min((prev || 1) + 0.1, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max((prev || 1) - 0.1, MIN_ZOOM));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add this function to handle search
  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      // Replace this with your actual search logic
      alert(`Searching for: ${searchValue}`);
    }
  };

  // When search closes (e.g. on blur or close button)
  const handleCloseSearch = () => {
    setShowSearch(false);
    setBreadcrumbVisible(true);
  };

  return (
    <header className="header">
      {/* Mobile Header Bar */}
      <div className="mobile-header-bar">
        <div className="mobile-hamburger" onClick={() => setShowMobileMenu(true)}>
          <img src={menu} alt="Menu" />
        </div>
        <div className="mobile-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="mobile-actions">
          <img src={search} alt="Search" onClick={() => setShowSearch(!showSearch)} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${showMobileMenu ? "open" : ""}`}>
        <div className="drawer-header">
          <img src={logo} alt="Logo" className="drawer-logo" />
        </div>
        <nav className="drawer-nav">
          {navLinks.map((nav) => (
            <div key={nav.label} className="drawer-nav-item">
              <button
                className="drawer-nav-label mobile-nav-center"
                style={{
                  background: "none",
                  border: "none",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  color: openMobileNav === nav.label ? "#ff6a00" : "#222",
                  padding: "10px 0",
                  cursor: "pointer",
                  gap: "6px"
                }}
                onClick={() => setOpenMobileNav(openMobileNav === nav.label ? "" : nav.label)}
              >
                {nav.label}
                <img
                  src={mobileArrow}
                  alt="dropdown arrow"
                  style={{
                    width: 22,
                    height: 14,
                    marginLeft: 4,
                    transition: "transform 0.2s",
                    transform: openMobileNav === nav.label ? "rotate(180deg)" : "none"
                  }}
                />
              </button>
              {openMobileNav === nav.label && (
                <div className="drawer-submenu" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  {nav.submenu.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="drawer-submenu-link"
                      style={{ textAlign: "center", width: "100%" }}
                      onClick={() => {
                        setSelectedNav(nav.label);      // set main nav for breadcrumb
                        setSelectedSubNav(sub.label);   // set subnav for breadcrumb
                        setShowMobileMenu(false);       // close drawer
                        setOpenMobileNav("");           // close submenu
                      }}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Mobile drawer buttons removed as requested */}
      </div>
      {showMobileMenu && (
        <div
          className="drawer-overlay"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {/* ...rest of your existing header (desktop only) */}
      <div className="header_logo">
        <div className="logo-image">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="main-menu">
        <div className="first-container">
          <div className="hamburger">
            <img src={menu} alt="Menu" className="menu" />
          </div>
          <div className="nav-group">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              {navLinks.map((nav) => (
                <div
                  className={`nav-item dropdown-container${openDropdown === nav.label ? " open" : ""}`}
                  key={nav.label}
                  onMouseEnter={() => setOpenDropdown(nav.label)}
                  onMouseLeave={() => setOpenDropdown("")}
                  style={{ height: '100%', display: 'flex', alignItems: 'center' }}
                >
                  <button
                    className={`dropdown-trigger${selectedNav === nav.label ? " active" : ""}`}
                    onClick={() => {
                      setOpenDropdown(openDropdown === nav.label ? "" : nav.label);
                      setSelectedNav(nav.label);
                      setSelectedSubNav(""); // Reset subnav
                    }}
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none',
                      fontWeight: 'bold',
                      fontSize: '1.25rem',
                      color: openDropdown === nav.label ? '#ff6a00' : '#222',
                      cursor: 'pointer',
                      padding: '0 32px',
                      borderRadius: 0,
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: openDropdown === nav.label ? 'underline' : 'none',
                      textUnderlineOffset: '6px',
                      textDecorationThickness: '2px',
                    }}
                  >
                    {nav.label}
                  </button>
                  {openDropdown === nav.label && (
                  <div
                    className="dropdown-menu mega-menu"
                    style={{
                      position: 'fixed',
                      left: 0,
                      right: 0,
                      top: '119px',
                      width: '100vw',
                      minWidth: '100vw',
                      maxWidth: '100vw',
                      background: '#fff',
                      borderRadius: '0 0 0 0',
                      zIndex: 1001,
                      padding: 0,
                      textAlign: 'left',
                      /* borderTop removed */
                      boxSizing: 'border-box',
                      height: 'auto',
                    }}
                    >
                      <div
                        className="mega-menu-content"
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          width: '100%',
                          maxWidth: '1200px',
                          margin: '0 auto',
                          padding: '32px 0 24px 0',
                          gap: '80px',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0 }}>
                          {nav.submenu.map(sub => (
                            <button
                              className={`dropdown-item${selectedSubNav === sub.label ? " selected" : ""}`}
                              key={sub.label}
                              style={{ textAlign: 'left', width: 200, fontSize: 18, fontWeight: 700, background: 'none', border: 'none', color: '#222', padding: '10px 0', borderBottom: 'none', cursor: 'pointer' }}
                              onClick={() => {
                                setSelectedNav(nav.label);
                                setSelectedSubNav(sub.label);
                                setOpenDropdown(""); // Close dropdown
                              }}
                              type="button"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="other-menu">
            <div className="search">
              {!showSearch ? (
                <img
                  src={search}
                  alt="Search"
                  onClick={() => {
                    setShowSearch(true);
                    setBreadcrumbVisible(false);
                  }}
                />
              ) : (
                <button
                  className="close-btn"
                  onClick={() => {
                    setShowSearch(false);
                    setBreadcrumbVisible(true);
                  }}
                  aria-label="Close search"
                >
                  ×
                </button>
              )}
            </div>
            <div className="my-page">
              <button id="mypage-button" className="drawer-action-btn" href="/Shopping/sign_up.php">
                마이페이지
              </button>
            </div>
            <div className="my-page">
              <button id="logout-button" className="drawer-action-btn" href="/Shopping/login.php">
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="search-bar-figma-wrapper">
          <div className="search-bar-figma">
            <input
              className="search-bar-figma-input"
              type="text"
              placeholder="안녕하세요. 무엇을 도와드릴까요?"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSearch()}
              autoFocus
            />
            <button
              className="search-bar-figma-btn"
              onClick={handleSearch}
              tabIndex={-1}
              type="button"
            >
              <img src={search} alt="Search" />
            </button>
          </div>
          <div className="search-bar-figma-below">
            <span className="search-bar-figma-popular">인기 검색어</span>
            <span className="search-bar-figma-keywords">경기 서울 약관 보험종류 하치 부산</span>
          </div>
        </div>
      )}

      {/* Breadcrumb navigation */}
      {breadcrumbVisible && (
        <div className="second-container">
          <div className="second-navigation">
            <div className="home">
              <img src={home} alt="Home" />
            </div>
            <div className="home-text">
              <a className="nav" href="#index.html">
                홈
              </a>
            </div>
            {selectedNav && (
              <div className="home-text">
                <a className="nav" href="#">
                  {selectedNav}
                </a>
              </div>
            )}
            {selectedSubNav && (
              <div className="home-text">
                <a className="nav" href="#">
                  {selectedSubNav}
                </a>
              </div>
            )}
          </div>
          <div className="third-container">
            <div className="percent">
              <p id="percent-value">{Math.round((zoom || 1) * 100)}%</p>
            </div>
            <div id="increase">
              <p
                id="increase-value"
                onClick={handleZoomIn}
                style={{ cursor: "pointer" }}
              >
                <img src={plus} alt="Plus" />
              </p>
            </div>
            <div
              id="decrease"
              onClick={handleZoomOut}
              style={{ cursor: "pointer" }}
            >
              <p id="decrease-value">
                <img src={minus} alt="Minus" />
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
