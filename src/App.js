import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./component/HomeSection/Home";
import Detail from "./component/Detail/Detail";
function App() {
  const PublicRoute = () => {
    return (
      <MainLayout>
        <Outlet />
      </MainLayout>
    );
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route exact element={<PublicRoute />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail" element={<Detail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
