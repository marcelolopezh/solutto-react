import SoluttoLayout from "../layouts/SoluttoLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Volare from "../pages/Volare/Volare";
import Contact from "../pages/Contact/Contact";
import Circo from "../pages/Circo/Circo";
import About from "../pages/About/About";
import Equilibrio from "../pages/Equilibrio/Equilibrio";
const generalRoutes = [
  {
    path: "*",
    layout: SoluttoLayout,
    component: Error,
  },
  {
    path: "/home",
    layout: SoluttoLayout,
    component: Home,
  },
  {
    path: "/",
    layout: SoluttoLayout,
    component: Home,
  },
  {
    path: "/circo",
    layout: SoluttoLayout,
    component: Circo,
  },
  {
    path: "/volare",
    layout: SoluttoLayout,
    component: Volare,
  },
  {
    path: "/equilibrio",
    layout: SoluttoLayout,
    component: Equilibrio,
  },
  {
    path: "/about",
    layout: SoluttoLayout,
    component: About,
  },
  {
    path: "/contacto",
    layout: SoluttoLayout,
    component: Contact,
  },
];

const routes = [...generalRoutes];

export default routes;
