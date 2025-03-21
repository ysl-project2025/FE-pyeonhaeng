import { css } from '@emotion/react';
import styled from '@emotion/styled';
import searchIcon from '../assets/icons/search.png';
import searchIconOrg from '../assets/icons/search-org.png';
import prevIcon from '../assets/icons/left.png';
import nextIcon from '../assets/icons/right.png';

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
    font-weight: 500;
    color: var(--white);
    border: 0;
    background: var(--primary);
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
export const SectionTitle = styled.h2`
  text-align: center;
  margin: 3rem 0;
  font-size: 1.8rem;
  font-weight: 500;
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
export const PrevBtn = styled.button`
  padding: 0;
  width: 2rem;
  background-image: url(${prevIcon});
  ${iconBtn}
`;
export const NextBtn = styled.button`
  padding: 0;
  width: 2rem;
  background-image: url(${nextIcon});
  ${iconBtn}
`;


/* *********** Product *********** */
export const ListWrap01 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
`;
export const ListWrap02 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 1rem;
`;

export const ImgWrap = styled.div`
  border: var(--border);
  border-radius: 2rem;
  overflow: hidden;
  padding: 2rem;
  &.detailImg{
    aspect-ratio: 1 / 1;
    margin-top: 1.5rem;
    img{
      width: 100%;
      height: 100%;
      object-fit: none;
      object-position: center;
    }
  }
`;

export const ProductName = styled.h4`
  font-size: 1.6rem;
  margin: 1.5rem 0 1rem;
  word-break: break-word;
  &.detailName{
    font-size: 2rem;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  word-break: break-word;
  &.detailPrice{
    font-size: 2rem;
    margin: 2rem 0;
  }
`;


/* *********** Review *********** */
export const ReviewWrap = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: var(--radius);
  background: var(--gray1);
  margin: 1rem 0;
  ul{
    ${flexStyle}
    ${jb}
    ${alc}
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: var(--border);
    .date{
      font-size: 1.4rem;
      color: var(--black_60);
    }
  }
  p{
    font-size: 1.5rem;
    line-height: 1.16;
  }
`;

export const ReviewModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: calc(100% - 1.5rem);
  border: var(--border);
  padding: 4rem 1rem 2rem 1rem;
`;
