import SoluttoLayout from "../layouts/SoluttoLayout";
import Error from "../pages/Error/Error";
import Compania from "../pages/Compania/Compania";
import Contact from "../pages/Contact/Contact";
import Espectaculos from "../pages/Espectaculos/Espectaculos";
import Home from "../pages/Home/Home";
import HomeLayout from "../layouts/HomeLayout";
import GaleriaHome from "../pages/Galeria/GaleriaHome";
import Circo from "../pages/Circo/Circo";
const generalRoutes = [
  {
    path: "*",
    layout: SoluttoLayout,
    component: Error,
  },
  {
    path:"/",
    layout:HomeLayout,
    component:Home
  },
  {
    path: "/compania",
    layout: SoluttoLayout,
    component: Compania,
  },
  {
    path: "/espectaculos",
    layout: SoluttoLayout,
    component: Espectaculos,
  },
  {
    path: "/circo",
    layout: SoluttoLayout,
    component: Circo,
  },
  {
    path: "/galeria",
    layout: SoluttoLayout,
    component: GaleriaHome
  },
  {
    path: "/contacto",
    layout: SoluttoLayout,
    component: Contact,
  },
];

const routes = [...generalRoutes];

export default routes;
