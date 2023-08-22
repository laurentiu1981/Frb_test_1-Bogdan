import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import RouteWrapper from "./routes/components/RouteWrapper";
import getRoutes from "./routes/routesObject";

function App(){
  const routes = getRoutes();
  console.log(routes);
  return (
    <Router>
      <Routes>
        {Object.values(routes).map((route,index) => {
          return (
            <Route
              path={route.path}
              key={index}
              element={
                <RouteWrapper
                  key={route.title}
                  element={route.element}
                  layout={route.layout}
                />
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;