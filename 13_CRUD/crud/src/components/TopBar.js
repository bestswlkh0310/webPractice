import Search from "./Search"
import { useState } from "react"
import SearchDetail from "./SearchDetail"
import styled from "styled-components";

export default function TopBar() {

    const [searchText, setSearchText] = useState("사과")

    const updateSearchText = (e) => { setSearchText(e.target.value) }
    const submitSearch = () => {}

    return (
        <Nav className="topBar">
            <Search searchText={searchText} updateSearchText={updateSearchText} submit={submitSearch}/>
            <SearchDetail searchText={searchText}/>
        </Nav>
    )
}

const Nav = styled.nav`
    display: inline-block;
    text-align: center;
    background-color: #f1f1f1;
    border-radius: 10px;
    width: 95vw;
    padding: 5px 0 5px 0;
    margin-top: 10px;
`