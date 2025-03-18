import SearchBar from "../components/common/SearchBar";


const MainPage = () => {
  return (
    <>
      <SearchBar onSearch={(keyword: string) => console.log(`검색: ${keyword}`)}/>
      <p>Main Page</p>
    </>
  );
};

export default MainPage;
