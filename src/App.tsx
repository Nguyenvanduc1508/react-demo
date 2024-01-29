import Header from "./Layout/UserLayout/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Layout/UserLayout/Footer/Footer";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
