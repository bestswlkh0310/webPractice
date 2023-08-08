import TopBar from "./components/TopBar";
import Main from "./components/Main";
import styled from "styled-components";

export default function App() {
  return (
    <AppStyle className="App">
      <TopBar/>
      <Main/>
    </AppStyle>
  );
}

const AppStyle = styled.div`
    height: 100vh;
    text-align:center;
`