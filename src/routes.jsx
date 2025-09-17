import { Route, Routes } from "react-router-dom";
import App from "./App";
import MainContainer from "./components/MainContainer";

const AppRoutes = () => {
    return <> 
        <Routes>
            <Route path="/" element = {<App />}>
                <Route path="/" element = {<MainContainer />}/>
            </Route>
        </Routes>
    </>
}

export default AppRoutes;