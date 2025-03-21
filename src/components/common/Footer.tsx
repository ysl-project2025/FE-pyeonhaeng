import styled from "@emotion/styled";

function Footer() {
  return (
    <FooterWrap>
      <p>ⓒ 2025. PyeonHaeng All rights reserved.</p>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.footer`
  margin-top: 5rem;
  padding: 2rem 1.5rem;
  background: var(--black);
    p{
      color: var(--gray3);
      text-align: center;
      font-size: 1.4rem;
    }
  }
`;