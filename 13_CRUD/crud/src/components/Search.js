import styled from "styled-components";

export default function Search({searchText, updateSearchText, submit}) {
    return (
        <div className="search">
            <SearchInput
                className="searchInput"
                value={searchText}
                onChange={updateSearchText}
            />
            <Submit
            onClick={submit}
            >검색</Submit>
        </div>
    )
}

const SearchInput = styled.input`
    width: 440px;
    height: 37px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    border: 1.5px solid #eee;
    border-radius: 10px 0 0 10px;
`;

const Submit = styled.button`
    height: 37px;
    width: 55px;
    font-size: 16px;
    outline: none;
    border: none;
    padding: 0;
    box-sizing: border-box;
    margin: 0;
    border-radius: 0 10px 10px 0;
`