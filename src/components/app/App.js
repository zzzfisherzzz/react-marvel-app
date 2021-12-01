import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/comics" element={<ComicsPage />} />
            <Route
              exact
              path="/comics/:comicId"
              element={<SingleComicPage />}
            />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
