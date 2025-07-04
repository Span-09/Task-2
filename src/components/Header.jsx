import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.svg";
import search from "../assets/images/gg_search.svg"; // Import close icon
import home from "../assets/images/home.svg";
import plus from "../assets/images/tdesign_plus.svg";
import minus from "../assets/images/ic_outline-minus.svg";

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
              <span className="drawer-nav-label">{nav.label}</span>
              <div className="drawer-submenu">
                {nav.submenu.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="drawer-submenu-link"
                    onClick={() => {
                      setSelectedNav(nav.label);      // set main nav for breadcrumb
                      setSelectedSubNav(sub.label);   // set subnav for breadcrumb
                      setShowMobileMenu(false);       // close drawer
                    }}
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
        {/* Add both buttons here */}
        <button id="drawer-mypage-button" className="drawer-action-btn" href="/Shopping/sign_up.php">
          마이페이지
        </button>
        <button id="drawer-logout-button" className="drawer-action-btn" href="/Shopping/login.php">
          로그인
        </button>
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
            {navLinks.map((nav) => (
              <div
                className={`nav-item dropdown-container${openDropdown === nav.label ? " open" : ""}`}
                key={nav.label}
                onMouseEnter={() => setOpenDropdown(nav.label)}
                onMouseLeave={() => setOpenDropdown("")}
              >
                <button
                  className={`dropdown-trigger${selectedNav === nav.label ? " active" : ""}`}
                  onClick={() => {
                    setOpenDropdown(openDropdown === nav.label ? "" : nav.label);
                    setSelectedNav(nav.label);
                    setSelectedSubNav(""); // Reset subnav
                  }}
                  type="button"
                >
                  {nav.label}
                </button>
                {openDropdown === nav.label && (
                  <div className="dropdown-menu">
                    {nav.submenu.map(sub => (
                      <button
                        className={`dropdown-item${selectedSubNav === sub.label ? " selected" : ""}`}
                        key={sub.label}
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
                )}
              </div>
            ))}
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
