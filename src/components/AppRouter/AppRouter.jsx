import { Route,  Routes } from "react-router-dom";
import { RoutePaths } from "./RoutesConfig";
import { Profile } from "../../pages";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Profile/>} />
      {Object.entries(RoutePaths).map((route, idx) => (
        <Route
          key={idx}
          path={route[0]}
          element={(
            <div className='page-wrapper'>
              {route[1]}
            </div>
          )}
        />
      ))}
      </Routes>
);
}