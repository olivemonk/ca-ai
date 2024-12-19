import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { routes } from "./routes/config";
import RouteGuard from "./routes/RouteGuard";
import Loading from "./components/Loading";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Suspense fallback={<Loading/>}>
          <Routes>
            {routes.map(({ path, component: Component, layout: Layout, protected: isProtected }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  isProtected ? (
                    <RouteGuard>
                      <Layout>
                        <Component />
                      </Layout>
                    </RouteGuard>
                  ) : (
                    <Layout>
                      <Component />
                    </Layout>
                  )
                }
              />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
