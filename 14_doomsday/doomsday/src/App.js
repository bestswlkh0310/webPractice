import './AppStyle.js';
import Home from './components/Home/Home';
import * as S from "./AppStyle.js"

export default function App() {
    return (
        <div className="App">
            <S.AppContainer>
                <Home/>
            </S.AppContainer>
        </div>
    );
}
