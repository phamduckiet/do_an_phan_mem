import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Dangky from "./Components/account/Dangky";
import Login from "./Components/account/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const selector = useSelector(state => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if(selector?.user) {
      navigate('/admin')
    } else {
    console.log(selector.user);

      navigate('/admin/login')

    }

  }, [selector.user])


  return (
    <><Routes>
      <Route>
        <Route path="/admin/register" element={<Dangky />} />
        <Route path="/admin/login" element={<Login />} />
      </Route>
    </Routes>
      <div className="App">
        <AppHeader />
        <div className="SideMenuAndPageContent">
          <SideMenu></SideMenu>
          <PageContent></PageContent>
        </div>
        <AppFooter />
      </div>
    </>
  );
}
export default App;
