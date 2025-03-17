import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import menuIcon from '../../assets/icons/menu.png';
import closeIcon from '../../assets/icons/close.png';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </Sidebar>
      )}
    </>
  );
}

export default Header;

const MenuIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  align-self: flex-end;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 100;
`;
