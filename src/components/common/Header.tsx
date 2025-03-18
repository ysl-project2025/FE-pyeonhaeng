
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
// import headerLogo from '../../assets/icons/'
import menuIcon from '../../assets/icons/menu.png';
import closeIcon from '../../assets/icons/close.png';
import { alc, flexStyle, jb, sectionStyle } from '../../styles/common.css';
import SearchBar from './SearchBar';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <HeaderWrap>
      <Link to="/">PyeonHaeng</Link>

      <MenuIcon
        src={menuIcon}
        alt="메뉴 열기"
        onClick={() => setIsSidebarOpen(true)}
      />

      {isSidebarOpen && (
        <Sidebar>
          <CloseIcon
            src={closeIcon}
            alt="닫기"
            onClick={() => setIsSidebarOpen(false)}
          />
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
          </ul>
          <SearchBar 
            onChange={(value: string): void => {}} 
            onSearch={(keyword: string): void => {}} 
          />
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
const MenuIcon = styled.img`
  width: 3rem;
  height: 3rem;
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
`;
