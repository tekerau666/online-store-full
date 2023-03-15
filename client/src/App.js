import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import Footer from "./components/Footer";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
      {
          return <div className="mt-5 d-flex justify-content-center">
              <Spinner className="text-primary text-center" style={{width:"4rem", height:"4rem"}} animation={"border"}/>
          </div>
      }
      setTimeout("3000")
  }
  return (
    <Router>
      <NavBar />
      <AppRouter />
        <Footer/>
    </Router>
  );
});

export default App;
