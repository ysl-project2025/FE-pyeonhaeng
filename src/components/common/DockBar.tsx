import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { alc, flexStyle, jb } from '../../styles/common.css';

function DockBar() {
  return (
    <DockBarWrap>
      <DockBarUl>
        <li><Link to={'/'}>home</Link></li>
        <li><Link to={'/'}>행사</Link></li>
        <li><Link to={'/'}>좋아요</Link></li>
        <li><Link to={'/'}>마이페이지</Link></li>
      </DockBarUl>
    </DockBarWrap>
  )
}

export default DockBar

const DockBarWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    padding: 0 1.5rem;
    box-shadow: var(--shadow);
`;
const DockBarUl = styled.ul`
    ${flexStyle}
    ${jb}
    ${alc}
    height: 100%;
`;