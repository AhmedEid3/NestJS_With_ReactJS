import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import About from '../Pages/About';
import Error404 from '../Pages/Error404';
import { Home } from '../Pages/Home';
import Login from '../Pages/Login';
import NavRoutes from './Routes';

const Navigation = () => {
  return (
    <Routes>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Route path={NavRoutes.loginLink} element={<Login />} />
      <Route path={NavRoutes.homeLink} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={NavRoutes.aboutLink} element={<About />} />

        {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
