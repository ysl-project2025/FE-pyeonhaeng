import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
  .borderTop {
    border-top: var(--border);
  }
  .borderBot {
    border-bottom: var(--border);
  }
  .line_t {
    border-top: 1px solid var(--thumb);
  }
  .line_b {
    border-bottom: 1px solid var(--thumb);
  }

  /* 플렉스 */
  .fl {
    display: flex;
  }
  .fl.jc {
    justify-content: center;
  }
  .fl.jb {
    justify-content: space-between;
  }
  .fl.js {
    justify-content: flex-start;
  }
  .fl.je {
    justify-content: flex-end;
  }
  .fl.alc {
    align-items: center;
  }
  .fl.als {
    align-items: flex-start;
  }
  .fl.ale {
    align-items: flex-end;
  }
  .fl.nowr {
    flex-wrap: nowrap;
  }
  .fl.dir {
    flex-direction: row;
  }
  .fl.dic {
    flex-direction: column;
  }
  .fl.fl1 {
    flex: 1;
  }

  .gap2_t {
    margin-top: 2rem;
  }
  .gap3_t {
    margin-top: 3rem;
  }
  .gap4_t {
    margin-top: 4rem;
  }
  .gap2_b {
    margin-bottom: 2rem;
  }
  .gap3_b {
    margin-bottom: 3rem;
  }
  .gap4_b {
    margin-bottom: 4rem;
  }

  .mr1 {
    margin-right: 1rem;
  }
  .ml1 {
    margin-left: 1rem;
  }
  .mt1 {
    margin-top: 1rem;
  }
  .mb1 {
    margin-bottom: 1rem;
  }
  .mcX {
    margin-left: auto;
    margin-right: auto;
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

  /* 말줄임 */
  .txt_over_1,
  .txt_over_2,
  .txt_over_3,
  .txt_over_4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .txt_over_1 {
    -webkit-line-clamp: 1;
  }
  .txt_over_2 {
    -webkit-line-clamp: 2;
  }
  .txt_over_3 {
    -webkit-line-clamp: 3;
  }
  .txt_over_4 {
    -webkit-line-clamp: 4;
  }
`;

export const sectionStyle = css`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
`;
export const Section = styled.div`
  ${sectionStyle}
`;


const inputWidth = {
  default: '100%',
  small: '32rem',
};
export const inputStyle = (variant: keyof typeof inputWidth = 'default') => ({
  border: 'var(--border)',
  color: 'var(--textColor)',
  borderRadius: 'var(--radius)',
  padding: '0 2rem',
  background: 'var(--white)',
  height: 'var(--inputHeight)',
  width: inputWidth[variant],
});
export const smallInputStyle = inputStyle('small');

/* *************************************************
 *                       FLEX                       *
 ****************************************************/
type JustifyContentVariant = 'default' | 'jb' | 'js' | 'je';
type AlignItemsVariant = 'default' | 'als' | 'ale';
type FlexWrapVariant = 'default' | 'noWrap';
type FlexDirectionVariant = 'default' | 'row';

const justifyContent: Record<
  JustifyContentVariant,
  { justifyContent: string }
> = {
  default: { justifyContent: 'center' },
  jb: { justifyContent: 'space-between' },
  js: { justifyContent: 'flex-start' },
  je: { justifyContent: 'flex-end' },
};
const alignItems: Record<AlignItemsVariant, { alignItems: string }> = {
  default: { alignItems: 'center' },
  als: { alignItems: 'flex-start' },
  ale: { alignItems: 'flex-end' },
};
const flexWrap: Record<FlexWrapVariant, { flexWrap: string }> = {
  default: { flexWrap: 'wrap' },
  noWrap: { flexWrap: 'nowrap' },
};
const flexDirection: Record<FlexDirectionVariant, { flexDirection: string }> = {
  default: { flexDirection: 'column' },
  row: { flexDirection: 'row' },
};

export const flex = (
  justify: JustifyContentVariant = 'default',
  align: AlignItemsVariant = 'default',
  wrap: FlexWrapVariant = 'default',
  direction: FlexDirectionVariant = 'default',
) => ({
  display: 'flex',
  ...justifyContent[justify],
  ...alignItems[align],
  ...flexWrap[wrap],
  ...flexDirection[direction],
});
// const containerStyle = css`${flex("jb", "ale", "noWrap", "row")}`;

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