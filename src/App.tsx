import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((item, index) => {
            let Layout = item.layout;
            return (
              <Route
                key={index}
                element={<Layout>{item.element}</Layout>}
                path={item.path}
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
