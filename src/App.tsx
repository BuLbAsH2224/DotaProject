import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultHeader, DefaultFooter } from "./components";
import { MainPage, NotFoundPage, SingleHeroPage } from "./pages";

function App() {
  return (
    <>
      <DefaultHeader />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/singleHero/:id" element={<SingleHeroPage />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
      <DefaultFooter />
    </>
  );
}

export default App;
