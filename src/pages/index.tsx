import SearchBar from "../components/common/SearchBar";


const MainPage = () => {
  return (
    <>
      <SearchBar 
        onChange={(value: string): void => {}} 
        onSearch={(keyword: string): void => {}} 
      />
      <p>Main Page</p>
    </>
  );
};

export default MainPage;
