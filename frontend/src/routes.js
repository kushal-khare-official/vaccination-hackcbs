import Dashboard from "views/Dashboard.js";
import HospitalForm from "views/HospitalForm.js";
import Manufacturer from "views/Manufacturer";
import Warehouse from "views/Warehouse";
import Registration from "views/Registration";
import Admina from "views/Admin";
import About from "views/About"
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  
  
  {
    path: "/registration",
    name: "Registration",
    icon: "tim-icons fas fa-user-alt",
    component: Registration,
    layout: "/admin",
  },
  {
    path: "/warehouseForm",
    name: "Warehouse",
    icon: "tim-icons fas fa-warehouse",
    component: Warehouse,
    layout: "/admin",
  },
  {
    path: "/manufacturerForm",
    name: "Manufacturer",
    icon: "tim-icons fas fa-industry",
    component: Manufacturer,
    layout: "/admin",
  },
  {
    path: "/hospitalForm",
    name: "Hospital",
    icon: "tim-icons far fa-hospital",
    component: HospitalForm,
    layout: "/admin",
  },
  
  {
    path: "/about",
    name: "About us",
    icon: "tim-icons fas fa-info-circle",
    component: About,
    layout: "/admin",
  },{
    path: "/admin",
    name: "Admin",
    icon: "tim-icons fas fa-user-lock",
    component: Admina,
    layout: "/admin",
  },
];
export default routes;
