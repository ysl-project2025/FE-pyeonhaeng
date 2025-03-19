import styled from "@emotion/styled";
import SearchBar from "../components/common/SearchBar";
import gsEventThumb from "../assets/event/gs25_march_thumb.png";
import { Link } from "react-router-dom";
import Category from "../components/common/Category";
import { Section, alc, flexStyle, jb, sectionStyle } from "../styles/common.css";


const MainPage = () => {
  return (
    <>
      <Section>
        <SearchBar onSearch={(keyword: string) => console.log(`검색: ${keyword}`)}/>
      </Section>
      <MainCategory>
        <Category />
      </MainCategory>
      <MainSection>
        <MainTitle>이달의 행사</MainTitle>
        <Link to={'/'}>
          <img src={gsEventThumb} alt="GS25 3월 행사" />
        </Link>
      </MainSection>
      <MainSection>
        <MainTitle>행사 상품 한눈에 보깅</MainTitle>
        
      </MainSection>
    </>
  );
};

export default MainPage;

const MainSection = styled.div`
  ${sectionStyle}
  margin-bottom: 3rem;
`;

const MainTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem 0;
`;

const MainCategory = styled.div`
  ul{
    ${flexStyle}
    ${jb}
    ${alc}
    padding: 0 1.5rem;
    gap: 0.5rem;
    margin: 2.5rem 0;
  }
  li{
    flex: 1;
    text-align: center;
    border: 1px solid;
    padding: 1.5rem 1rem;
    border-radius: 2rem;
  }
`;