import { css } from '@emotion/react';
import styled from '@emotion/styled';
import searchIcon from '../assets/icons/search.png';
import searchIconOrg from '../assets/icons/search-org.png';

export const globalStyles = css`
  input[type='text'],
  input[type='password'],
  input[type='email'],
  input[type='number'],
  input[type='address'],
  input[type='tel'] {
    border: var(--border);
    color: var(--textColor);
    border-radius: var(--radius);
    padding: 0 2rem;
    background: var(--white);
    height: var(--inputHeight);
    width: 100%;
    margin-bottom: 1rem;
  }
  button {
    border: var(--border);
    color: var(--textColor);
    border-radius: var(--radius);
    padding: 0 2rem;
    background: var(--white);
    height: var(--inputHeight);
  }
  button[type='submit'] {
    width: 100%;
  }

  /* 공통 클래스 */
  .dn {
    display: none;
  }
  .ir {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
  .abs {
    position: absolute;
  }
  .rel {
    position: relative;
  }
  .abs_c {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .full {
    width: 100%;
    height: 100%;
  }
  .fullImg_v img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .fullImg_t img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .talc {
    text-align: center;
  }

  /* 필수 */
  .required {
    position: relative;
  }
  .required::after {
    content: '';
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    margin-left: 0.2rem;
    vertical-align: top;
    border-radius: 100%;
    background: var(--orange);
  }

  /* 컨텐츠 공통 사이즈 */
  .inner {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  /* 컨텐츠 공통 제목 영역 */
  h2.headline {
    font-size: 2.4rem;
    font-weight: 700;
  }

  /* 입력 체크박스 */
  .chk_box {
    display: inline-block;
    position: relative;
    line-height: 1.8rem;
  }
  .chk_box label {
    display: inline-block;
    padding-left: 2.4rem;
  }
  .chk_box input[type='checkbox'] {
    position: absolute;
    top: 0.4rem;
    left: 0;
  }
  .chk_box label:before {
    content: '';
    position: absolute;
    top: 0.4rem;
    left: 0;
    width: 1.8rem;
    height: 1.8rem;
    background: url(../images/ic_chk.png) no-repeat 0 0;
  }
  .chk_box input[type='checkbox']:checked + label:before {
    background: url(../images/ic_chk_on.png) no-repeat 0 0;
  }

`;

export const sectionStyle = css`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
`;
export const fullSize = css`
  width: 100%;
  height: 100%;
`;

/* *************************************************
 *                       FLEX                       *
 ****************************************************/
export const flexStyle = css`
  display: flex;
`;
export const jc = css`
  justify-content: center;
`;
export const jb = css`
  justify-content: space-between;
`;
export const js = css`
  justify-content: flex-start;
`;
export const je = css`
  justify-content: flex-end;
`;
export const alc = css`
  align-items: center;
`;
export const als = css`
  align-items: flex-start;
`;
export const ale = css`
  align-items: flex-end;
`;
export const NoWrap = css`
  flex-wrap: nowrap;
`;
export const iconBtn = css`
  border: 0;
  font-size: 0;
  line-height: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: initial;
`;


export const Section = styled.div`
  ${sectionStyle}
`;
export const ContainImg = styled.img`
  ${fullSize}
  object-fit: contain;
`;
export const CoverImg = styled.img`
  ${fullSize}
  object-fit: cover;
`;

export const SearchBtn = styled.button`
  background-image: url(${searchIcon});
  ${iconBtn}
`;
export const SearchBtnOrg = styled.button`
  background-image: url(${searchIconOrg});
  ${iconBtn}
`;