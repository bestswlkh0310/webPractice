import TopBar from "./components/TopBar";
import Main from "./components/Main";
import { useState } from "react"
import styled from "styled-components";

export default function App() {
    const [searchResult, setSearchResult] = useState([])

    const updateSearchResult = (urlList) => {
        const list = []
        urlList.forEach((it, idx) => {
            list.push({
                id: idx,
                url: it
            })
        });
        setSearchResult(list)
    }

return (
    <AppStyle className="App">
        <TopBar updateSearchResult={updateSearchResult}/>
        <Main searchResult={searchResult}/>
    </AppStyle>
);
}

const AppStyle = styled.div`
    height: 100vh;
    text-align:center;
    display: flex;
    flex-direction: column;
`