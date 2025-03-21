import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import headerLogo from '../../assets/logos/Logo-kr-org.png'
import menuIcon from '../../assets/icons/menu.png';
import closeIcon from '../../assets/icons/close.png';
import { ContainImg, alc, flexStyle, jb, js, sectionStyle } from '../../styles/common.css';
import SearchBar from './SearchBar';
import { css } from '@emotion/css';
import Category from './Category';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 사이드바 바깥 클릭 시 닫히도록 설정
  useEffect(() => {
    if (!isSidebarOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && !sidebar.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <HeaderWrap>
      <Link 
        to="/"
        className={css`${headerLogoStyle}`}
      >
        <ContainImg 
          src={headerLogo}
          alt="PyeonHaeng"
        />
      </Link>

      <MenuIcon
        src={menuIcon}
        alt="메뉴 열기"
        onClick={() => setIsSidebarOpen(true)}
      />

      {isSidebarOpen && (
        <Sidebar id="sidebar">
          <CloseIcon
            src={closeIcon}
            alt="닫기"
            onClick={() => setIsSidebarOpen(false)}
          />
          <ul className="userState" onClick={() => setIsSidebarOpen(false)}> {/* 내부 메뉴 클릭 시 닫힘 */}
            <li>
              <Link to="/login">Login</Link>
            </li> / 
            <li>
              <Link to="/join">Join</Link>
            </li>
          </ul>
          <SearchBar onSearch={() => setIsSidebarOpen(false)} /> {/* 검색 실행 시 닫힘 */}
          
          {/* ✅ Category 내부 클릭 시 닫힘 */}
          <div onClick={() => setIsSidebarOpen(false)}>
            <Category />
          </div>
        </Sidebar>
      )}
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.div`
  ${sectionStyle}
  ${flexStyle}
  ${jb}
  ${alc}
  height: 5rem;
  box-shadow: var(--shadow);
`;
const headerLogoStyle = css`
  display: inline-block;
  width: auto;
  max-width: 5rem;
  height: 100%;
  padding: 0.5rem 0;
`;
const MenuIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 100vh;
  background: white;
  box-shadow: var(--shadow);
  padding: 5rem 2rem 2rem 2rem;
  z-index: 100;
  .userState{
    ${flexStyle}
    ${js}
    ${alc}
    margin-bottom: 3rem;
    li a{
      font-size: 1.8rem;
      padding: .5rem 1rem;
    }
  }
  .categoryWrap {
    margin-top: 5rem;
    li{
      padding: 2rem 0;
      text-align: center;
      a{
        font-size: 1.8rem;
      }
    }
  }
`;
