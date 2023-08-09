import Home from './components/Home/Home';
import * as S from "./AppStyle"

export default function App() {
    return (
        <div className="App">
            <S.AppContainer>
                <Home/>
            </S.AppContainer>
        </div>
    );
}
